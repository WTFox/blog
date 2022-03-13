import {
  Box,
  Center,
  Divider,
  Text,
  VStack,
  Heading,
  Grid,
  GridItem,
} from "@chakra-ui/react";

import { Container } from "./Container";

const MobileNav = (props: any) => {
  return (
    <Container
      display={{ base: "flex", xl: "none" }}
      alignItems="center"
      borderBottomWidth="1px"
      justifyContent="flex-start"
      {...props}
    >
      <VStack pb={10}>
        <Heading textAlign={"center"} size={"4xl"}>
          Hello!
        </Heading>
        <Text>This is a story all about how!</Text>
      </VStack>
    </Container>
  );
};

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
      top={0}
      pos="fixed"
      display={{ base: "none", xl: "flex" }}
    >
      <Box pt={10}>
        <Heading size={"2xl"}>Hello!</Heading>
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

      <GridItem colSpan={1} alignItems="flex-start" justifyContent="flex-end">
        <VerticalDivider />
      </GridItem>
    </Grid>
  );
};

export { Sidebar, MobileNav };
