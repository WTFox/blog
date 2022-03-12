import { Center, Divider, Text } from "@chakra-ui/react";

import { Container } from "./Container";

const Sidebar = () => {
  return (
    <Container
      direction="row"
      maxW="xl"
      position={"fixed"}
      overflow={"hidden"}
      display={{ sm: "none", xl: "flex" }}
    >
      <Container flexDirection={"row"} flexGrow={1}>
        <Text>Sidebar content!</Text>
      </Container>

      <Center height="80vh">
        <Divider bg="black" orientation="vertical" />
      </Center>
    </Container>
  );
};

export default Sidebar;
