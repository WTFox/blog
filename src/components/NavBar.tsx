import {
  Avatar,
  Box,
  Link as ChakraLink,
  Menu,
  Text,
  useColorModeValue,
} from "@chakra-ui/react"

import { Container } from "./Container"
import DarkModeSwitch from "./DarkModeSwitch"
import SiteConfig from "@/lib/SiteConfig"
import profilePic from "../../public/images/profile.jpg"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"

export default function NavBar() {
  const router = useRouter()
  const linkHref = router.asPath === "/" ? "/about" : "/"

  const [scrollPosition, setScrollPosition] = useState(0)
  const [postTitle, setPostTitle] = useState<string | null>(null)
  const [readingProgress, setReadingProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset)

      // Get the post title heading element
      const titleElement = document.querySelector('[data-post-title]')
      if (titleElement) {
        const rect = titleElement.getBoundingClientRect()
        // Show title in nav when heading is above the navbar
        if (rect.bottom < 64) {
          const title = titleElement.getAttribute('data-post-title')
          setPostTitle(title)
        } else {
          setPostTitle(null)
        }

        // Reading progress
        const docHeight = document.documentElement.scrollHeight - window.innerHeight
        setReadingProgress(docHeight > 0 ? Math.min(window.scrollY / docHeight, 1) : 0)
      } else {
        setReadingProgress(0)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <Box pb={"20"}>
      <Container
        direction={"row"}
        w={"100vw"}
        position={"fixed"}
        zIndex={"1"}
        bg={useColorModeValue("white", SiteConfig.theme.dark.bg)}

        px={{ base: "10", xl: "20" }}
        h={"16"}
        align={"center"}
        justifyContent={"space-between"}
      >
        <Menu>
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
        </Menu>
        {postTitle && (
          <Text
            fontSize={{ base: "sm", md: "md" }}
            fontWeight="semibold"
            noOfLines={1}
            maxW={{ base: "150px", md: "300px" }}
            textAlign="center"
            flex={1}
          >
            {postTitle}
          </Text>
        )}
        <Menu>
          <DarkModeSwitch
            motionProps={{
              style: {
                display: "inline-block",
              },
            }}
          />
        </Menu>
      </Container>
      {readingProgress > 0 && (
        <Box
          position="fixed"
          top="64px"
          left={0}
          h="2px"
          w={`${readingProgress * 100}%`}
          bgGradient={SiteConfig.gradient}
          zIndex={2}
          transition="width 0.1s linear"
        />
      )}
    </Box>
  )
}
