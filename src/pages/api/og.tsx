import { ImageResponse } from "@vercel/og"
import { NextRequest } from "next/server"

export const config = {
  runtime: "edge",
}

export default function handler(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const title = searchParams.get("title") || "A. Fox Blog"
  const date = searchParams.get("date") || ""

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "#110D00",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 22,
              color: "#8B7355",
              letterSpacing: "0.08em",
              textTransform: "uppercase" as const,
              marginBottom: "32px",
            }}
          >
            afox.dev
          </div>
          <div
            style={{
              display: "flex",
              fontSize: title.length > 50 ? 44 : title.length > 30 ? 56 : 68,
              fontWeight: 700,
              lineHeight: 1.15,
              color: "#FBBF24",
            }}
          >
            {title}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 20,
              color: "#8B7355",
            }}
          >
            {date}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 20,
              color: "#B45309",
              fontWeight: 600,
            }}
          >
            Anthony Fox
          </div>
        </div>
        {/* Bottom accent bar */}
        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "linear-gradient(to right, #B45309, #FBBF24)",
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  )
}
