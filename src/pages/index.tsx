import { ReactElement } from "react"

import { PostList } from "../components/PostList/PostList"
import { SidebarLayout } from "@/components/Layouts"

import { getPosts } from "@/lib/post"

const Index = ({ posts }) => <PostList posts={posts} />

Index.getLayout = function getLayout(page: ReactElement) {
  return <SidebarLayout>{page}</SidebarLayout>
}

export async function getStaticProps() {
  return {
    props: {
      posts: getPosts(),
    },
  }
}

export default Index
