import NextDocument, { Head, Html, Main, NextScript } from "next/document"

import { ColorModeScript } from "@chakra-ui/react"

import SiteConfig from "@/lib/SiteConfig"

export default class Document extends NextDocument {
  render() {
    const ogUrl = `${SiteConfig.siteURL}/api/og?title=${encodeURIComponent(SiteConfig.siteTitle)}`
    return (
      <Html>
        <Head title={SiteConfig.siteTitle}>
          <meta property="og:title" content={SiteConfig.siteTitle} />
          <meta property="og:description" content={SiteConfig.siteDescription} />
          <meta property="og:image" content={ogUrl} />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link
            href="https://fonts.googleapis.com/css2?family=Literata:ital,opsz,wght@0,7..72,400;0,7..72,500;0,7..72,600;0,7..72,700;1,7..72,400;1,7..72,500&display=swap"
            rel="stylesheet"
          />
          <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
          <link rel="alternate" type="application/rss+xml" title={SiteConfig.siteTitle} href="/rss/feed.xml" />
        </Head>
        <body>
          {/* Make Color mode to persists when you refresh the page. */}
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
