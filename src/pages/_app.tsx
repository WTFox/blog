import { ChakraProvider } from "@chakra-ui/react";

import theme from "../theme";
import Fonts from "@/components/Fonts";
import { AppProps } from "next/app";

import Layout from "@/components/Layout";
import Particles from "react-tsparticles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // TODO: add Head tag
    <ChakraProvider resetCSS theme={theme}>
      <Fonts />
      <Layout>
        <Particles
          options={{
            fpsLimit: 30,
            particles: {
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: "right",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 2,
                straight: false,
              },
              number: {
                value: 50,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                random: true,
                value: 5,
              },
            },
            detectRetina: true,
          }}
        />
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
export default MyApp;
