import { Link as ChakraLink, Box, Heading, Text, useColorModeValue } from "@chakra-ui/react"
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
  const readTime = props.frontMatter.readTimeInMinutes
  const postDate = formatDistance(
    new Date(props.frontMatter.date),
    new Date(),
    { addSuffix: true },
  )
  const hoverBg = useColorModeValue("gray.100", "gray.800")
  const accentColor = useColorModeValue(SiteConfig.lightAccent, SiteConfig.darkAccent)

  return (
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
      <ChakraLink href={props.link} _hover={{ textDecoration: "none" }} flex={1}>
        <Text fontSize="md" fontWeight="normal" _groupHover={{ color: accentColor }} color="inherit" transition="color 0.2s">
          {props.frontMatter.title}
        </Text>
      </ChakraLink>

      <Text fontSize="sm" color="gray.500" _dark={{ color: "gray.500" }} whiteSpace="nowrap" flexShrink={0}>
        {postDate}
      </Text>
    </Box>
  )
}

export default PostListItem
