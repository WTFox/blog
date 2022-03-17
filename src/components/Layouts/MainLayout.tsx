import DarkModeSwitch from "../DarkModeSwitch";
import ScrollToTop from "../ScrollToTop";
import Sidebar from "../Sidebar";

import { ChakraProvider, Grid, GridItem } from "@chakra-ui/react";
import Fonts from "../Fonts";
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
          {children}
          <ScrollToTop />
          <DarkModeSwitch />
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
};

export default MainLayout;
