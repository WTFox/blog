import React from "react"

import { Divider } from "@chakra-ui/react"

import { Container } from "@/components/Container"
import { SidebarHero } from "./SidebarHero"
import { SidebarLinks } from "./SidebarLinks"

const Sidebar = () => {
  return (
    <Container
      h={{ lg: "100vh" }}
      mt={{ base: 4, md: 0 }}
      textAlign="center"
      position={{ lg: "fixed" }}
    >
      <SidebarHero />
      <Divider pt={5} w={"2xs"} />
      <SidebarLinks />
    </Container>
  )
}

export default Sidebar
