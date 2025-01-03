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
    <Box py={4} maxW={"8xl"}>
      <ChakraLink href={props.link}>
        <Heading pb={2} size="lg">
          {props.frontMatter.title}
        </Heading>
      </ChakraLink>

      <Text fontSize="lg" fontStyle="italic">
        {props.frontMatter.summary}
      </Text>

      <Text pt={2} fontSize="sm" fontStyle={"italic"}>
        {postDate} - {readTime} minute read
      </Text>
    </Box>
  )
}

export default PostListItem
