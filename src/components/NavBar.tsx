import {
  Avatar,
  Box,
  Link as ChakraLink,
  Menu,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { Container } from "./Container";
import DarkModeSwitch from "./DarkModeSwitch";
import Link from "next/link";
import profilePic from "../public/images/profile.jpg";

export default function NavBar() {
  return (
    <Box pb={"20"}>
      <Container
        direction={"row"}
        w={"100vw"}
        position={"fixed"}
        bg={useColorModeValue("white", "gray.800")}
        px={"10"}
        h={"28"}
        align={"baseline"}
        justifyContent={"space-between"}
      >
        <Menu>
          <Container direction={"row"}>
            <Text
              color={useColorModeValue("gray.800", "gray.200")}
              display={"inline"}
            >
              {"<-"}
            </Text>
            <Link href="/" passHref>
              <ChakraLink>
                <Box
                  bgGradient={"linear(to-bl, #7928CA, #FF0080)"}
                  borderStyle={"solid"}
                  borderRadius="full"
                  overflow="hidden"
                  borderWidth={"12"}
                >
                  <Avatar size={"lg"} src={profilePic.src} />
                </Box>
              </ChakraLink>
            </Link>
          </Container>
          <DarkModeSwitch
            motionProps={{
              style: {
                display: "inline-block",
              },
            }}
          />
        </Menu>
      </Container>
    </Box>
  );
}
