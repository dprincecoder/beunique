import React from "react";
import Image from "next/image";
import {
  I3Dcube,
  DocumentUpload,
  ShoppingCart,
  Setting2,
  LogoutCurve,
  Heart,
  Eye,
  Security,
  Book1,
  User,
} from "iconsax-react";
import Link from "next/link";
import Order from "../../public/svg/Order.svg";

const AccountLeftBar = () => {
  return (
    <section className="w-full min-h-full flex flex-col items-start justify-start pl-[25px]">
      <section className="w-full h-[500px] mt-10 flex flex-col items-start justify-between border-r-[1.5px] border-r-[#eaecf0]">
        <section className="w-full h-[300px] flex flex-col space-y-3 pr-[30px]">
          <Link href="/admin">
            <button
              type="button"
              class="px-6 py-2.5 bg-[#101828] text-[#fcfcfd] font-medium hover:font-semibold text-[14px] rounded-lg focus:outline-none focus:ring-0 transition duration-300 ease-in-out flex align-center w-[200px]"
            >
              <User size={20} className="mr-3" />
              My Account
            </button>
          </Link>
          <Link href="admin/upload">
            <button
              type="button"
              class="px-6 py-2.5 text-[#101828] hover:bg-[#101828] hover:text-[#fcfcfd] font-medium hover:font-semibold text-[14px] rounded-lg focus:outline-none focus:ring-0 transition duration-300 ease-in-out flex align-center w-[200px]"
            >
              <Image src={Order} alt="" className="mr-3" />
              Orders
            </button>
          </Link>
          <Link href="admin/orders">
            <button
              type="button"
              class="px-6 py-2.5 text-[#101828] hover:bg-[#101828] hover:text-[#fcfcfd] font-medium hover:font-semibold text-[14px] rounded-lg focus:outline-none focus:ring-0 transition duration-300 ease-in-out flex align-center w-[200px]"
            >
              <Heart size={20} className="mr-3" />
              Saved Items
            </button>
          </Link>
          <Link href="admin/settings">
            <button
              type="button"
              class="px-6 py-2.5 text-[#101828] hover:bg-[#101828] hover:text-[#fcfcfd] font-medium hover:font-semibold text-[14px] rounded-lg focus:outline-none focus:ring-0 transition duration-300 ease-in-out flex align-center w-[200px]"
            >
              <Eye size={20} className="mr-3" />
              View Items
            </button>
          </Link>
        </section>

        <section className="w-full h-[300px] flex flex-col mt-[30px] space-y-3 pr-[30px]">
          <Link href="admin/orders">
            <button
              type="button"
              class="px-6 py-2.5 text-[#101828] hover:bg-[#101828] hover:text-[#fcfcfd] font-medium hover:font-semibold text-[14px] rounded-lg focus:outline-none focus:ring-0 transition duration-300 ease-in-out flex align-center w-[200px]"
            >
              <Security size={20} className="mr-3" />
              Security
            </button>
          </Link>
          <Link href="admin/upload">
            <button
              type="button"
              class="px-6 py-2.5 text-[#101828] hover:bg-[#101828] hover:text-[#fcfcfd] font-medium hover:font-semibold text-[14px] rounded-lg focus:outline-none focus:ring-0 transition duration-300 ease-in-out flex align-center w-[200px]"
            >
              <Book1 size={20} className="mr-3" />
              Address Book
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

export default AccountLeftBar;
