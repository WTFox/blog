import { ChakraProvider, Grid, GridItem } from "@chakra-ui/react";
import theme from "src/theme";
import DarkModeSwitch from "../DarkModeSwitch";
import Fonts from "../Fonts";
import ScrollToTop from "../ScrollToTop";

const PostDetailLayout = ({ children }) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Fonts />
      <Grid templateColumns="repeat(5, 1fr)">
        <GridItem py="5em" colStart={2} colSpan={3}>
          {children}
          <ScrollToTop />
          <DarkModeSwitch />
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
};

export default PostDetailLayout;
