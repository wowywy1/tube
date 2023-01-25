import React from "react";
import Head from "next/head";
import CssBaseline from "@mui/material/CssBaseline";
import "@/styles/global.css";

// Polyfills
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import BRAND_DATA from "@/src/constants/brand";
import { theme } from "@/src/utils/theme";
import { AppProps } from "next/app";
import Script from "next/script";
import MainLayout from "@/src/commons/layouts/MainLayout";

export default function MyApp({ Component, pageProps }: AppProps) {
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
    </React.Fragment>
  );
}
