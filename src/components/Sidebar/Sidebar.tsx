import React from "react"
import Link from "next/link"

import {
  Box,
  Link as ChakraLink,
  Divider,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react"
import { useColorMode, useColorModeValue } from "@chakra-ui/react"
import { Icon } from "@chakra-ui/icons"

import { Container } from "@/components/Container"
import Section from "@/components/Section"
import SiteConfig from "../../lib/config"
import profilePic from "../../../public/images/profile.jpg"
import RoloText from "../RoloText"

const SidebarLinks = () => {
  return (
    <Section pt={5} textAlign={{ lg: "center" }}>
      <Grid
        justifyItems={"left"}
        templateColumns={{ base: "repeat(2, 1fr)" }}
        gap={5}
      >
        {SiteConfig.links.map((link, index) => {
          return (
            <GridItem key={index}>
              <Link passHref href={link.href}>
                <ChakraLink isExternal={link.isExternal} fontSize={"xl"}>
                  <Text>
                    <Icon as={link.icon} /> {link.text}{" "}
                  </Text>
                </ChakraLink>
              </Link>
            </GridItem>
          )
        })}
      </Grid>
    </Section>
  )
}

const SidebarHero = () => {
  const { colorMode } = useColorMode()
  const borderColor = useColorModeValue(
    SiteConfig.lightAccent,
    SiteConfig.darkAccent
  )

  let borderProps: any
  if (colorMode === "light") {
    borderProps = { borderColor }
  } else {
    borderProps = { bgGradient: SiteConfig.gradient }
  }

  return (
    <Box>
      <Section delay={0.1}>
        <Link passHref href={"/about"}>
          <ChakraLink cursor={"pointer"}>
            <Box
              borderWidth={4}
              w={"56"}
              display="inline-block"
              borderRadius="50"
              overflow="hidden"
              {...borderProps}
            >
              <Image src={profilePic.src} alt="Profile picture" />
            </Box>
          </ChakraLink>
        </Link>
      </Section>

      <Section delay={0.1} pt={5}>
        <Heading
          bgGradient={SiteConfig.gradient}
          bgClip="text"
          textTransform={"uppercase"}
          fontSize="4xl"
          fontWeight="extrabold"
        >
          {SiteConfig.name}
        </Heading>
        <Container maxW={"md"} pt={2}>
          <RoloText>{SiteConfig.subtitles}</RoloText>
        </Container>
      </Section>
    </Box>
  )
}

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
