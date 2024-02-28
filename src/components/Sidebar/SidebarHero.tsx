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

import { useState, useEffect } from "react"

export const SidebarHero = () => {
  const { colorMode } = useColorMode()
  const borderColor = useColorModeValue(
    SiteConfig.lightAccent,
    SiteConfig.darkAccent
  )

  const [mileage, setMileage] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/strava")
      if (!response.ok) {
        throw new Error("Failed to fetch mileage")
      }
      const data = await response.json()
      const miles = Math.round(data.miles)
      setMileage(miles)
    }
    fetchData()
  }, [])

  let borderProps: any
  if (colorMode === "light") {
    borderProps = { borderColor }
  } else {
    borderProps = { bgGradient: SiteConfig.gradient }
  }

  const currentYear = new Date().getFullYear()
  let subtitleValues = [
    "Software Engineer",
    mileage && `${currentYear}: ${mileage} miles 🚴🏃🚶‍♂️`,
    "Husband",
    "Dog lover",
    "Batman?",
    "Click here ^^",
  ]

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
        <Link passHref href={"/about"}>
          <ChakraLink cursor={"pointer"}>
            <Heading
              bgGradient={SiteConfig.gradient}
              bgClip="text"
              textTransform={"uppercase"}
              fontSize="4xl"
              fontWeight="extrabold"
            >
              {SiteConfig.authorName}
            </Heading>
          </ChakraLink>
        </Link>
        <Container maxW={"md"} pt={2}>
          <Heading size={"md"} fontWeight={"medium"}>
            <RoloText values={subtitleValues} />
          </Heading>
        </Container>
      </Section>
    </Box>
  )
}
