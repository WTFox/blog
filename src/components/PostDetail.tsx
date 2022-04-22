import { Box, Divider, Heading, Text } from "@chakra-ui/react"
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote"

import { PostListItemProps } from "@/components/PostList/PostListItem"
import SiteConfig from "@/lib/config"
import { components } from "@/components/MDXComponents"

interface Props extends PostListItemProps {
  mdxSource: MDXRemoteProps
}

const Footer = ({ date }) => {
  return (
    <Box py={3}>
      <Divider size={"md"} />
      <Box py={10}>
        <Text>
          Authored by {SiteConfig.name} on {date}
        </Text>
      </Box>
    </Box>
  )
}

const PostDetail = (props: Props) => (
  <Box px={{ base: 0, md: "10rem", xl: "16rem" }} textAlign={"justify"}>
    <Heading
      textAlign={"center"}
      bgGradient="linear(to-l, #7928CA, #FF0080)"
      bgClip="text"
      textTransform={"uppercase"}
      fontWeight="extrabold"
      as="h1"
      size="4xl"
      pb={"16"}
    >
      {props.frontMatter.title}
    </Heading>
    {/* @ts-ignore */}
    <MDXRemote {...props.mdxSource} components={components} />
    <Footer date={props.frontMatter.date} />
  </Box>
)

export default PostDetail
