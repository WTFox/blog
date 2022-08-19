import { ThemeConfig, extendTheme, theme as baseTheme } from "@chakra-ui/react"

import { createBreakpoints } from "@chakra-ui/theme-tools"

const fonts = {
  heading: `'Montserrat', sans-serif`,
  body: `'Montserrat', sans-serif`,
  mono: `'Source Code Pro', monospace`,
}

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
})

const colors = {
  primaryFontColor: {
    lightMode: baseTheme.colors.gray["700"],
    darkMode: baseTheme.colors.gray["200"],
  },
}

const theme: ThemeConfig = extendTheme({
  initialColorMode: "dark",
  useSystemColorMode: false,
  fonts,
  colors,
  breakpoints,
  styles: {
    global: (props) => ({
      "html, body": {
        color:
          props.colorMode === "dark"
            ? colors.primaryFontColor.darkMode
            : colors.primaryFontColor.lightMode,
      },
    }),
  },
})

export default theme
