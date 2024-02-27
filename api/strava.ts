import { NextApiRequest, NextApiResponse } from "next"
import axios from "axios"
// @ts-ignore
import { kv } from "@vercel/kv"

const getStravaAccessActivities = async () => {
  const accessToken = await kv.get("strava_access_token")
  const currentYear = new Date().getFullYear()
  return await axios.get("https://www.strava.com/api/v3/athlete/activities", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    params: {
      after: Math.floor(new Date(currentYear, 0, 1).getTime() / 1000),
      per_page: 200,
    },
  })
}

const refreshStravaAccessToken = async () => {
  const refreshToken = await kv.get("strava_refresh_token")
  return await axios.post("https://www.strava.com/api/v3/oauth/token", {
    client_id: process.env.STRAVA_CLIENT_ID,
    client_secret: process.env.STRAVA_CLIENT_SECRET,
    refresh_token: refreshToken,
    grant_type: "refresh_token",
    scope: "read,activity:read_all",
  })
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const activities = await getStravaAccessActivities()
    .then((response) => {
      return response.data
    })
    .catch(async (error) => {
      const response = await refreshStravaAccessToken()
      const accessToken = response.data.access_token
      const refreshToken = response.data.refresh_token
      await kv.set("strava_access_token", accessToken)
      await kv.set("strava_refresh_token", refreshToken)
      const activities = await getStravaAccessActivities()
      return activities.data
    })

  let totalMiles = 0
  const activityTypes = ["Run", "Walk", "Ride"]
  activities.forEach((activity: any) => {
    if (activityTypes.includes(activity.type) && activity.distance) {
      totalMiles += activity.distance / 1609.344 // Convert meters to miles
    }
  })

  return res.status(200).json({ miles: totalMiles })
}
