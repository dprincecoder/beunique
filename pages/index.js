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

      <section className="w-full flex flex-col items-center justify-center p-0 m-0 z-30 font-inter scrollbar scrollbar-track-[#ACB2BE] scrollbar-thumb-black scrollbar-corner-red-500 scrollbar-w-4 scrollbar-track-rounded-md scrollbar-thumb-rounded-md scrollbar-corner-rounded-md">
        {salesTimerOn && <SalesCountdown />}

        <section className="w-full p-5 py-32 m-0 grid place-items-center bg-home_hero bg-no-repeat bg-cover bg-center text-white dark:text-white">
          <section className="mx-auto w-[95%] sm:w-[80%] sm3:w-[60%] md2:w-[40%] flex flex-col items-center md:grid md:place-items-center text-center">
            <h1 className="text-2xl sm3:text-4xl font-bold font-notoSans ">
              shop for unique and affordable outfits
            </h1>
            <p className="my-6">
              Buy quality and well fitted female outfits with a large variety of
              categories at affordable price
            </p>
            <Link
              href="/"
              className="bg-white hover:bg-black text-black hover:text-white px-4 py-2 border-0 outline-none focus:outline-none rounded-md cursor-pointer duration-300"
            >
              Start shopping
            </Link>
          </section>
        </section>

        <section className="w-full p-5 py-32 m-0 flex flex-col items-center bg-home_hero2 bg-no-repeat bg-cover bg-center text-white dark:text-white">
          <section className="w-[70%] sm2:w-[40%] flex flex-col items-end text-right sm2:mr-32">
            <h2 className="text-4xl font-bold font-notoSans ">
              New <br />
              Season <br />
              slaying
            </h2>
            <p className="my-6">Starting at ₦10, 000</p>
            <Link
              href="/"
              className="bg-white hover:bg-black text-black hover:text-white px-4 py-2 border-0 outline-none focus:outline-none rounded-md cursor-pointer duration-300 w-fit"
            >
              Shop Now
            </Link>
          </section>
        </section>

        <section className="w-full p-5 py-32 pr-16 m-0 flex flex-col items-end bg-home_hero3 bg-no-repeat bg-cover bg-center text-white dark:text-white">
          <section className="w-[70%] sm2:w-[40%] flex flex-col items-end text-right sm2:mr-36">
            <h2 className="text-4xl font-bold font-notoSans ">Short Dress</h2>
            <p className="my-6">Starting at ₦10, 000</p>
            <Link
              href="/"
              className="bg-white hover:bg-black text-black hover:text-white px-4 py-2 border-0 outline-none focus:outline-none rounded-md cursor-pointer duration-300"
            >
              Shop Now
            </Link>
          </section>
        </section>

        <section className="w-full p-0 m-0 flex flex-col sm2:flex-row items-center justify-center text-white dark:text-white sm2:h-[400px] flex-wrap">
          <section className="w-[100%] sm2:w-[50%] md:w-[60%] p-5 py-32 sm2:py-10 m-0 sm2:flex sm2:flex-col sm2:items-center sm2:justify-end bg-home_hero4a bg-no-repeat bg-cover bg-center text-white dark:text-white h-full text-center">
            <h2 className="text-4xl font-bold font-notoSans mb-6">
              Amazing Jumpsuits
            </h2>
            <Link
              href="/"
              className="bg-white hover:bg-black text-black hover:text-white px-4 py-2 border-0 outline-none focus:outline-none rounded-md cursor-pointer duration-300"
            >
              Shop Now
            </Link>
          </section>

          <section className="w-[100%] sm2:w-[50%] md:w-[40%] p-5 py-32 sm2:py-10 m-0 flex flex-col items-center justify-center sm2:justify-end bg-home_hero4b bg-no-repeat bg-cover bg-center text-white dark:text-white h-full bg-red-500">
            <h2 className="text-4xl font-bold font-notoSans mb-6 text-center">
              Shop for exquisite long gowns
            </h2>
            <Link
              href="/"
              className="bg-white hover:bg-black text-black hover:text-white px-4 py-2 border-0 outline-none focus:outline-none rounded-md cursor-pointer duration-300"
            >
              Shop Now
            </Link>
          </section>
        </section>

        <section className="w-full p-0 m-0 flex flex-row flex-wrap items-center justify-between text-white dark:text-white space-y-2 sm3:space-y-0">
          <section className="w-[48%] sm3:w-[24%]  grid place-items-center text-center">
            <Image src={main_hero5a} alt="Beunique Product" />
            <Link
              href="/"
              className="bg-black text-white hover:text-[#ACB2BE] px-4 py-1 border-0 outline-none focus:outline-none cursor-pointer duration-300 w-full"
            >
              Shop Short Gowns
            </Link>
          </section>
          <section className="w-[48%] sm3:w-[24%]  grid place-items-center text-center">
            <Image src={main_hero5b} alt="Beunique Product" />
            <Link
              href="/"
              className="bg-black text-white hover:text-[#ACB2BE] px-4 py-1 border-0 outline-none focus:outline-none cursor-pointer duration-300 w-full"
            >
              Shop Two Piece
            </Link>
          </section>
          <section className="w-[48%] sm3:w-[24%]  grid place-items-center text-center">
            <Image src={main_hero5c} alt="Beunique Product" />
            <Link
              href="/"
              className="bg-black text-white hover:text-[#ACB2BE] px-4 py-1 border-0 outline-none focus:outline-none cursor-pointer duration-300 w-full"
            >
              Shop Jumpsuit
            </Link>
          </section>
          <section className="w-[48%] sm3:w-[24%]  grid place-items-center text-center">
            <Image src={main_hero5d} alt="Beunique Product" />
            <Link
              href="/"
              className="bg-black text-white hover:text-[#ACB2BE] px-4 py-1 border-0 outline-none focus:outline-none cursor-pointer duration-300 w-full"
            >
              Shop Long Gown
            </Link>
          </section>
        </section>

        <section className="w-[95%] p-5 m-0 my-6 flex flex-col items-start">
          <h2 className="text-2xl font-semibold font-notoSans text-left mb-8">
            New Stock
          </h2>
          <p className="font-semibold w-full text-center text-red-600">
            Slider is under construction...
          </p>
        </section>

        <section className="w-[100%] bg-[#f2f4f7] overflow-hidden flex flex-col space-y-4 py-8 items-center justify-center sm2:flex-row sm2:flex-wrap sm2:justify-between sm2:px-6">
          <section className="w-[90%] sm2:w-[48%]">
            <h3 className="font-semibold text-xl mb-3">
              Scared of missing out?
            </h3>
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
