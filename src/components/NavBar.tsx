import {
  Avatar,
  Box,
  Link as ChakraLink,
  Menu,
  useColorModeValue,
} from "@chakra-ui/react"

import { Container } from "./Container"
import DarkModeSwitch from "./DarkModeSwitch"
import profilePic from "../../public/images/profile.jpg"
import { useRouter } from "next/router"

export default function NavBar() {
  const router = useRouter()
  const linkHref = router.asPath === "/" ? "/about" : "/"
  return (
    <Box pb={"20"}>
      <Container
        direction={"row"}
        w={"100vw"}
        position={"fixed"}
        zIndex={"1"}
        bg={useColorModeValue("white", "gray.800")}
        px={{ base: "10", xl: "20" }}
        h={"16"}
        align={"baseline"}
        justifyContent={"space-between"}
      >
        <Menu>
          <Container direction={"row"}>
            <ChakraLink href={linkHref}>
              <Box overflow="hidden">
                <Avatar
                  borderWidth={"2px"}
                  borderStyle={"solid"}
                  borderRadius="full"
                  size={"md"}
                  src={profilePic.src}
                />
              </Box>
            </ChakraLink>
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
  )
}
