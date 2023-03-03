import React from "react";
import Image from "next/image";
import Logo from "@/public/logo.png";
import {
  I3Dcube,
  DocumentUpload,
  ShoppingCart,
  Setting2,
  LogoutCurve,
} from "iconsax-react";
import Link from "next/link";

const LeftBar = () => {
  return (
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
              class="px-6 py-2.5 bg-[#101828] text-[#fcfcfd] font-medium hover:font-semibold text-[14px] rounded-lg focus:outline-none focus:ring-0 transition duration-300 ease-in-out flex align-center w-[200px]"
            >
              <I3Dcube size={20} className="mr-3" />
              Overview
            </button>
          </Link>
          <Link href="admin/upload">
            <button
              type="button"
              class="px-6 py-2.5 text-[#101828] hover:bg-[#101828] hover:text-[#fcfcfd] font-medium hover:font-semibold text-[14px] rounded-lg focus:outline-none focus:ring-0 transition duration-300 ease-in-out flex align-center w-[200px]"
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
          onClick={() => {
            logoutHandler();
            router.reload(window.location.pathname);
          }}
        >
          <LogoutCurve size={20} className="mr-3" />
          Logout
        </button>
      </section>
    </section>
  );
};

export default LeftBar;
