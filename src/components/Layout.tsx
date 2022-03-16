import DarkModeSwitch from "./DarkModeSwitch";
import Nav from "./Nav";

import { Box, Grid, GridItem } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <Box>
      <Grid templateColumns="repeat(10, 1fr)" gap={0}>
        <GridItem
          colStart={{ base: 0, lg: 1 }}
          colSpan={{ base: 0, lg: 1 }}
        ></GridItem>
        <GridItem
          pt={"5em"}
          colStart={{ base: 1, lg: 2 }}
          colSpan={{ base: 10, lg: 3 }}
        >
          <Nav />
        </GridItem>
        <GridItem
          pt={{ lg: "5em" }}
          colStart={{ base: 1, lg: 5 }}
          colSpan={{ base: 10, lg: 5 }}
        >
          {children}
          <DarkModeSwitch />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Layout;
