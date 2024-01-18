import "@/styles/globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <GoogleTagManager gtmId="G-2RF08LDP99" />
      <Component {...pageProps} />
    </div>
  );
}
