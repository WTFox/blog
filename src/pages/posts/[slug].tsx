import PostDetail from "@/components/PostDetail"
import { FullWidthLayout } from "@/components/Layouts"
import { ReactElement } from "react"
import fs from "fs"
import matter from "gray-matter"
import { serialize } from "next-mdx-remote/serialize"
import { getPosts, lookupPostFromSlug } from "@/lib/post"

const PostDetailView = ({ link, frontMatter, mdxSource }) => {
  return (
    <PostDetail link={link} frontMatter={frontMatter} mdxSource={mdxSource} />
  )
}

PostDetailView.getLayout = function getLayout(page: ReactElement) {
  return <FullWidthLayout>{page}</FullWidthLayout>
}

const getStaticPaths = async () => {
  return {
    paths: getPosts().map((post) => post.link),
    fallback: false,
  }
}

const getStaticProps = async ({ params: { slug } }) => {
  const post = lookupPostFromSlug(slug)
  const markdownXFile = fs.readFileSync(post.path, "utf-8")

  const { data: frontMatter, content } = matter(markdownXFile)
  const mdxSource = await serialize(content)

  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
    },
  }
}

export { getStaticProps, getStaticPaths }
export default PostDetailView
