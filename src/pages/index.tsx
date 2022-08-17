import { ReactElement } from "react"

import { PostList } from "../components/PostList/PostList"
import { SidebarLayout } from "@/components/Layouts"

import { getPosts } from "@/lib/post"
import generateRssFeed from "@/lib/generateRssFeed"
import Head from "next/head"
import SiteConfig from "@/lib/SiteConfig"

const Index = ({ posts }) => <PostList posts={posts} />

Index.getLayout = function getLayout(page: ReactElement) {
  return (
    <div>
      <Head>
        <title>{SiteConfig.siteTitle}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <SidebarLayout>{page}</SidebarLayout>
    </div>
  )
}

export async function getStaticProps() {
  await generateRssFeed()
  return {
    props: {
      posts: getPosts(),
    },
  }
}

export default Index
