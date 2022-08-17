import NextDocument, { Head, Html, Main, NextScript } from "next/document"

import { ColorModeScript } from "@chakra-ui/react"

import SiteConfig from "@/lib/SiteConfig"

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head title={SiteConfig.siteTitle} />
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
