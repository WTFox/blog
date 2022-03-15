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
  const color = useColorModeValue("purple", "pink");
  return (
    <Container mt={{ base: 4, md: 0 }} mx={24} textAlign="center">
      <Section delay={0.1}>
        <Link href={"/"}>
          <Box
            borderColor={color}
            borderWidth={10}
            borderStyle="solid"
            w={"xs"}
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
        <Heading fontSize={"2xl"}>Hi, I'm Anthony!</Heading>
        <Container pt={5}>
          <Text fontSize={"lg"} as="i">
            I like to make things. I like to make things. I like to make things.
            I like to make things. I like to make things.
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
