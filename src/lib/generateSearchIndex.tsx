import fs from "fs"
import { getPosts } from "./post"

export default function generateSearchIndex() {
  const posts = getPosts()

  const searchIndex = posts.map((post) => ({
    slug: post.slug,
    title: post.frontMatter.title,
    summary: post.frontMatter.summary,
    date: post.frontMatter.date,
    tags: post.frontMatter.tags || [],
    link: post.link,
  }))

  fs.mkdirSync("./public/search", { recursive: true })
  fs.writeFileSync("./public/search/index.json", JSON.stringify(searchIndex))
}
