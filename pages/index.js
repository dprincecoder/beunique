import Head from "next/head";
import Image from "next/image";
import { useForm } from "react-hook-form";
import Link from "next/link";
import main_hero5a from "../public/page_imgs/main_hero5a.jpg";
import main_hero5b from "../public/page_imgs/main_hero5b.jpg";
import main_hero5c from "../public/page_imgs/main_hero5c.jpg";
import main_hero5d from "../public/page_imgs/main_hero5d.jpg";

import { useAppContext } from "@/context/AppContext";
import { SalesCountdown } from "@/components";

export default function Home() {
  const { isSidebarOpen, salesTimerOn } = useAppContext();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <Head>
        <title>BeUnique | Unique & Affordable</title>
        <meta
          name="description"
          content="The most unique and affordable ecommerce store for females"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="w-full flex flex-col items-center justify-center p-0 m-0 z-30 font-inter">
        {salesTimerOn && <SalesCountdown />}

        <section className="w-[100%] bg-[#f2f4f7] overflow-hidden flex flex-col space-y-4 py-8 items-center justify-center sm2:flex-row sm2:flex-wrap sm2:justify-between sm2:px-6">
          <section className="w-[90%] sm2:w-[48%]">
            <h3 className="font-medium text-xl mb-3">Scared of missing out?</h3>
            <p className="text-[14px]">
              We&apos;ll send you a mail whenever any offer or new stock is
              available
            </p>
          </section>

          <section className="w-[90%] sm2:w-[48%] flex justify-end">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-[100%] sm3:w-[90%] md3:w-[60%] flex flex-col items-center justify-center md:flex-row md:justify-between"
            >
              <input
                name="email_sub"
                type="email_sub"
                placeholder="Enter your email"
                // value={searchInput}
                // onChange={(e) => setSearchInput(e.target.value)}
                {...register("search", { required: true })}
                className="w-[100%] placeholder-[#ACB2BE] outline-none hover:outline-none focus:outline-none text-black border-[1px] border-[#ACB2BE] bg-white rounded-md px-4 py-2"
              />
              <button className="bg-black hover:bg-white text-white hover:text-black px-4 py-2 border-0 outline-none focus:outline-none hover:border-[1px] hover:border-[#ACB2BE] rounded-md cursor-pointer duration-300 md:ml-6 w-full md:w-fit mt-2 md:mt-0">
                Subscribe
              </button>
            </form>
          </section>
        </section>
      </section>
    </>
  );
}
