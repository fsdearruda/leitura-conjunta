import "../styles/globals.css";
import type { AppProps } from "next/app";
import { UserContext } from "../contexts/UserContext";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>LC</title>
      </Head>
      <UserContext.Provider value={{ name: "rapoxo" }}>
        <Component {...pageProps} />
      </UserContext.Provider>
    </>
  );
}

export default MyApp;
