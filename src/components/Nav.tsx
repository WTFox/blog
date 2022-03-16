import {
  Icon,
  Text,
  Box,
  Image,
  useColorModeValue,
  Heading,
  Link as ChakraLink,
  Divider,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";

import { EmailIcon, DownloadIcon } from "@chakra-ui/icons";
import { GoOctoface } from "react-icons/go";
import { FaNewspaper } from "react-icons/fa";
import { BsFillPersonFill, BsMic, BsTwitter } from "react-icons/bs";
import Section from "./Section";
import { Container } from "@/components/Container";

const Links = () => {
  return (
    <Section pt={10} textAlign="left" w="80%">
      <VStack>
        <Link passHref href={"/"}>
          <ChakraLink fontSize={"xl"}>
            <Text textAlign={"left"}>
              <Icon as={FaNewspaper} />
              {"    Posts"}
            </Text>
          </ChakraLink>
        </Link>
        <Link passHref href={"/talks"}>
          <ChakraLink fontSize={"xl"}>
            <Text textAlign={"left"}>
              <Icon as={BsMic} />
              {"    Talks"}
            </Text>
          </ChakraLink>
        </Link>
        <Link passHref href={"/about"}>
          <ChakraLink fontSize={"xl"}>
            <Text textAlign={"left"}>
              <Icon as={BsFillPersonFill} />
              {"    About"}
            </Text>
          </ChakraLink>
        </Link>
        <Link passHref href={"https://twitter.com/__wtfox__"}>
          <ChakraLink isExternal fontSize={"xl"}>
            <Text textAlign={"left"}>
              <Icon as={BsTwitter} />
              {"    Twitter"}
            </Text>
          </ChakraLink>
        </Link>
        <Link passHref href={"https://github.com/wtfox"}>
          <ChakraLink isExternal fontSize={"xl"}>
            <Text textAlign={"left"}>
              <Icon as={GoOctoface} />
              {"    Github"}
            </Text>
          </ChakraLink>
        </Link>
        <Link passHref href={"/"}>
          <ChakraLink fontSize={"xl"}>
            <Text textAlign={"left"}>
              <Icon as={DownloadIcon} />
              {"    Resume"}
            </Text>
          </ChakraLink>
        </Link>
        <Link passHref href={"/"}>
          <ChakraLink fontSize={"xl"}>
            <Text textAlign={"left"}>
              <Icon as={EmailIcon} />
              {"    Email"}
            </Text>
          </ChakraLink>
        </Link>
      </VStack>
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
              <Image
                src="https://avatars.githubusercontent.com/u/2353242?v=4"
                alt="A. Fox"
                borderRadius="full"
                width="100%"
                height="100%"
              />
            </Box>
          </ChakraLink>
        </Link>
      </Section>

      <Section delay={0.1} py={10}>
        <Heading fontSize={"xl"}>Hi, I'm Anthony!</Heading>
        <Container maxW={"md"} pt={5}>
          <Text fontSize={"sm"} as="i">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi fugiat
            soluta sunt est ut, exercitationem odit repellat saepe, debitis,
            excepturi alias sint veritatis. Quisquam non facere necessitatibus
            illo ullam nam.
          </Text>
        </Container>
      </Section>

      <Divider w={"xs"} />
      <Links />
    </Container>
  );
};

const Nav = () => {
  return <NavContent />;
};

export default Nav;
