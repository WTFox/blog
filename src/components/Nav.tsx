import { Container } from "@/components/Container";
import { DownloadIcon, EmailIcon, Icon } from "@chakra-ui/icons";
import {
  Box,
  Divider,
  Grid,
  GridItem,
  Heading,
  Link as ChakraLink,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { BsFillPersonFill, BsMicFill } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { GoOctoface } from "react-icons/go";
import { IconType } from "react-icons/lib";
import profilePic from "../public/images/profile.jpg";
import Section from "./Section";

interface Link {
  href: string;
  icon: IconType | typeof Icon;
  text: string;
  isExternal: boolean;
}

const linkData: Link[] = [
  {
    href: "/about",
    icon: BsFillPersonFill,
    text: "/about",
    isExternal: false,
  },
  { href: "/talks", icon: BsMicFill, text: "/talks", isExternal: false },
  {
    href: "https://twitter.com/__wtfox__",
    icon: FaTwitter,
    text: "twitter",
    isExternal: true,
  },
  {
    href: "https://github.com/wtfox/",
    icon: GoOctoface,
    text: "github",
    isExternal: true,
  },
  {
    href: "/resume.pdf",
    icon: DownloadIcon,
    text: "resume",
    isExternal: false,
  },
  {
    href: "mailto:anthonyfox1988@gmail.com",
    icon: EmailIcon,
    text: "email",
    isExternal: true,
  },
];

const Links = () => {
  return (
    <Section pt={5} textAlign={{ lg: "center" }}>
      <Grid
        justifyItems={"left"}
        templateColumns={{ base: "repeat(2, 1fr)" }}
        gap={5}
      >
        {linkData.map((link, index) => {
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

const NavContent = () => {
  return (
    <Container>
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
        <Heading fontSize={"3xl"}>Anthony Fox</Heading>
        <Container maxW={"md"} pt={5}>
          <Text fontSize={"md"} as="i">
            Writer of code. Maker of things.
          </Text>
        </Container>
      </Section>
      <Divider pt={5} w={"2xs"} />
      <Links />
    </Container>
  );
};

const Nav = () => {
  return (
    <Container
      h={{ lg: "100vh" }}
      mt={{ base: 4, md: 0 }}
      textAlign="center"
      position={{ lg: "fixed" }}
    >
      <NavContent />
    </Container>
  );
};

export default Nav;
