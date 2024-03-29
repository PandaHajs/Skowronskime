import Head from "next/head";
import React from "react";
import "../styles/global.scss";
import { Analytics } from "@vercel/analytics/react";
import "../styles/variables.scss";
import { ThemeProvider } from "next-themes";
import PageWithLayout from "../lib/page-with-layout";

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
