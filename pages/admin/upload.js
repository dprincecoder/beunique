import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";

import { useAppContext } from "@/context/AppContext";
import Logo from "@/public/logo.png";
import {
  I3Dcube,
  DocumentUpload,
  ShoppingCart,
  Setting2,
  LogoutCurve,
  ArrowLeft,
  ArrowRight,
  ClipboardExport,
  Filter,
} from "iconsax-react";
import Link from "next/link";
import UploadImages from "@/components/UploadImages";

const AdminUpload = () => {
  const { userLoggedIn, priceFormatter } = useAppContext();

  return (
    <>
      <Head>
        <title>BeUnique | Upload Product</title>
        <meta
          name="description"
          content="The most unique and affordable ecommerce store for females"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="min-w-[1200px] w-full h-full mx-auto block p-[16px] md:px-[40px] md:py-[20px] relative font-inter overflow-x-hidden overflow-y-scroll scrollbar-thin scrollbar-track-[#ACB2BE] scrollbar-thumb-black scrollbar-track-rounded-md scrollbar-thumb-rounded-md">
        <section className="w-[20%] min-h-full fixed top-0 left-0 flex flex-col items-start justify-start pl-[30px] pt-[30px] pb-[30px]">
          <section className="w-fit flex items-end">
            <Link href="/">
              <Image
                src={Logo}
                alt="BeUnique"
                width={164}
                height={32}
                className="w-[164px] h-[32px]"
              />
            </Link>
            <span className="text-[12px] text-[#101828] ml-2">Admin</span>
          </section>

          <section className="w-full h-[500px] mt-10 flex flex-col items-start justify-between border-r-[1.5px] border-r-[#eaecf0]">
            <section className="w-full h-[300px] flex flex-col space-y-3 pr-[30px]">
              <Link href="/admin">
                <button
                  type="button"
                  class="px-6 py-2.5 text-[#101828] hover:bg-[#101828] hover:text-[#fcfcfd] font-medium hover:font-semibold text-[14px] rounded-lg focus:outline-none focus:ring-0 transition duration-300 ease-in-out flex align-center w-[200px]"
                >
                  <I3Dcube size={20} className="mr-3" />
                  Overview
                </button>
              </Link>
              <Link href="admin/upload">
                <button
                  type="button"
                  class=" px-6 py-2.5 bg-[#101828] text-[#fcfcfd] font-medium hover:font-semibold text-[14px] rounded-lg focus:outline-none focus:ring-0 transition duration-300 ease-in-out flex align-center w-[200px]"
                >
                  <DocumentUpload size={20} className="mr-3" />
                  Upload
                </button>
              </Link>
              <Link href="admin/orders">
                <button
                  type="button"
                  class="px-6 py-2.5 text-[#101828] hover:bg-[#101828] hover:text-[#fcfcfd] font-medium hover:font-semibold text-[14px] rounded-lg focus:outline-none focus:ring-0 transition duration-300 ease-in-out flex align-center w-[200px]"
                >
                  <ShoppingCart size={20} className="mr-3" />
                  Orders
                </button>
              </Link>
              <Link href="admin/settings">
                <button
                  type="button"
                  class="px-6 py-2.5 text-[#101828] hover:bg-[#101828] hover:text-[#fcfcfd] font-medium hover:font-semibold text-[14px] rounded-lg focus:outline-none focus:ring-0 transition duration-300 ease-in-out flex align-center w-[200px]"
                >
                  <Setting2 size={20} className="mr-3" />
                  Settings
                </button>
              </Link>
            </section>

            <button
              type="button"
              class="px-6 py-2.5 bg-[#fbe7e7] text-[#d2120f] font-medium hover:font-semibold text-[14px] rounded-lg focus:outline-none focus:ring-0 transition duration-300 ease-in-out flex align-center w-[200px]"
              onClick={() => alert("Logging out...")}
            >
              <LogoutCurve size={20} className="mr-3" />
              Logout
            </button>
          </section>
        </section>

        <section className="fixed top-0 right-0 w-[78%] h-full pt-[30px] pr-[30px] pb-[30px] overflow-x-hidden overflow-y-scroll scrollbar-thin scrollbar-track-[#ACB2BE] scrollbar-thumb-black scrollbar-track-rounded-md scrollbar-thumb-rounded-md ">
          <section className="w-full h-full flex items-start justify-between">
            <section className="w-[35%] bg-red-100 flex flex-col">
              <section className="w-full">
                <h2 className="font-anybody font-bold text-[24px] text-[#101828]">
                  Add new product
                </h2>
                <p className="font-inter text-[14px] text-[#344054] mt-2">All fields are to be filled for optimized experience</p>
                
                <UploadImages />
                
                <p className="font-inter text-[14px] text-[#667085] mt-2">Do you know? Buyers like to browse images that are clear and tells easily what your product is? <br />Make your product images count!</p>
              </section>
            </section>

            <section className="w-[60%] bg-red-300">
              B<section className=""></section>
            </section>
          </section>
        </section>
      </section>
    </>
  );
};

export default AdminUpload;
