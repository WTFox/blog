import {
  Icon,
  Text,
  Box,
  Heading,
  Link as ChakraLink,
  Divider,
  GridItem,
  Grid,
} from "@chakra-ui/react";

import Link from "next/link";
import Image from "next/image";

import { EmailIcon, DownloadIcon } from "@chakra-ui/icons";
import { GoOctoface } from "react-icons/go";
import { FaNewspaper } from "react-icons/fa";
import { BsFillPersonFill, BsMic, BsTwitter } from "react-icons/bs";
import Section from "./Section";
import { Container } from "@/components/Container";

import profilePic from "../public/images/profile.jpg";

const linkData = [
  { href: "/#Posts", icon: FaNewspaper, text: "    Posts", isExternal: false },
  { href: "/talks", icon: BsMic, text: "    Talks", isExternal: false },
  {
    href: "/about",
    icon: BsFillPersonFill,
    text: "    About Me",
    isExternal: false,
  },
  {
    href: "https://twitter.com/__wtfox__",
    icon: BsTwitter,
    text: "    Twitter",
    isExternal: true,
  },
  {
    href: "https://github.com/wtfox/",
    icon: GoOctoface,
    text: "    Github",
    isExternal: true,
  },
  { href: "/", icon: DownloadIcon, text: "    Resume", isExternal: false },
  {
    href: "mailto:anthonyfox1988@gmail.com",
    icon: EmailIcon,
    text: "    Email",
    isExternal: true,
  },
];

const Links = () => {
  return (
    <Section pt={5} textAlign={{ lg: "center" }}>
      <Grid
        justifyItems={"left"}
        templateColumns={{ base: "repeat(2, 1fr)" }}
        gap={2}
      >
        {linkData.map((link) => {
          return (
            <GridItem>
              <Link passHref href={link.href}>
                <ChakraLink isExternal={link.isExternal} fontSize={"md"}>
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

const NavContent = () => {
  return (
    <Container h="100vh" mt={{ base: 4, md: 0 }} textAlign="center">
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
              <Image src={profilePic} alt="A. Fox" />
            </Box>
          </ChakraLink>
        </Link>
      </Section>

      <Section delay={0.1} pt={5}>
        <Heading fontSize={"xl"}>Hi, I'm Anthony!</Heading>
        <Container maxW={"md"} pt={5}>
          <Text fontSize={"sm"} as="i">
            Writer of code. Maker of things.
          </Text>
        </Container>
      </Section>

      <Divider pt={5} w={"xs"} />
      <Links />
    </Container>
  );
};

const Nav = () => {
  return (
    <Box position={{ lg: "fixed" }}>
      <NavContent />
    </Box>
  );
};

export default Nav;
