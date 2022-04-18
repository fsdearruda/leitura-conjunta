import Document, { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "../utils/theme";
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" type="image/png" href={process.env.NODE_ENV === "production" ? "/static/28x28.png" : "/static/dev.png"} />
          <link rel="apple-touch-icon" sizes="128x128" href="/static/112x112.png" />
          <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Jost&display=swap" rel="stylesheet" />
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
