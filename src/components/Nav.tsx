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

import { GoOctoface } from "react-icons/go";
import Section from "./Section";
import { Container } from "@/components/Container";

const Links = () => {
  return (
    <Section pt={10} textAlign="left" w="80%">
      <VStack>
        <Link passHref href={"/about"}>
          <ChakraLink fontSize={"xl"}>
            <Text textAlign={"left"}>
              <Icon as={GoOctoface} />
              {"    About"}
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
      </VStack>
    </Section>
  );
};

const NavContent = () => {
  return (
    <Container h="100vh" mt={{ base: 4, md: 0 }} textAlign="center">
      <Section delay={0.1}>
        <Link href={"/"}>
          <Box
            borderWidth={3}
            bgGradient="linear(to-tl, #7928CA, #FF0080)"
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
