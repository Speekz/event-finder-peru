import { GoogleTagManager } from "@next/third-parties/google";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <GoogleTagManager gtmId="G-2RF08LDP99" />
        <title>Eventos Peru</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
