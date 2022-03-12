import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import Sidebar from "../components/Sidebar";

const Index = () => (
  <Container direction="row">
    <DarkModeSwitch />
    <Sidebar />
    <Main />
  </Container>
);

export default Index;
