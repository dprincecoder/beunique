import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo_white.png";

import { BsTwitter, BsInstagram, BsLinkedin, BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-start sm:grid sm:place-items-center p-7 m-0 z-30 bg-black text-white dark:text-white">
      <section className="w-full flex flex-col items-start sm:items-center">
        <section className="w-fit mb-6">
          <Link href="/">
            <Image src={Logo} alt="BeUnique" width={176} height={29} />
          </Link>
        </section>
        <section className="w-full flex flex-row flex-wrap sm:space-x-8 pb-10 border-b-2 border-[#ACB2BE] items-center justify-center">
          <Link
            href="/"
            className="text-white hover:text-[#ACB2BE] cursor-pointer duration-300 w-[48%] sm:w-fit"
          >
            Home
          </Link>
          <Link
            href="/"
            className="text-white hover:text-[#ACB2BE] cursor-pointer duration-300 w-[48%] sm:w-fit"
          >
            Sales
          </Link>
          <Link
            href="/"
            className="text-white hover:text-[#ACB2BE] cursor-pointer duration-300 w-[48%] sm:w-fit"
          >
            New In
          </Link>
          <Link
            href="/"
            className="text-white hover:text-[#ACB2BE] cursor-pointer duration-300 w-[48%] sm:w-fit"
          >
            Track Order
          </Link>
          <Link
            href="/"
            className="text-white hover:text-[#ACB2BE] cursor-pointer duration-300 w-[48%] sm:w-fit"
          >
            Help
          </Link>
          <Link
            href="/"
            className="text-white hover:text-[#ACB2BE] cursor-pointer duration-300 w-[48%] sm:w-fit"
          >
            Profile
          </Link>
        </section>
      </section>

      <section className="w-full flex flex-col-reverse sm:flex sm:flex-row items-start sm:items-center sm:justify-between p-4">
        <section className="w-fit text-sm">
          &copy; 2023 Beunique. All rights reserved
        </section>
        <section className="w-fit flex flex-row items-center space-x-4 sm:space-x-6 mb-4 sm:mb-0">
          <Link href="https://twitter.com">
            <BsTwitter size={20} />
          </Link>
          <Link href="https://instagram.com">
            <BsInstagram size={20} />
          </Link>
          <Link href="https://linkedin.com">
            <BsLinkedin size={20} />
          </Link>
          <Link href="https://facebook.com">
            <BsFacebook size={20} />
          </Link>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
