import "@/styles/globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Component {...pageProps} />
      <GoogleAnalytics gaId="G-2RF08LDP99" />
    </div>
  );
}
