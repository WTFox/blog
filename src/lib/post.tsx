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
    const { data: frontMatter, content } = matter(markdownWithMeta)

    const wordCount = content.trim().split(/\s+/).length
    frontMatter.readTimeInMinutes = Math.max(1, Math.round(wordCount / 200))
    frontMatter.wordCount = wordCount

    // Auto-summary: use first paragraph if no summary provided
    if (!frontMatter.summary) {
      const firstParagraph = content.trim().split(/\n\n/)[0]?.replace(/[#*_`\[\]]/g, "").trim()
      frontMatter.summary = firstParagraph?.slice(0, 160) || ""
    }

    // Ensure tags is always an array
    frontMatter.tags = frontMatter.tags || []

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

function getSortedPosts(): Post[] {
  return getPosts().sort((a, b) => {
    return new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime()
  })
}

function getAllTags(): string[] {
  const tags = new Set<string>()
  getPosts().forEach((post) => {
    ;(post.frontMatter.tags || []).forEach((tag: string) => tags.add(tag))
  })
  return Array.from(tags).sort()
}

function getAdjacentPosts(slug: string): { prev: Post | null; next: Post | null } {
  const sorted = getSortedPosts()
  const index = sorted.findIndex((post) => post.slug === slug)
  return {
    prev: index < sorted.length - 1 ? sorted[index + 1] : null,
    next: index > 0 ? sorted[index - 1] : null,
  }
}

function lookupPostFromSlug(slug: string): Post {
  return getPosts().find((post) => post.slug === slug)
}

function validateFrontMatter(): { slug: string; warnings: string[] }[] {
  const issues: { slug: string; warnings: string[] }[] = []
  getPosts().forEach((post) => {
    const warnings: string[] = []
    if (!post.frontMatter.title) warnings.push("Missing title")
    if (!post.frontMatter.date) warnings.push("Missing date")
    if (!post.frontMatter.summary) warnings.push("Missing summary")
    if (!post.frontMatter.tags || post.frontMatter.tags.length === 0) warnings.push("No tags")
    if (warnings.length > 0) issues.push({ slug: post.slug, warnings })
  })
  return issues
}

export { getPosts, getSortedPosts, getAllTags, getAdjacentPosts, lookupPostFromSlug, validateFrontMatter }
