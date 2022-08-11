import { Box, ChakraProvider } from "@chakra-ui/react"

import { Container } from "../Container"
import NavBar from "../NavBar"
import ScrollToTop from "../ScrollToTop"
import theme from "src/theme"

const FullWidthLayout = ({ children }) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <NavBar />
      <Container pt={"10"}>
        <Box id="top" />
        <Box maxW={"100%"} px={{ base: "2rem", xl: "12rem" }}>
          {children}
        </Box>
      </Container>
      <ScrollToTop />
    </ChakraProvider>
  )
}

export default FullWidthLayout
