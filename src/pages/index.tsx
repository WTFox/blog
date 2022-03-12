import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import Sidebar from "../components/Sidebar";
import { HStack } from "@chakra-ui/react";

const Index = () => (
  <Container>
    <HStack>
      <DarkModeSwitch />
      <Sidebar />
      <Main />
    </HStack>
  </Container>
);

export default Index;
