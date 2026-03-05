import {
  Box,
  Flex,
  Input,
  Link as ChakraLink,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Tag,
  Text,
  useColorModeValue,
} from "@chakra-ui/react"
import { SearchIcon } from "@chakra-ui/icons"
import { useCallback, useEffect, useRef, useState } from "react"
import Fuse from "fuse.js"
import SiteConfig from "@/lib/SiteConfig"

interface SearchItem {
  slug: string
  title: string
  summary: string
  date: string
  tags: string[]
  link: string
}

interface Props {
  isOpen: boolean
  onClose: () => void
}

const SearchModal = ({ isOpen, onClose }: Props) => {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchItem[]>([])
  const [index, setIndex] = useState<Fuse<SearchItem> | null>(null)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  const t = SiteConfig.theme
  const hoverBg = useColorModeValue(t.light.hover, t.dark.elevated)
  const selectedBg = useColorModeValue(t.light.surface, t.dark.surface)
  const borderColor = useColorModeValue(t.light.border, t.dark.border)
  const accentColor = useColorModeValue(SiteConfig.lightAccent, SiteConfig.darkAccent)
  const mutedColor = useColorModeValue("gray.500", t.dark.mutedText)
  const tagBg = useColorModeValue(t.light.inlineCodeBg, t.dark.inlineCodeBg)
  const tagColor = useColorModeValue(t.light.inlineCodeColor, t.dark.inlineCodeColor)

  useEffect(() => {
    if (isOpen && !index) {
      fetch("/search/index.json")
        .then((res) => res.json())
        .then((data: SearchItem[]) => {
          const fuse = new Fuse(data, {
            keys: [
              { name: "title", weight: 3 },
              { name: "summary", weight: 1 },
              { name: "tags", weight: 2 },
            ],
            threshold: 0.4,
            includeScore: true,
          })
          setIndex(fuse)
        })
    }
  }, [isOpen, index])

  useEffect(() => {
    if (!isOpen) {
      setQuery("")
      setResults([])
      setSelectedIndex(0)
    }
  }, [isOpen])

  useEffect(() => {
    if (!index || !query.trim()) {
      setResults([])
      setSelectedIndex(0)
      return
    }
    const searchResults = index.search(query).map((r) => r.item)
    setResults(searchResults)
    setSelectedIndex(0)
  }, [query, index])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault()
        setSelectedIndex((i) => Math.min(i + 1, results.length - 1))
      } else if (e.key === "ArrowUp") {
        e.preventDefault()
        setSelectedIndex((i) => Math.max(i - 1, 0))
      } else if (e.key === "Enter" && results[selectedIndex]) {
        window.location.href = results[selectedIndex].link
        onClose()
      }
    },
    [results, selectedIndex, onClose]
  )

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg" initialFocusRef={inputRef}>
      <ModalOverlay bg="blackAlpha.600" backdropFilter="blur(4px)" />
      <ModalContent
        mx={4}
        mt="20vh"
        borderRadius="lg"
        overflow="hidden"
        borderWidth="1px"
        borderColor={borderColor}
        bg={useColorModeValue("white", t.dark.bg)}
      >
        <ModalBody p={0}>
          <Flex align="center" px={4} borderBottomWidth="1px" borderColor={borderColor}>
            <SearchIcon color={mutedColor} mr={3} />
            <Input
              ref={inputRef}
              placeholder="Search posts..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              border="none"
              py={4}
              fontSize="md"
              _focus={{ boxShadow: "none" }}
              _placeholder={{ color: mutedColor }}
            />
            <Box
              as="kbd"
              fontSize="xs"
              px={1.5}
              py={0.5}
              borderWidth="1px"
              borderColor={borderColor}
              borderRadius="md"
              color={mutedColor}
              ml={2}
              whiteSpace="nowrap"
            >
              esc
            </Box>
          </Flex>

          {query.trim() && (
            <Box maxH="50vh" overflowY="auto" py={2}>
              {results.length === 0 ? (
                <Text py={8} textAlign="center" color={mutedColor} fontSize="sm">
                  No results found
                </Text>
              ) : (
                results.map((item, i) => (
                  <ChakraLink
                    key={item.slug}
                    href={item.link}
                    _hover={{ textDecoration: "none" }}
                    display="block"
                  >
                    <Box
                      px={4}
                      py={3}
                      bg={i === selectedIndex ? selectedBg : "transparent"}
                      _hover={{ bg: hoverBg }}
                      transition="background-color 0.1s"
                      cursor="pointer"
                    >
                      <Text fontWeight="medium" fontSize="sm" color={i === selectedIndex ? accentColor : "inherit"}>
                        {item.title}
                      </Text>
                      <Text fontSize="xs" color={mutedColor} noOfLines={1} mt={0.5}>
                        {item.summary}
                      </Text>
                      {item.tags.length > 0 && (
                        <Flex gap={1} mt={1.5} flexWrap="wrap">
                          {item.tags.map((tag) => (
                            <Tag key={tag} size="sm" bg={tagBg} color={tagColor} fontSize="xs">
                              {tag}
                            </Tag>
                          ))}
                        </Flex>
                      )}
                    </Box>
                  </ChakraLink>
                ))
              )}
            </Box>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default SearchModal
