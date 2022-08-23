import { Link as ChakraLink, Box, Heading, Text } from "@chakra-ui/react"
import Link from "next/link"
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
  const postDate = formatDistance(new Date(props.frontMatter.date), new Date(), { addSuffix: true })
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
        {postDate} - {readTime} minute read
      </Text>
    </Box>
  )
}

export default PostListItem
