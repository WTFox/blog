import { NextApiRequest, NextApiResponse } from "next"
// @ts-ignore
import { kv } from "@vercel/kv"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const totalMiles = await kv.get("total_miles")
  if (totalMiles) {
    res.status(200).json({ miles: totalMiles })
    return
  }

  try {
    const activities = await getStravaAccessActivities()
    const totalMiles = calculateTotalMiles(activities)
    await kv.setex("total_miles", 3600, totalMiles)
    res.status(200).json({ miles: totalMiles })
  } catch (error) {
    try {
      await refreshTokensAndRetry(res)
    } catch (refreshError) {
      res
        .status(500)
        .json({ error: "Failed to refresh token and retrieve activities." })
    }
  }
  return
}

const getStravaAccessActivities = async () => {
  const currentYear = new Date().getFullYear()
  const accessToken = await kv.get("strava_access_token")
  const url = new URL("https://www.strava.com/api/v3/athlete/activities")
  url.searchParams.append(
    "after",
    String(Math.floor(new Date(currentYear, 0, 1).getTime() / 1000))
  )
  url.searchParams.append("per_page", "200")

  const response = await fetch(url.toString(), {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })

  if (!response.ok) {
    throw new Error("Failed to fetch Strava activities")
  }

  return await response.json()
}

const refreshStravaAccessToken = async () => {
  const refreshToken = await kv.get("strava_refresh_token")
  const response = await fetch("https://www.strava.com/api/v3/oauth/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      client_id: process.env.STRAVA_CLIENT_ID,
      client_secret: process.env.STRAVA_CLIENT_SECRET,
      refresh_token: refreshToken,
      grant_type: "refresh_token",
      scope: "read,activity:read_all",
    }),
  })

  if (!response.ok) {
    throw new Error("Failed to refresh Strava access token")
  }

  return await response.json()
}

async function refreshTokensAndRetry(res: NextApiResponse) {
  const { access_token, refresh_token } = await refreshStravaAccessToken()
  await kv.set("strava_access_token", access_token)
  await kv.set("strava_refresh_token", refresh_token)
  const activities = await getStravaAccessActivities()
  let totalMiles = calculateTotalMiles(activities)
  res.status(200).json({ miles: totalMiles })
}

function calculateTotalMiles(activities) {
  const activityTypes = ["Run", "Walk", "Ride"]
  return activities.reduce((total, activity) => {
    if (activityTypes.includes(activity.type) && activity.distance) {
      return total + activity.distance / 1609.344 // Convert meters to miles
    }
    return total
  }, 0)
}
