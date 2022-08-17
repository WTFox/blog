import NextDocument, { Head, Html, Main, NextScript } from "next/document"

import { ColorModeScript } from "@chakra-ui/react"

import SiteConfig from "@/lib/SiteConfig"

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head title={SiteConfig.siteTitle}>
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
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
