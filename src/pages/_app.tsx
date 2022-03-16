import { ChakraProvider } from "@chakra-ui/react";

import theme from "../theme";
import Fonts from "@/components/Fonts";
import { AppProps } from "next/app";

import Layout from "@/components/Layout";
import Particle from "@/components/Particle";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // TODO: add Head tag
    <ChakraProvider resetCSS theme={theme}>
      <Particle />
      <Fonts />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
export default MyApp;
