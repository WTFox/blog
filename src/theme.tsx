import { ThemeConfig, extendTheme, theme as baseTheme } from "@chakra-ui/react"

const fonts = {
  heading: "JetBrains Mono",
  body: "JetBrains Mono",
  mono: "JetBrains Mono",
}

const breakpoints = {
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
}

const colors = {
  primaryFontColor: {
    lightMode: baseTheme.colors.gray["700"],
    darkMode: baseTheme.colors.gray["200"],
  },
}

const theme: ThemeConfig = extendTheme({
  initialColorMode: "light",
  useSystemColorMode: false,
  fonts,
  colors,
  breakpoints,
  styles: {
    global: (props) => ({
      "html, body": {
        // color:
        //   props.colorMode === "dark"
        //     ? colors.primaryFontColor.darkMode
        //     : colors.primaryFontColor.lightMode,
        fontFamily: "JetBrains Mono, monospace",
        fontSize: "16px",
        lineHeight: 1.6,
        fontFeatureSettings:
          '"calt" 1, "clig" 1, "liga" 1, "ss02" 1,  "cv03" 1, "cv04" 1, "cv06" 1, "cv07" 1, "cv11" 1, "cv14" 1, "cv15" 1, "cv16" 1, "cv17" 1',
      },
    }),
  },
})

export default theme
