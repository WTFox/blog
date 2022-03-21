import { Box, ChakraProvider, Grid, GridItem } from "@chakra-ui/react";

import DarkModeSwitch from "../DarkModeSwitch";
import Fonts from "../Fonts";
import ScrollToTop from "../ScrollToTop";
import Sidebar from "../Sidebar";
import theme from "../../theme";

const MainLayout = ({ children }) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Fonts />
      <Grid templateColumns="repeat(10, 1fr)">
        <GridItem
          pt={"5em"}
          colStart={{ base: 1, lg: 2, "2xl": 3 }}
          colSpan={{ base: 10, lg: 3, "2xl": 2 }}
        >
          <Sidebar />
        </GridItem>
        <GridItem
          py="5em"
          colStart={{ base: 1, lg: 5, "2xl": 5 }}
          colSpan={{ base: 10, lg: 5, "2xl": 5 }}
        >
          <Box id="top" />
          {children}
          <ScrollToTop />
          <DarkModeSwitch />
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
};

export default MainLayout;
