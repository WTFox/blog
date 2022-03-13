import {
  Box,
  Center,
  Divider,
  Image,
  VStack,
  Heading,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import Head from "next/head";

import { Container } from "./Container";

const MobileNav = () => (
  <Container
    display={{ base: "flex", xl: "none" }}
    alignItems="center"
    borderBottomWidth="1px"
    justifyContent="flex-start"
  >
    <VStack py={20}>
      <Image
        borderRadius="full"
        boxSize="sm"
        src="https://avatars.githubusercontent.com/u/2353242?v=4"
        alt="A. Fox"
      />
    </VStack>
  </Container>
);

const VerticalDivider = () => {
  return (
    <Container
      pos={"fixed"}
      display={{ base: "none", xl: "flex" }}
      direction={"row"}
      alignContent={"normal"}
    >
      <Center height="80vh">
        <Divider bg="black" orientation="vertical" />
      </Center>
    </Container>
  );
};

const SidebarContent = () => {
  return (
    <Container
      h="full"
      minH="100vh"
      // pr={"5rem"}
      display={{ base: "none", xl: "flex" }}
    >
      <Box pt={20}>
        <Image
          borderRadius="full"
          boxSize="10rem"
          src="https://avatars.githubusercontent.com/u/2353242?v=4"
          alt="A. Fox"
        />
        <Heading textAlign={"center"} pt={10}>
          Hello
        </Heading>
      </Box>
    </Container>
  );
};

const Sidebar = () => {
  return (
    <Grid templateColumns="repeat(10, 1fr)">
      <GridItem colSpan={9}>
        <SidebarContent />
      </GridItem>
    </Grid>
  );
};

export { Sidebar, MobileNav };
