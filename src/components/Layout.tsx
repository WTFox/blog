import DarkModeSwitch from "./DarkModeSwitch";
import Nav from "./Nav";
import Particle from "./Particle";

import { Box, Grid, GridItem } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <Box>
      <Particle />
      <Grid templateColumns="repeat(10, 1fr)" gap={0}>
        <GridItem
          colStart={{ base: 0, xl: 1 }}
          colSpan={{ base: 0, xl: 1 }}
        ></GridItem>
        <GridItem
          pt={"5em"}
          colStart={{ base: 1, xl: 2 }}
          colSpan={{ base: 10, xl: 3 }}
          w="100%"
        >
          <Nav />
        </GridItem>
        <GridItem
          pt={"5em"}
          colStart={{ base: 1, xl: 5 }}
          colSpan={{ base: 10, xl: 5 }}
          w="100%"
        >
          {children}
          <DarkModeSwitch />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Layout;
