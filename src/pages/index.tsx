import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Sidebar, MobileNav } from "../components/Sidebar";

import { Grid, GridItem } from "@chakra-ui/react";

const Index = () => (
  <Container>
    <DarkModeSwitch />
    <Grid templateColumns="repeat(3, 1fr)">
      <GridItem colSpan={1} alignItems="start" justifyContent="start">
        <Sidebar />
      </GridItem>

      <GridItem
        alignItems="start"
        justifyContent="start"
        colSpan={{ sm: 3, xl: 2 }}
      >
        <MobileNav />
        <Main />
      </GridItem>
    </Grid>
  </Container>
);

export default Index;
