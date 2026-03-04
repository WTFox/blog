import { Link as ChakraLink, Box, Heading, Text } from "@chakra-ui/react"
import { formatDistance } from "date-fns"

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
  return (
    <Box py={1.5} maxW={"8xl"} borderBottomWidth="1px" borderColor="inherit" _last={{ borderBottomWidth: 0 }}>
      <ChakraLink href={props.link} _hover={{ textDecoration: "none" }}>
        <Heading pb={1} size="md" _groupHover={{ color: "accent" }}>
          {props.frontMatter.title}
        </Heading>
      </ChakraLink>

      <Text fontSize="sm" fontStyle="italic" mb={1} color="gray.600" _dark={{ color: "gray.400" }}>
        {props.frontMatter.summary}
      </Text>

      <Text fontSize="xs" fontStyle="italic" color="gray.500" _dark={{ color: "gray.500" }}>
        {postDate} · {readTime} min read
      </Text>
    </Box>
  )
}

export default PostListItem
