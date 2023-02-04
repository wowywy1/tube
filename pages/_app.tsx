import React, { useEffect } from "react";
import Head from "next/head";
import CssBaseline from "@mui/material/CssBaseline";
import "nprogress/nprogress.css";
import "@/styles/global.css";
import "@/styles/customs.css";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import BRAND_DATA from "@/src/constants/brand";
import { theme } from "@/src/utils/theme";
import { AppProps } from "next/app";
import Script from "next/script";
import MainLayout from "@/src/layouts/MainLayout";
import { useRouter } from "next/router";
import { pageview } from "@/src/lib/ga";
import nProgress from "nprogress";

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteStart = (url: string) => {
      pageview(url);
      nProgress.start();
    };
    const handleRouteDone = () => nProgress.done();

    nProgress.configure({ showSpinner: false });
    router.events.on("routeChangeStart", handleRouteStart);
    router.events.on("routeChangeComplete", handleRouteDone);
    router.events.on("routeChangeError", handleRouteDone);
    return () => {
      router.events.off("routeChangeStart", handleRouteStart);
      router.events.off("routeChangeComplete", handleRouteDone);
      router.events.off("routeChangeError", handleRouteDone);
    };
  }, [router.events]);

  return (
    <React.Fragment>
      <Head>
        <title>{BRAND_DATA.NAME}</title>
      </Head>

      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </ThemeProvider>
      </StyledEngineProvider>

      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-29J3M10LK9"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-29J3M10LK9'); `}
      </Script>
      <Script
        async
        type="text/javascript"
        src="//pl18398861.highcpmrevenuenetwork.com/fa/cc/3d/facc3d7bdb9973d0593846fd1180aee3.js"
      ></Script>
    </React.Fragment>
  );
}
