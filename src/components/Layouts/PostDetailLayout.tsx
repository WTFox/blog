import { Box, ChakraProvider } from "@chakra-ui/react";

import { Container } from "../Container";
import Fonts from "../Fonts";
import NavBar from "../NavBar";
import ScrollToTop from "../ScrollToTop";
import theme from "src/theme";

const PostDetailLayout = ({ children }) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Fonts />
      <NavBar />
      <Container pt={"10"}>
        <Box id="top" />
        <Box
          maxW={"100%"}
          textAlign={"left"}
          px={{ base: "2rem", xl: "12rem" }}
        >
          {children}
        </Box>
      </Container>
      <ScrollToTop />
    </ChakraProvider>
  );
};

export default PostDetailLayout;
