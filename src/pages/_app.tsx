import { ChakraProvider } from "@chakra-ui/react";
import "focus-visible/dist/focus-visible";

import theme from "../theme";
import Fonts from "@/components/Fonts";
import { AppProps } from "next/app";

import MainLayout from "@/components/Layouts/MainLayout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // TODO: add Head tag
    <ChakraProvider resetCSS theme={theme}>
      <Fonts />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ChakraProvider>
  );
}
export default MyApp;
