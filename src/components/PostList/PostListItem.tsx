import { Link as ChakraLink, Box, Heading, Text } from "@chakra-ui/react"
import Link from "next/link"

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
  return (
    <Box py={5} maxW={"8xl"}>
      <Link href={props.link} passHref>
        <ChakraLink>
          <Heading pb={2} size="lg">
            {props.frontMatter.title}
          </Heading>
        </ChakraLink>
      </Link>

      <Text fontSize="lg">{props.frontMatter.summary}</Text>

      <Text pt={2} fontSize="sm" fontStyle={"italic"}>
        {readTime} {readTime === 1 ? "minute" : "minutes"}
      </Text>
    </Box>
  )
}

export default PostListItem
