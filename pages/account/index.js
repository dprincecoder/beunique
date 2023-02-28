import { Footer, Header } from "@/components";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useAppContext } from "../../context/AppContext";

const Account = () => {
  const { userLoggedIn, isSidebarOpen, salesTimerOn } = useAppContext();

  const [loggedIn, setLoggedIn] = useState(true);

  useEffect(() => {
    if (typeof window !== null || typeof window !== "undefined") {
      if (window.localStorage.getItem("but")) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    }
  }, [loggedIn]);

  return (
    <>
      <Head>
        <title>BeUnique | Account</title>
        <meta
          name="description"
          content="The most unique and affordable ecommerce store for females"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <section className="grid place-items-center w-full p-16 text-center">
        {loggedIn ? (
          <h1 className="font-anybody font-bold text-3xl text-[#344054]">
            Account
          </h1>
        ) : (
          <>
            <h1 className="font-anybody font-bold text-3xl text-[#344054]">
              Please login to access your account!
            </h1>

            <Link href="/signin">
              <button
                type="button"
                className="px-2 py-2.5 mt-6 bg-[#101828] text-[#fcfcfd] font-medium hover:font-semibold text-[14px] rounded-lg focus:outline-none focus:ring-0 transition duration-300 ease-in-out flex items-center justify-center w-[150px] h-[42px]"
              >
                Login
              </button>
            </Link>
          </>
        )}
      </section>

      <Footer />
    </>
  );
};

export default Account;