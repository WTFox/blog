import { DarkModeSwitch, ScrollToTop } from "./IconButtons";
import Nav from "./Nav";

import { Link, Box, Grid, GridItem } from "@chakra-ui/react";

import { useEffect, useState } from "react";

const Layout = ({ children }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
          {scrollPosition > 500 && <ScrollToTop />}
          <DarkModeSwitch />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Layout;
