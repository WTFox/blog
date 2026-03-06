import { Link as ChakraLink, Box, Text, useColorModeValue } from "@chakra-ui/react"
import { formatDistance } from "date-fns"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import SiteConfig from "@/lib/SiteConfig"

export interface PostListItemProps {
  slug?: string
  link: string
  frontMatter: {
    title: string
    summary: string
    date: string
    readTimeInMinutes: number
    tags?: string[]
    wordCount?: number
  }
}

const PostListItem = (props: PostListItemProps) => {
  const [hovered, setHovered] = useState(false)
  const postDate = formatDistance(
    new Date(props.frontMatter.date),
    new Date(),
    { addSuffix: true },
  )
  const t = SiteConfig.theme
  const hoverBg = useColorModeValue(t.light.hover, t.dark.elevated)
  const mutedColor = useColorModeValue("gray.500", t.dark.mutedText)
  const titleHoverColor = useColorModeValue(t.light.headingColor, undefined)
  const titleHoverGradient = useColorModeValue(undefined, SiteConfig.gradient)

  return (
    <ChakraLink href={props.link} _hover={{ textDecoration: "none" }} display="block">
      <Box
        py={0.75}
        maxW={"8xl"}
        borderBottomWidth="1px"
        borderColor="inherit"
        _last={{ borderBottomWidth: 0 }}
        px={2}
        mx={-2}
        borderRadius="sm"
        _hover={{ bg: hoverBg }}
        transition="background-color 0.2s"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          gap={4}
        >
          <Text
            fontSize="md"
            fontWeight="normal"
            fontFamily="heading"
            color={hovered ? titleHoverColor : "inherit"}
            bgGradient={hovered ? titleHoverGradient : undefined}
            bgClip={hovered && titleHoverGradient ? "text" : undefined}
            transition="color 0.2s"
          >
            {props.frontMatter.title}
          </Text>

          <Text fontSize="sm" color={mutedColor} whiteSpace="nowrap" flexShrink={0} fontFamily="heading">
            {postDate}
          </Text>
        </Box>
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              style={{ overflow: "hidden" }}
            >
              {props.frontMatter.summary && (
                <Text
                  fontSize="sm"
                  color={mutedColor}
                  pt={1}
                  noOfLines={2}
                  lineHeight="1.5"
                  fontFamily="heading"
                >
                  {props.frontMatter.summary}
                </Text>
              )}
              <Text
                fontSize="xs"
                color={mutedColor}
                pt={0.5}
                pb={1.5}
                fontFamily="heading"
              >
                {props.frontMatter.readTimeInMinutes} min read
                {props.frontMatter.wordCount ? ` · ${props.frontMatter.wordCount.toLocaleString()} words` : ""}
              </Text>
            </motion.div>
          )}
        </AnimatePresence>
      </Box>
    </ChakraLink>
  )
}

export default PostListItem
