import React from "react";
import Link from "next/link";
import { Countdown } from ".";

const SalesCountdown = () => {
  const DAYS_IN_MS = 14 * 24 * 60 * 60 * 1000;
  const HOURS_IN_MS = 7.5 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();
  const salesDateTime = NOW_IN_MS + HOURS_IN_MS;

  return (
    <section className="font-inter bg-black text-white w-[100%] overflow-hidden flex flex-col items-center justify-center px-4 py-3 text-[12px] md:text-[14px] lg2:text-[16px] space-y-2 sm3:space-y-0 sm:flex-row">
      <section className="w-fit sm:w-[25%] text-center font-normal font-inter text-[14px]">
        New year offer for new customers
      </section>

      <section className="w-fit sm:w-[45%] sm2:w-[40%] md:w-fit border-y-[1px] border-x-0 sm:border-y-0 sm:border-x-[1px] mx-3 px-2 py-0 border-[#707070]">
        <Countdown targetDate={salesDateTime} />
      </section>

      <section className="w-fit text-center text-[16px] font-bold font-inter">
        <Link
          href={"/shop_now"}
          className="underline underline-offset-4 cursor-pointer duration-300 hover:text-[#ACB2BE]"
        >
          Shop now
        </Link>
      </section>
    </section>
  );
};

export default SalesCountdown;
