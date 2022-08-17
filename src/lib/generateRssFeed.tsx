import fs from "fs"
import { Feed } from "feed"
import { getPosts } from "./post"
import SiteConfig from "./SiteConfig"

export default async function generateRssFeed() {
  const posts = getPosts()
  const siteURL = SiteConfig.siteURL
  const today = new Date()
  const author = {
    name: SiteConfig.authorName,
  }

  const feed = new Feed({
    title: SiteConfig.siteTitle,
    description: SiteConfig.siteDescription,
    id: siteURL,
    link: siteURL,
    image: `${siteURL}/favicon.ico`,
    favicon: `${siteURL}/favicon.ico`,
    copyright: `All rights reserved ${today.getFullYear()}, ${
      SiteConfig.authorName
    }`,
    updated: today,
    generator: "Feed for Node.js",
    feedLinks: {
      rss2: `${siteURL}/rss/feed.xml`,
      json: `${siteURL}/rss/feed.json`,
    },
    author,
  })

  posts.forEach((post) => {
    const url = `${siteURL}/posts/${post.slug}`
    feed.addItem({
      title: post.frontMatter.title,
      id: url,
      link: url,
      description: post.frontMatter.summary,
      content: post.frontMatter.summary,
      author: [author],
      contributor: [author],
      date: new Date(post.frontMatter.date),
    })
  })

  fs.mkdirSync("./public/rss", { recursive: true })
  fs.writeFileSync("./public/rss/feed.xml", feed.rss2())
  fs.writeFileSync("./public/rss/feed.json", feed.json1())
}
