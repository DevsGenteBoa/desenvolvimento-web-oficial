import "../assets/styles/globals.css";
import type { AppProps } from "next/app";
import Menu from "src/components/Menu";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Desenvolvimento Web</title>
      </Head>
      <Menu />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
