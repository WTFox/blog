import { Link as ChakraLink, Box, Text, useColorModeValue } from "@chakra-ui/react"
import { formatDistance } from "date-fns"
import SiteConfig from "@/lib/SiteConfig"

export interface PostListItemProps {
  link: string
  frontMatter: {
    title: string
    summary: string
    date: string
    readTimeInMinutes: number
  }
}

const PostListItem = (props: PostListItemProps) => {
  const postDate = formatDistance(
    new Date(props.frontMatter.date),
    new Date(),
    { addSuffix: true },
  )
  const t = SiteConfig.theme
  const hoverBg = useColorModeValue(t.light.hover, t.dark.elevated)

  return (
    <ChakraLink href={props.link} _hover={{ textDecoration: "none" }} display="block">
      <Box
        py={0.75}
        maxW={"8xl"}
        borderBottomWidth="1px"
        borderColor="inherit"
        _last={{ borderBottomWidth: 0 }}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        gap={4}
        px={2}
        mx={-2}
        borderRadius="sm"
        _hover={{ bg: hoverBg }}
        transition="background-color 0.2s"
      >
        <Text fontSize="md" fontWeight="normal" color="inherit">
          {props.frontMatter.title}
        </Text>

        <Text fontSize="sm" color="gray.500" _dark={{ color: t.dark.mutedText }} whiteSpace="nowrap" flexShrink={0}>
          {postDate}
        </Text>
      </Box>
    </ChakraLink>
  )
}

export default PostListItem
