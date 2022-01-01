import type { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";
import { NotificationProvider } from "../store/notification-context";
import "../styles/global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NotificationProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NotificationProvider>
  );
}

export default MyApp;
