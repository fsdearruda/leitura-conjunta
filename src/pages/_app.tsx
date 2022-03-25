import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { UserContext } from "../contexts/UserContext";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>LC</title>
      </Head>

      <ChakraProvider>
        <UserContext.Provider value={{ name: "rapoxo" }}>
          <Component {...pageProps} />
        </UserContext.Provider>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
