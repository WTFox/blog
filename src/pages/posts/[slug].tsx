import PostDetail from "@/components/PostDetail"
import { FullWidthLayout } from "@/components/Layouts"
import { ReactElement } from "react"
import fs from "fs"
import matter from "gray-matter"
import { serialize } from "next-mdx-remote/serialize"
import { getPosts, lookupPostFromSlug, getAdjacentPosts } from "@/lib/post"
import Head from "next/head"
import SiteConfig from "@/lib/SiteConfig"
import { format } from "date-fns"

const PostDetailView = ({ link, frontMatter, mdxSource, slug, adjacentPosts }) => {
  const ogDate = frontMatter.date ? format(new Date(frontMatter.date), "MMMM d, yyyy") : ""
  const ogUrl = `${SiteConfig.siteURL}/api/og?title=${encodeURIComponent(frontMatter.title)}&date=${encodeURIComponent(ogDate)}`

  return (
    <div>
      <Head>
        <title>{frontMatter.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={frontMatter.summary || ""} />
        <meta property="og:title" content={frontMatter.title} />
        <meta property="og:description" content={frontMatter.summary || ""} />
        <meta property="og:image" content={ogUrl} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={frontMatter.title} />
        <meta name="twitter:description" content={frontMatter.summary || ""} />
        <meta name="twitter:image" content={ogUrl} />
      </Head>
      <PostDetail
        slug={slug}
        link={link}
        frontMatter={frontMatter}
        mdxSource={mdxSource}
        adjacentPosts={adjacentPosts}
      />
    </div>
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

  const adjacentPosts = getAdjacentPosts(slug)

  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
      adjacentPosts: {
        prev: adjacentPosts.prev ? { link: adjacentPosts.prev.link, frontMatter: { title: adjacentPosts.prev.frontMatter.title } } : null,
        next: adjacentPosts.next ? { link: adjacentPosts.next.link, frontMatter: { title: adjacentPosts.next.frontMatter.title } } : null,
      },
    },
  }
}

export { getStaticProps, getStaticPaths }
export default PostDetailView
