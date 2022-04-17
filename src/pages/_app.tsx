import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import BackToTop from "../components/BackToTop";
import Head from "next/head";
import "./styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>LC</title>
      </Head>
      <ChakraProvider>
        <Component {...pageProps} />
        <BackToTop />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
