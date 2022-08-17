import { Box, Divider, Heading, Text } from "@chakra-ui/react"
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote"

import { PostListItemProps } from "@/components/PostList/PostListItem"
import SiteConfig from "@/lib/SiteConfig"
import { components } from "@/components/MDXComponents"

interface Props extends PostListItemProps {
  slug: string
  mdxSource: MDXRemoteProps
}

const Footer = ({ date }) => {
  return (
    <Box py={3}>
      <Divider size={"md"} />
      <Box py={10}>
        <Text>
          Authored by {SiteConfig.authorName} on {date}
        </Text>
      </Box>
    </Box>
  )
}

const PostDetail = (props: Props) => (
  <Box px={{ base: 0, md: "16", xl: "12" }} textAlign={"justify"}>
    <Heading
      textAlign={"center"}
      bgGradient={SiteConfig.gradient}
      bgClip="text"
      textTransform={"uppercase"}
      fontWeight="extrabold"
      as="h1"
      size="3xl"
      pb={"16"}
    >
      {props.frontMatter.title}
    </Heading>
    {/* @ts-ignore */}
    <MDXRemote {...props.mdxSource} components={components(props.slug)} />
    <Footer date={props.frontMatter.date} />
  </Box>
)

export default PostDetail
