import {
  Center,
  Divider,
  Text,
  Stack,
  HStack,
  Heading,
} from "@chakra-ui/react";

import { Container } from "./Container";

const MobileNav = (props: any) => {
  return (
    <Container
      ml={{ base: 0, md: 60 }}
      display={{ base: "flex", xl: "none" }}
      alignItems="center"
      borderBottomWidth="1px"
      justifyContent="flex-start"
      {...props}
    >
      <Heading textAlign={"center"} size={"4xl"}>
        Hello!
      </Heading>
    </Container>
  );
};

const Sidebar = () => {
  return (
    <Container
      order={1}
      maxW="xl"
      position={"fixed"}
      display={{ base: "none", xl: "block" }}
    >
      <HStack justify={"center"} alignItems={"flex-start"}>
        <Stack>
          <Heading size={"2xl"}>Hello!</Heading>
        </Stack>

        <Center height="80vh">
          <Divider bg="black" orientation="vertical" />
        </Center>
      </HStack>
    </Container>
  );
};

export { Sidebar, MobileNav };
