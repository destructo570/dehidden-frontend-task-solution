import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../components/Layout/Layout";
import { NotificationProvider } from "../store/notification-context";
import "../styles/global.css";
import favicon from "../assets/icons/favicon.png";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NotificationProvider>
      <Head>
        <title>Dehidden</title>
        <link rel="icon" href={favicon.src} />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
        ></meta>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NotificationProvider>
  );
}

export default MyApp;
