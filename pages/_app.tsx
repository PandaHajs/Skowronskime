import Head from "next/head";
import React from "react";
import "../styles/global.css";
import { Analytics } from "@vercel/analytics/react";
import "../styles/variables.css";
import PageWithLayout from "../lib/PageWithLayout";
import { ThemeProvider } from "next-themes";

type AppLayoutProps = {
  Component: PageWithLayout;
  pageProps: any;
};

function MyApp({ Component, pageProps }: AppLayoutProps) {
  const Layout = Component.layout || ((children) => <>{children}</>);
  return (
    <React.Fragment>
      <Head>
        <meta name="theme-color" content="#3c1742" />
      </Head>
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <Analytics />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default MyApp;
