import { ChakraProvider } from "@chakra-ui/react";

import theme from "../theme";
import { AppProps } from "next/app";

import Layout from "@/components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // TODO: add Head tag
    <ChakraProvider resetCSS theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
export default MyApp;
