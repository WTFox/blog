import {
  Box,
  Link as ChakraLink,
  Divider,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

import { Container } from "./Container";
import { Icon } from "@chakra-ui/icons";
import Link from "next/link";
import Section from "./Section";
import SiteConfig from "../lib/config";
import profilePic from "../public/images/profile.jpg";

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
          );
        })}
      </Grid>
    </Section>
  );
};

const SidebarHero = () => {
  return (
    <Box>
      <Section delay={0.1}>
        <Link passHref href={"/"}>
          <ChakraLink cursor={"pointer"}>
            <Box
              borderWidth={4}
              bgGradient={"linear(to-l, #7928CA, #FF0080)"}
              w={"56"}
              display="inline-block"
              borderRadius="50"
              overflow="clip"
            >
              <Image src={profilePic.src} alt="Profile picture" />
            </Box>
          </ChakraLink>
        </Link>
      </Section>

      <Section delay={0.1} pt={5}>
        <Heading
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          textTransform={"uppercase"}
          fontSize="4xl"
          fontWeight="extrabold"
        >
          {SiteConfig.name}
        </Heading>
        <Container maxW={"md"} pt={5}>
          <Text fontSize={"md"} as="i">
            {SiteConfig.subtitle}
          </Text>
        </Container>
      </Section>
    </Box>
  );
};

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
  );
};

export default Sidebar;
