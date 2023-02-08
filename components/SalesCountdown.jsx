import React from "react";
import Link from "next/link";
import { Countdown } from ".";

const SalesCountdown = () => {
  const DAYS_IN_MS = 14 * 24 * 60 * 60 * 1000;
  const HOURS_IN_MS = 7.5 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();
  const salesDateTime = NOW_IN_MS + HOURS_IN_MS;
  
  return (
    <section className="font-inter bg-black text-white w-[100%] overflow-hidden flex flex-col items-center justify-center px-4 py-8  text-[12px] md:text-[14px] lg2:text-[16px] space-y-4 sm3:space-y-0 sm3:flex-row">
      
      <section className="w-fit text-center sm3:w-fit ">
        New year offer for new customers
      </section>

      <section className="w-fit text-center sm3:w-fit  mx-6 border-y-2 border-x-0 sm3:border-y-0 sm3:border-x-2 px-6 py-2 border-[#707070]">
        <Countdown targetDate={salesDateTime} />
      </section>

      <section className="w-fit text-center sm3:w-fit ">
        <Link
          href={"/shop_now"}
          className="underline underline-offset-4 font-medium cursor-pointer duration-300 hover:text-[#ACB2BE]"
        >
          Shop now
        </Link>
      </section>
    </section>
  );
};

export default SalesCountdown;
