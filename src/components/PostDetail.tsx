import { Box, Divider, Heading, Link, Text } from "@chakra-ui/react"
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote"
import { format } from "date-fns"

import { PostListItemProps } from "@/components/PostList/PostListItem"
import SiteConfig from "@/lib/SiteConfig"
import { components } from "@/components/MDXComponents"

interface Props extends PostListItemProps {
  slug: string
  mdxSource: MDXRemoteProps
}

const Footer = ({ date }) => {
  const formattedDate = format(new Date(date), "MMMM d, yyyy")
  return (
    <Box key={"footer"} py={3}>
      <Divider size={"md"} />
      <Box py={10}>
        <Text mb={2}>
          Authored by {SiteConfig.authorName} on {formattedDate}
        </Text>
        <Text fontSize="sm">
          Have comments or feedback?{" "}
          <Link href={`mailto:${SiteConfig.authorEmail}`} isExternal color="inherit" fontWeight="semibold" textDecoration="underline">
            I'd love to hear from you
          </Link>
          .
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
    maxW="2xl"
    w="full"
    mx="auto"
    px={{ base: 4, md: 6 }}
    textAlign="left"
  >
    <Heading
      textAlign="center"
      bgGradient={SiteConfig.gradient}
      bgClip="text"
      fontWeight="bold"
      as="h1"
      size="2xl"
      pb={2}
      mb={2}
      wordBreak="break-word"
      data-post-title={props.frontMatter.title}
    >
      {props.frontMatter.title}
    </Heading>

    <Text fontSize="sm" color="gray.500" _dark={{ color: SiteConfig.theme.dark.mutedText }} textAlign="center" mb={8}>
      {format(new Date(props.frontMatter.date), "MMMM d, yyyy")}
      {props.frontMatter.readTimeInMinutes
        ? ` · ${props.frontMatter.readTimeInMinutes} min read`
        : null}
    </Text>

    <MDXComponents slug={props.slug} mdxSource={props.mdxSource} />

    <Footer date={props.frontMatter.date} />
  </Box>
)

export default PostDetail
