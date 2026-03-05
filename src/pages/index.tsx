import { ReactElement } from "react"

import { PostList } from "../components/PostList/PostList"
import { SidebarLayout } from "@/components/Layouts"

import { getPosts, getAllTags, validateFrontMatter } from "@/lib/post"
import generateRssFeed from "@/lib/generateRssFeed"
import generateSitemap from "@/lib/generateSitemap"
import generateSearchIndex from "@/lib/generateSearchIndex"
import Head from "next/head"
import SiteConfig from "@/lib/SiteConfig"

const Index = ({ posts, allTags }) => <PostList posts={posts} allTags={allTags} />

Index.getLayout = function getLayout(page: ReactElement) {
  return (
    <div>
      <Head>
        <title>{SiteConfig.siteTitle}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={SiteConfig.siteDescription} />
      </Head>
      <SidebarLayout>{page}</SidebarLayout>
    </div>
  )
}

export async function getStaticProps() {
  await generateRssFeed()
  generateSitemap()
  generateSearchIndex()

  const issues = validateFrontMatter()
  if (issues.length > 0) {
    console.warn("\n⚠ Front matter issues:")
    issues.forEach(({ slug, warnings }) => {
      console.warn(`  ${slug}: ${warnings.join(", ")}`)
    })
    console.warn("")
  }

  return {
    props: {
      posts: getPosts(),
      allTags: getAllTags(),
    },
  }
}

export default Index
