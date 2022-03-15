import DarkModeSwitch from "./DarkModeSwitch";
import Nav from "./Nav";
import Particle from "./Particle";

import { Box, Grid, GridItem } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <Box>
      <Grid templateColumns="repeat(10, 1fr)" gap={0}>
        <GridItem
          colStart={{ base: 0, xl: 1 }}
          colSpan={{ base: 0, xl: 1 }}
        ></GridItem>
        <GridItem
          pt={"5em"}
          colStart={{ base: 1, xl: 2 }}
          colSpan={{ base: 10, xl: 3 }}
        >
          <Nav />
        </GridItem>
        <GridItem
          pt={"5em"}
          colStart={{ base: 1, xl: 5 }}
          colSpan={{ base: 10, xl: 5 }}
        >
          {children}
          <DarkModeSwitch />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Layout;
