import {
  Avatar,
  Box,
  Link as ChakraLink,
  Menu,
  Text,
  useColorMode,
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
                <Box overflow="hidden">
                  <Avatar
                    borderWidth={"2px"}
                    borderStyle={"solid"}
                    borderRadius="full"
                    size={"lg"}
                    src={profilePic.src}
                    borderColor={useColorModeValue("#7928CA", "#FF0080")}
                  />
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
