import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Sidebar, MobileNav } from "../components/Sidebar";
import { Stack } from "@chakra-ui/react";

const Index = () => (
  <Container>
    <Stack>
      <DarkModeSwitch />
      <MobileNav />
      <Sidebar />
      <Main />
    </Stack>
  </Container>
);

export default Index;
