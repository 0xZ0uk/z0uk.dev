import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { GridProvider } from "@faceless-ui/css-grid";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GridProvider
      breakpoints={{
        s: 768,
        m: 1279,
        l: 1679,
      }}
      rowGap={{
        s: "1rem",
        m: "1rem",
        l: "4rem",
        xl: "4rem",
      }}
      colGap={{
        s: "20px",
        m: "20px",
        l: "20px",
        xl: "20px",
      }}
      cols={{
        s: 4,
        m: 8,
        l: 12,
        xl: 12,
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GridProvider>
  );
}

export default MyApp;
