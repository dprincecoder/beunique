import { setToken } from "@/redux/features/auth/authSlice";
import { dispatch } from "@/redux/store";
import React, { useState, useEffect } from "react";
import Header from "./Header";
import { useRouter } from "next/router";
import Head from "next/head";
import { Footer } from ".";

const Layout = ({ children }) => {
  const router = useRouter();
  const HeaderShow = !router.pathname.includes("/auth/");

  const useSessionStorage = (name) => {
    const [value, setValue] = useState("");

    useEffect(() => {
      setValue(sessionStorage.getItem(name));
    }, []);

    return value;
  };
  dispatch(setToken(useSessionStorage("token")));

  return (
    <>
      <Head>
        <title>BeUnique | Saved Items</title>
        <meta
          name="description"
          content="The most unique and affordable ecommerce store for females"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="bg-white dark:bg-white text-black dark:text-black w-[100%] min-w-[320px] overflow-hidden">
        {HeaderShow && <Header />}
        <main className="">{children}</main>
        {HeaderShow && <Footer />}
      </section>
    </>
  );
};

export default Layout;
