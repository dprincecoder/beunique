import { Footer, Header } from "@/components";
import Head from "next/head";
import React from "react";

const Account = () => {
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

      <section className="grid place-items-center w-full p-16">
        <h1 className="font-anybody font-bold text-3xl text-[#344054]">
          Account
        </h1>
      </section>

      <Footer />
    </>
  );
};

export default Account;
