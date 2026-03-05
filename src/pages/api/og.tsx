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
          justifyContent: "center",
          padding: "60px 80px",
          background: "#110D00",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <div
            style={{
              fontSize: 24,
              color: "#8B7355",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            afox.dev
          </div>
          <div
            style={{
              fontSize: title.length > 40 ? 48 : 60,
              fontWeight: 700,
              lineHeight: 1.2,
              background: "linear-gradient(to left, #B45309, #FBBF24)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {title}
          </div>
          {date && (
            <div
              style={{
                fontSize: 20,
                color: "#8B7355",
                marginTop: "8px",
              }}
            >
              {date}
            </div>
          )}
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 60,
            right: 80,
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              fontSize: 20,
              color: "#FBBF24",
              fontWeight: 600,
            }}
          >
            Anthony Fox
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(to left, #B45309, #FBBF24)",
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
