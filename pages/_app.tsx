import "../styles/globals.css";
import type { AppProps /*, AppContext */ } from "next/app";
import { ThemeProvider } from "styled-components";
import Head from "next/head";
import GlobalStyles from "@/components/GlobalStyles";
import { useEffect } from "react";
import Layout from "@/components/layout";

const theme = {
  colors: {
    primary: "#fafafa",
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
        navigator.serviceWorker.register("/sw.js").then(
          function (registration) {
            console.log(
              "Service Worker registration successful with scope: ",
              registration.scope
            );
          },
          function (err) {
            console.log("Service Worker registration failed: ", err);
          }
        );
      });
    }
  }, []);
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta
          name="description"
          content="Desarrollador web fullstack Nicaraguense radicado en Los Angeles"
        />
        <meta
          name="keywords"
          content="javascript, php, ruby, postgresql, wordpress, sql, desarrollador, web"
        />
        <title>Kervin Tech</title>

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/icons/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/icons/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#000" />
      </Head>
      <GlobalStyles />
      <ThemeProvider theme={theme}></ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
