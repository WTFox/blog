import "focus-visible/dist/focus-visible"

import type { ReactElement, ReactNode } from "react"

import type { AppProps } from "next/app"
import type { NextPage } from "next"

import "@fontsource/jetbrains-mono.css"

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  // @ts-ignore
  return getLayout(<Component {...pageProps} />)
}
