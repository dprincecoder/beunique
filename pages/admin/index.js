import React from "react";
import Image from "next/image";
import Logo from "@/public/logo.png";
import {
  I3Dcube,
  DocumentUpload,
  ShoppingCart,
  Setting2,
  LogoutCurve,
  ClipboardExport,
  Filter,
} from "iconsax-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import AuthError from "@/components/AuthError";
import LeftBar from "@/components/LeftBar";

const AdminOverview = () => {
  const router = useRouter();
  const { token } = useSelector((state) => state.auth);

  return (
    <>
      <section className="min-w-[1200px] w-full h-full mx-auto block p-[16px] md:px-[40px] md:py-[20px] relative font-inter overflow-x-hidden overflow-y-scroll scrollbar-thin scrollbar-track-[#ACB2BE] scrollbar-thumb-black scrollbar-track-rounded-md scrollbar-thumb-rounded-md">
        {token ? (
          <>
            <LeftBar />

            <section className="fixed top-0 right-0 w-[78%] h-full pt-[30px] pr-[30px] pb-[30px] overflow-x-hidden overflow-y-scroll scrollbar-thin scrollbar-track-[#ACB2BE] scrollbar-thumb-black scrollbar-track-rounded-md scrollbar-thumb-rounded-md">
              <section className="w-full h-full">
                <section className="w-full grid place-items-center grid-cols-4 divide-x mt-12">
                  <section className="grid place-items-center w-full">
                    <h4 className="font-inter font-semibold text-[16px] text-[1d2939]">
                      Total Sales
                    </h4>
                    <h2 className="font-anybody font-medium text-[24px] text-[1d2939] mt-2">
                      ₦234199
                    </h2>
                  </section>
                  <section className="grid place-items-center w-full">
                    <h4 className="font-inter font-semibold text-[16px] text-[1d2939]">
                      Total units sold
                    </h4>
                    <h2 className="font-anybody font-medium text-[24px] text-[1d2939] mt-2">
                      134
                    </h2>
                  </section>
                  <section className="grid place-items-center w-full">
                    <h4 className="font-inter font-semibold text-[16px] text-[1d2939]">
                      Total Orders
                    </h4>
                    <h2 className="font-anybody font-medium text-[24px] text-[1d2939] mt-2">
                      122
                    </h2>
                  </section>
                  <section className="grid place-items-center w-full">
                    <h4 className="font-inter font-semibold text-[16px] text-[1d2939]">
                      Total category
                    </h4>
                    <h2 className="font-anybody font-medium text-[24px] text-[1d2939] mt-2">
                      6
                    </h2>
                  </section>
                </section>

                <section className="w-full mt-8 flex flex-col items-center space-y-4">
                  <section className="w-full flex items-start justify-between">
                    <h4 className="font-inter font-bold text-[20px] text-black">
                      Stock
                    </h4>
                    <section className="flex items-center">
                      <button
                        type="button"
                        class="px-6 py-2.5 text-[#101828] hover:bg-[#101828] hover:text-[#fcfcfd] font-medium hover:font-semibold text-[14px] rounded-lg focus:outline-none focus:ring-0 transition duration-300 ease-in-out flex align-center border-[1px] border-[#eaecf0] mr-4"
                        onClick={() => alert("Exporting list...")}
                      >
                        <ClipboardExport size={20} className="mr-3" />
                        Export list
                      </button>
                      <button
                        type="button"
                        class="px-6 py-2.5 bg-[#101828] text-[#fcfcfd] font-medium hover:font-semibold text-[14px] rounded-lg focus:outline-none focus:ring-0 transition duration-300 ease-in-out flex align-center"
                        onClick={() => alert("Filtering stock...")}
                      >
                        <Filter size={20} className="mr-3" />
                        Filter
                      </button>
                    </section>
                  </section>

                  <section className="bg-red-200 w-full grid place-items-center py-16">
                    Table of Stocks
                  </section>
                  <section className=""></section>
                </section>
              </section>
            </section>
          </>
        ) : (
          <AuthError />
        )}
      </section>
    </>
  );
};

export default AdminOverview;
