import DarkModeSwitch from "./DarkModeSwitch";
import Nav from "./Nav";

import { Grid, GridItem } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <Grid templateColumns="repeat(8, 1fr)" gap={0}>
      <GridItem
        pt={"5em"}
        colStart={{ base: 1, xl: 1 }}
        colSpan={{ base: 8, xl: 3 }}
        w="100%"
      >
        <Nav />
      </GridItem>
      <GridItem
        pt={"5em"}
        colStart={{ base: 1, xl: 4 }}
        colSpan={{ base: 8, xl: 4 }}
        w="100%"
      >
        {children}
        <DarkModeSwitch />
      </GridItem>
    </Grid>
  );
};

export default Layout;
