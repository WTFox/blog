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
    <Box key={"footer"} py={3}>
      <Divider size={"md"} />
      <Box py={10}>
        <Text>
          Authored by {SiteConfig.authorName} on {date}
        </Text>
      </Box>
    </Box>
  )
}

const MDXComponents: React.FC<{ slug: string; mdxSource: any }> = (props) => {
  // @ts-ignore
  const mdxProps = {
    components: components(props.slug),
    mt: 8,
    wordBreak: "break-word",
    ...props.mdxSource,
  }

  return <MDXRemote {...mdxProps} />
}

const PostDetail = (props: Props) => (
  <Box
    maxW={{ base: "100%", md: "2xl", lg: "3xl", xl: "4xl" }}
    px={{ base: 4, md: 8, xl: 12 }}
    textAlign="left"
  >
    <Heading
      textAlign="center"
      bgGradient={SiteConfig.gradient}
      bgClip="text"
      textTransform="uppercase"
      fontWeight="bold"
      as="h1"
      size="2xl"
      pb={8}
      wordBreak="break-word"
    >
      {props.frontMatter.title}
    </Heading>

    <MDXComponents slug={props.slug} mdxSource={props.mdxSource} />

    <Footer date={props.frontMatter.date} />
  </Box>
)

export default PostDetail
