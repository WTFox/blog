import { Box, IconButton, Link, useColorModeValue } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

import { TriangleUpIcon } from "@chakra-ui/icons"
import SiteConfig from "@/lib/SiteConfig"

const SCROLLBREAKPOINT = 200

const ScrollToTopButton = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <Box
      display="inline-block"
      position="fixed"
      bottom="1rem"
      right="1rem"
      key={useColorModeValue("light", "dark")}
      as="button"
      onClick={handleClick}
      cursor="pointer"
    >
      <IconButton
        aria-label="Scroll to top"
        bgColor={useColorModeValue(
          SiteConfig.lightAccent,
          SiteConfig.darkAccent
        )}
        color={useColorModeValue("white", SiteConfig.theme.dark.buttonIcon)}
        icon={<TriangleUpIcon />}
      ></IconButton>
    </Box>
  )
}

const ScrollToTop = () => {
  const [scrollPosition, setScrollPosition] = useState(0)

  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(position)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <AnimatePresence>
      {scrollPosition > SCROLLBREAKPOINT && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <ScrollToTopButton />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTop
