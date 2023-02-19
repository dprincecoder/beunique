import { SessionProvider } from "next-auth/react";
import { AppProvider } from "../context/AppContext";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import "@/styles/globals.css";
import { Layout } from "../components";
import dynamic from "next/dynamic";


function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  useEffect(() => {
    const use = async () => {
      (await import("tw-elements")).default;
    };
    use();
  }, []);

  return (
    <AppProvider>
      <SessionProvider session={pageProps.session}>
        <Toaster />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </AppProvider>
  );
}

export default MyApp;
