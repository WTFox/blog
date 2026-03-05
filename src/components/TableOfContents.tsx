import { Box, Link as ChakraLink, Text, useColorModeValue } from "@chakra-ui/react"
import { useState, useEffect, useRef, useCallback } from "react"
import SiteConfig from "@/lib/SiteConfig"

interface TocItem {
  id: string
  text: string
  level: number
}

const TableOfContents = () => {
  const [headings, setHeadings] = useState<TocItem[]>([])
  const [activeId, setActiveId] = useState<string>("")
  const suppressScrollRef = useRef(false)

  const t = SiteConfig.theme
  const accentColor = useColorModeValue(SiteConfig.lightAccent, SiteConfig.darkAccent)
  const mutedColor = useColorModeValue("gray.500", t.dark.mutedText)
  const borderColor = useColorModeValue(t.light.border, t.dark.border)

  useEffect(() => {
    const timeout = setTimeout(() => {
      const container = document.querySelector("[data-post-content]")
      if (!container) return

      const elements = Array.from(container.querySelectorAll("h1, h2, h3")).map((el) => {
        if (!el.id) {
          el.id =
            el.textContent
              ?.toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/(^-|-$)/g, "") || ""
        }
        return {
          id: el.id,
          text: el.textContent || "",
          level: parseInt(el.tagName.replace("H", "")),
        }
      })
      setHeadings(elements)
    }, 300)

    return () => clearTimeout(timeout)
  }, [])

  useEffect(() => {
    if (headings.length === 0) return

    const handleScroll = () => {
      if (suppressScrollRef.current) return
      let current = ""
      for (const { id } of headings) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 80) {
          current = id
        }
      }
      setActiveId(current)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [headings])

  const handleClick = useCallback((id: string) => {
    setActiveId(id)
    suppressScrollRef.current = true
    setTimeout(() => {
      suppressScrollRef.current = false
    }, 500)
  }, [])

  if (headings.length < 3) return null

  return (
    <Box
      as="nav"
      position="fixed"
      top="80px"
      maxH="calc(100vh - 100px)"
      overflowY="auto"
      w="200px"
      pr={4}
      borderLeftWidth="1px"
      borderColor={borderColor}
      pl={4}
      display={{ base: "none", xl: "block" }}
      fontSize="sm"
      left="calc(50% + 370px)"
      sx={{
        "&::-webkit-scrollbar": { width: "2px" },
        "&::-webkit-scrollbar-thumb": { bg: borderColor },
      }}
    >
      <Text fontWeight="semibold" mb={3} fontSize="xs" textTransform="uppercase" letterSpacing="wide" color={mutedColor}>
        On this page
      </Text>
      {headings.map((heading) => (
        <ChakraLink
          key={heading.id}
          href={`#${heading.id}`}
          display="block"
          py={1}
          pl={(heading.level - 1) * 3}
          color={activeId === heading.id ? accentColor : mutedColor}
          fontWeight={activeId === heading.id ? "medium" : "normal"}
          _hover={{ color: accentColor, textDecoration: "none" }}
          transition="color 0.15s"
          noOfLines={1}
          onClick={() => handleClick(heading.id)}
        >
          {heading.text}
        </ChakraLink>
      ))}
    </Box>
  )
}

export default TableOfContents
