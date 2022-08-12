import React from "react"
import Link from "next/link"
import {
  useColorMode,
  useColorModeValue,
  Box,
  Link as ChakraLink,
  Heading,
  Image,
} from "@chakra-ui/react"
import { Container } from "@/components/Container"
import Section from "@/components/Section"
import SiteConfig from "../../lib/SiteConfig"
import profilePic from "../../../public/images/profile.jpg"
import RoloText from "../RoloText"

export const SidebarHero = () => {
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
