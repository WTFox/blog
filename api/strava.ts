import { NowRequest, NowResponse } from "@vercel/node"
import axios from "axios"

const accessToken = process.env.STRAVA_ACCESS_TOKEN

export default async function handler(req: NowRequest, res: NowResponse) {
  const currentYear = new Date().getFullYear()
  const response = await axios.get(
    "https://www.strava.com/api/v3/athlete/activities",
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        after: Math.floor(new Date(currentYear, 0, 1).getTime() / 1000),
        per_page: 200,
      },
    }
  )

  let totalMiles = 0
  const activityTypes = ["Run", "Walk", "Ride"]
  response.data.forEach((activity: any) => {
    if (activityTypes.includes(activity.type) && activity.distance) {
      totalMiles += parseFloat(activity.distance)
    }
  })

  const miles = totalMiles / 1609.344
  return res.status(200).json({ miles })
}
