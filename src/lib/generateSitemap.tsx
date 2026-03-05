import fs from "fs"
import { getPosts } from "./post"
import SiteConfig from "./SiteConfig"

export default function generateSitemap() {
  const posts = getPosts()
  const siteURL = SiteConfig.siteURL

  const staticPages = ["", "/about"]

  const urls = [
    ...staticPages.map(
      (page) =>
        `  <url>
    <loc>${siteURL}${page}</loc>
    <changefreq>${page === "" ? "weekly" : "monthly"}</changefreq>
    <priority>${page === "" ? "1.0" : "0.8"}</priority>
  </url>`
    ),
    ...posts.map(
      (post) =>
        `  <url>
    <loc>${siteURL}/posts/${post.slug}</loc>
    <lastmod>${new Date(post.frontMatter.date).toISOString().split("T")[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
    ),
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`

  fs.writeFileSync("./public/sitemap.xml", sitemap)
}
