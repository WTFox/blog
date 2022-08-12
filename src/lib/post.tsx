import fs from "fs"

import path from "path"
import matter from "gray-matter"
import { glob } from "glob"
import SiteConfig from "@/lib/SiteConfig"

interface Post {
  frontMatter: any
  link: string
  slug: string
  path: string
}

function getPosts(): Post[] {
  const files = glob.sync(`${SiteConfig.postsDirectory}/**/*.mdx`)

  let posts = files.map((filename) => {
    const filename_base = path.basename(filename).replace(".mdx", "")

    const markdownWithMeta = fs.readFileSync(filename, "utf-8")
    const { data: frontMatter } = matter(markdownWithMeta)

    // filenames are special. They're slugs.
    const slug = filename_base
    const link = `/posts/${slug}`

    return {
      frontMatter,
      link,
      slug,
      path: filename,
    }
  })

  posts = posts
    // filter out drafts
    .filter((post) => {
      if (process.env.NODE_ENV === "development") {
        return true
      }
      return !post.frontMatter.draft
    })
    // filter out posts with a date greater than today
    .filter((post) => {
      if (process.env.NODE_ENV === "development") {
        return true
      }
      return new Date(post.frontMatter.date).getTime() <= new Date().getTime()
    })

  return posts
}

function lookupPostFromSlug(slug: string): Post {
  return getPosts().find((post) => post.slug === slug)
}

export { getPosts, lookupPostFromSlug }
