import { Box, Divider, Heading, Link, Text, useColorModeValue } from "@chakra-ui/react"
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote"
import { format } from "date-fns"

import { PostListItemProps } from "@/components/PostList/PostListItem"
import SiteConfig from "@/lib/SiteConfig"
import { components } from "@/components/MDXComponents"
import PostNavigation from "@/components/PostNavigation"
import TableOfContents from "@/components/TableOfContents"

interface Props extends PostListItemProps {
  slug: string
  mdxSource: MDXRemoteProps
  adjacentPosts?: {
    prev: { link: string; frontMatter: { title: string } } | null
    next: { link: string; frontMatter: { title: string } } | null
  }
}

const Footer = ({ date }) => {
  const formattedDate = format(new Date(date), "MMMM d, yyyy")
  return (
    <Box key={"footer"} py={3}>
      <Divider size={"md"} />
      <Box py={10}>
        <Text mb={2} fontFamily="heading">
          Authored by {SiteConfig.authorName} on {formattedDate}
        </Text>
        <Text fontSize="sm" fontFamily="heading">
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

const PostDetail = (props: Props) => {
  const t = SiteConfig.theme
  const mutedColor = useColorModeValue("gray.500", t.dark.mutedText)

  const meta = []
  meta.push(format(new Date(props.frontMatter.date), "MMMM d, yyyy"))
  if (props.frontMatter.readTimeInMinutes) {
    meta.push(`${props.frontMatter.readTimeInMinutes} min read`)
  }
  if (props.frontMatter.wordCount) {
    meta.push(`${props.frontMatter.wordCount.toLocaleString()} words`)
  }

  return (
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
        size={{ base: "xl", md: "2xl" }}
        pb={2}
        mb={2}
        wordBreak="break-word"
        data-post-title={props.frontMatter.title}
      >
        {props.frontMatter.title}
      </Heading>

      <Text fontSize="sm" color={mutedColor} textAlign="center" mb={8} fontFamily="heading">
        {meta.join(" · ")}
        {props.frontMatter.tags?.length > 0 && (
          <>
            {" · "}
            {props.frontMatter.tags.join(", ")}
          </>
        )}
      </Text>

      <Box data-post-content>
        <MDXComponents slug={props.slug} mdxSource={props.mdxSource} />
      </Box>

      {props.adjacentPosts && (
        <PostNavigation prev={props.adjacentPosts.prev} next={props.adjacentPosts.next} />
      )}

      <Footer date={props.frontMatter.date} />

      <TableOfContents />
    </Box>
  )
}

export default PostDetail
