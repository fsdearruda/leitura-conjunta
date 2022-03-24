import "../styles/globals.css";
import type { AppProps } from "next/app";
import { UserContext } from "../contexts/UserContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserContext.Provider value={{ name: "rapoxo" }}>
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}

export default MyApp;
