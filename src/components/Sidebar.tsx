import { Center, Divider, Text } from "@chakra-ui/react";

import { Container } from "./Container";

const Sidebar = () => {
  return (
    <Container direction="row" minW="md" maxW="3xl" w="2xl">
      <Container direction="column" flexGrow={1} height="100vh">
        <Text>Sidebar content!</Text>
      </Container>

      <Center height="80vh">
        <Divider bg="black" orientation="vertical" />
      </Center>
    </Container>
  );
};

export default Sidebar;
