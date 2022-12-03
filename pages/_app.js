import Head from "next/head";
import React from "react";
import "../styles/global.css";
import { Analytics } from "@vercel/analytics/react";
import "../styles/variables.css";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <meta name="theme-color" content="#3c1742" />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </React.Fragment>
  );
}

export default MyApp;
