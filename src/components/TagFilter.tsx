import { Box, Flex, Tag, Text, useColorModeValue } from "@chakra-ui/react"
import { useState } from "react"
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons"
import SiteConfig from "@/lib/SiteConfig"

interface Props {
  tags: string[]
  activeTag: string | null
  onTagClick: (tag: string | null) => void
}

const TagFilter = ({ tags, activeTag, onTagClick }: Props) => {
  const [expanded, setExpanded] = useState(false)
  const t = SiteConfig.theme
  const activeBg = useColorModeValue(SiteConfig.lightAccent, SiteConfig.darkAccent)
  const activeColor = useColorModeValue("white", t.dark.buttonIcon)
  const mutedColor = useColorModeValue("gray.500", t.dark.mutedText)
  const hoverBg = useColorModeValue(t.light.hover, t.dark.elevated)

  if (tags.length === 0) return null

  return (
    <Box pb={2}>
      <Text
        fontSize="xs"
        color={mutedColor}
        cursor="pointer"
        onClick={() => setExpanded(!expanded)}
        _hover={{ color: useColorModeValue(SiteConfig.lightAccent, SiteConfig.darkAccent) }}
        transition="color 0.15s"
        display="inline-flex"
        alignItems="center"
        gap={1}
        userSelect="none"
      >
        {activeTag ? `filtered: ${activeTag}` : "filter by tag"}
        {expanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </Text>
      {expanded && (
        <Flex gap={1.5} flexWrap="wrap" mt={2}>
          {activeTag && (
            <Tag
              size="sm"
              cursor="pointer"
              variant="outline"
              borderColor={mutedColor}
              color={mutedColor}
              _hover={{ bg: hoverBg }}
              onClick={() => onTagClick(null)}
              transition="all 0.15s"
              borderRadius="full"
              fontSize="xs"
            >
              clear
            </Tag>
          )}
          {tags.map((tag) => (
            <Tag
              key={tag}
              size="sm"
              cursor="pointer"
              bg={activeTag === tag ? activeBg : "transparent"}
              color={activeTag === tag ? activeColor : mutedColor}
              _hover={{ bg: activeTag === tag ? activeBg : hoverBg }}
              onClick={() => onTagClick(activeTag === tag ? null : tag)}
              transition="all 0.15s"
              borderRadius="full"
              fontSize="xs"
            >
              {tag}
            </Tag>
          ))}
        </Flex>
      )}
    </Box>
  )
}

export default TagFilter
