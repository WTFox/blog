import React, { useEffect, useRef, useState } from "react"
import { Box, useColorMode } from "@chakra-ui/react"
import mermaid from "mermaid"
import SiteConfig from "@/lib/SiteConfig"

let mermaidCounter = 0

const lightThemeVars = {
  theme: "base" as const,
  themeVariables: {
    primaryColor: "#FEF3C7",
    primaryTextColor: "#92400E",
    primaryBorderColor: "#D97706",
    lineColor: "#B45309",
    secondaryColor: "#FDE68A",
    tertiaryColor: "#FFFBEB",
    textColor: "#92400E",
    mainBkg: "#FEF3C7",
    nodeBorder: "#D97706",
    clusterBkg: "#FFFBEB",
    clusterBorder: "#E5C07A",
    edgeLabelBackground: "#FFFBEB",
    fontSize: "14px",
    fontFamily: "DM Sans, sans-serif",
  },
}

const darkThemeVars = {
  theme: "base" as const,
  themeVariables: {
    primaryColor: "#2A1F00",
    primaryTextColor: "#FCD34D",
    primaryBorderColor: "#FBBF24",
    lineColor: "#FBBF24",
    secondaryColor: "#1A1400",
    tertiaryColor: "#110D00",
    textColor: "#FCD34D",
    mainBkg: "#2A1F00",
    nodeBorder: "#FBBF24",
    clusterBkg: "#1A1400",
    clusterBorder: "#3D2E00",
    edgeLabelBackground: "#1A1400",
    fontSize: "14px",
    fontFamily: "DM Sans, sans-serif",
  },
}

export default function Mermaid({ children }) {
  const definition = typeof children === "string" ? children.trim() : ""
  const ref = useRef<HTMLDivElement>(null)
  const [id] = useState(() => `mermaid-${++mermaidCounter}`)
  const { colorMode } = useColorMode()
  const t = SiteConfig.theme

  useEffect(() => {
    if (!ref.current || !definition) return

    const themeConfig = colorMode === "dark" ? darkThemeVars : lightThemeVars

    mermaid.mermaidAPI.initialize({
      startOnLoad: false,
      ...themeConfig,
    } as any)

    mermaid.mermaidAPI.render(id, definition, (result) => {
      if (ref.current) {
        ref.current.innerHTML = result
      }
    })
  }, [id, definition, colorMode])

  const borderColor = colorMode === "dark" ? t.dark.border : t.light.border
  const bg = colorMode === "dark" ? t.dark.surface : t.light.surface

  return (
    <Box
      my={6}
      p={6}
      borderRadius="md"
      borderWidth="1px"
      borderColor={borderColor}
      bg={bg}
      overflow="auto"
      sx={{
        "& svg": {
          margin: "0 auto",
          maxWidth: "100%",
          height: "auto",
        },
        _dark: {
          "& svg text": { fill: "#FCD34D !important" },
          "& svg .entityLabel rect": { fill: "#2A1F00 !important" },
          "& svg .attributeBoxEven, & svg .attributeBoxOdd": { fill: "#1A1400 !important" },
        },
      }}
    >
      <div key="faux" id={id} style={{ display: "none" }} />
      <div key="preview" ref={ref} />
    </Box>
  )
}
