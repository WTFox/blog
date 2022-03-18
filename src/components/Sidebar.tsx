import {
  Box,
  Link as ChakraLink,
  Divider,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  useColorModeValue,
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
              borderWidth={3}
              bgGradient={"linear(to-bl, #7928CA, #FF0080)"}
              borderStyle="solid"
              w={"56"}
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >
              <Image src={profilePic.src} alt="A. Fox" />
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
          Anthony Fox
        </Heading>
        <Container maxW={"md"} pt={5}>
          <Text fontSize={"md"} as="i">
            Writer of code. Maker of things.
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
