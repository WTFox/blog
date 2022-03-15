import { Box, Image, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";

import Section from "./Section";

const NavContent = () => {
  const color = useColorModeValue("purple", "pink");
  return (
    <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }} textAlign="center">
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
    </Box>
  );
};

const Nav = () => {
  return <NavContent />;
};

export default Nav;
