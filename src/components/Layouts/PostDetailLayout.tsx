import { Box, ChakraProvider, Grid, GridItem } from "@chakra-ui/react";

import DarkModeSwitch from "../DarkModeSwitch";
import Fonts from "../Fonts";
import NavBar from "../NavBar";
import ScrollToTop from "../ScrollToTop";
import theme from "src/theme";

const PostDetailLayout = ({ children }) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Fonts />
      <NavBar />
      <Grid templateColumns="repeat(5, 1fr)">
        <GridItem py="5em" colStart={2} colSpan={3}>
          <Box id="top" />
          {children}
          <ScrollToTop />
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
};

export default PostDetailLayout;
