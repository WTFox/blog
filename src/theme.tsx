import { ThemeConfig, extendTheme } from "@chakra-ui/react";

import { createBreakpoints } from "@chakra-ui/theme-tools";

const fonts = {
  heading: `'MonoLisa', monospace`,
  body: `'MonoLisa', monospace`,
  mono: `'MonoLisa', monospace`,
};

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
});

const theme: ThemeConfig = extendTheme({
  initialColorMode: "dark",
  useSystemColorMode: false,
  colors: {
    black: "#16161D",
  },
  fonts,
  breakpoints,
});

export default theme;
