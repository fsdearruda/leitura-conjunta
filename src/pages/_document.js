import Document, { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "../utils/theme";
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" type="image/png" href={process.env.NODE_ENV === "production" ? "/static/icon.png" : "/static/dev-icon.png"} />
          <link rel="apple-touch-icon" sizes="128x128" href={process.env.NODE_ENV === "production" ? "/static/home-icon.png" : "/static/dev-home-icon.png"} />
          <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Jost&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"></link>
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
