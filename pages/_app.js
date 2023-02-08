import { SessionProvider } from "next-auth/react";
import { AppProvider } from "@/context/AppContext";
import { Toaster } from "react-hot-toast";
// import { useEffect } from "react";
import "@/styles/globals.css";
import { Layout } from "@/components";
import localFont from "@next/font/local";

const varInter = localFont({ src: "../public/fonts/Inter-Variable.ttf" });
const varAnybody = localFont({
  src: "../public/fonts/Anybody-Variable.ttf",
});

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  // NOTE: This is for using a plugins

  // useEffect(() => {
  //   const use = async () => {
  //     (await import("tw-elements")).default;
  //   };
  //   use();
  // }, []);

  return (
    <AppProvider>
      <SessionProvider session={pageProps.session}>
        <Toaster />
        <Layout>
          <style jsx global>
            {`
              :root {
                --inter-font: ${varInter.style.fontFamily};
                --anybody-font: ${varAnybody.style.fontFamily};
              }
            `}
          </style>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </AppProvider>
  );
}

export default MyApp;