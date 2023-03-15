import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

import { useState } from "react";
import { NewStockSlider } from "../../components";

export default function Home() {
  const [salesTimerOn, setSalesTimerOn] = useState(true);

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      const options = {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data),
      };

      await fetch(
        "https://beunique.live/users/newsletter-subscription",
        options
      )
        .then((res) => res.json())
        .then((resData) => {
          const res = resData.detail;

          if (res.includes("Email was successfully added to our Newsletter")) {
            toast.success(res);
            reset();
          } else {
            toast.error(res);
          }
        });
    } catch (err) {
      console.log(err);
      // toast.error(err);
    }
  };

  return (
    <>
      <section className="w-full flex flex-col items-center justify-center p-0 m-0 z-30 font-inter scrollbar-thin scrollbar-track-[#ACB2BE] scrollbar-thumb-black scrollbar-track-rounded-md scrollbar-thumb-rounded-md space-y-[4px]">
        {/* {salesTimerOn && <SalesCountdown />} */}

        {/* bg-home_hero bg-no-repeat bg-cover bg-center */}
        <section className="w-full p-5 py-12 sm2:py-24 md:py-32 m-0 grid place-items-center bg-[#344054] text-white dark:text-white relative h-[404px] sm:h-[440px] sm2:h-[568px] md:h-[645px]">
          <img
            src="/new-assets/Main_header.webp"
            alt="Beunique Product"
            width={0}
            height={645}
            layout="fill"
            quality={80}
            loading="lazy"
            className="absolute top-0 left-0 w-full h-[645px] z-10 hidden md:block"
          />
          <img
            src="/new-assets/Main_header.webp"
            alt="Beunique Product"
            width={0}
            height={404}
            layout="fill"
            quality={80}
            loading="lazy"
            className="absolute top-0 left-0 w-full h-[404px] sm:h-[440px] sm2:h-[568px] z-10 md:hidden"
          />

          <section className="mx-auto w-[95%] sm2:w-[70%] lg:w-[60%] flex flex-col items-center md:grid md:place-items-center text-center z-30 absolute bottom-[60px] sm2:bottom-[85px] left-[50%] -translate-x-[50%]">
            <h1 className="font-bold text-[24px] md:text-[48px] md2:text-[60px] font-anybody">
              shop for unique and affordable outfits
            </h1>
            <p className="mt-[8px] mb-[25px] sm2:mt-[12px] sm2:mb-[35px] text-[16px] md:text-[24px] font-inter">
              Buy quality and well fitted female outfits with a large variety of
              categories at affordable price
            </p>
            <Link
              to="/products?type=new-in"
              className="bg-white hover:bg-black text-black hover:text-white px-12 py-1 sm2:px-18 sm2:py-3 border-0 outline-none focus:outline-none rounded-md cursor-pointer duration-300 text-[16px] md:text-[20px] font-semibold font-inter"
            >
              Start shopping
            </Link>
          </section>
        </section>

        <section className="w-full p-5 py-6 sm2:py-12 md:py-16 m-0 flex flex-col items-center bg-[#344054] text-white dark:text-white relative h-[239px] sm2:h-[336px] md:h-[485px]">
          <img
            src="/new-assets/body_1.webp"
            alt="Beunique Product"
            width={0}
            height={485}
            layout="fill"
            quality={80}
            loading="lazy"
            className="absolute top-0 left-0 w-full h-[485px] z-10 hidden md:block"
          />
          <img
            src="/new-assets/body_1.webp"
            alt="Beunique Product"
            width={0}
            height={239}
            layout="fill"
            quality={80}
            loading="lazy"
            className="absolute top-0 left-0 w-full h-[239px] sm2:h-[336px] z-10 md:hidden"
          />

          <section className="w-[70%] sm2:w-[40%] flex flex-col items-end text-right mr-12 sm2:mt-4 md:mr-10 z-30">
            <h2 className="font-bold text-[24px] md:text-[48px] font-anybody">
              New <br />
              Season <br />
              slaying
            </h2>
            <p className="mt-[8px] mb-[15px] sm2:mt-[12px] sm2:mb-[35px] font-inter text-[16px]">
              Starting at{" "}
              <span className="md:text-[18px] font-semibold">₦10, 000</span>
            </p>
            <Link
              to="/"
              className="bg-white hover:bg-black text-black hover:text-white px-12 py-1 sm:py-2 border-0 outline-none focus:outline-none rounded-md cursor-pointer duration-300 w-fit text-[16px] md:text-[20px] font-semibold font-inter"
            >
              Shop Now
            </Link>
          </section>
        </section>

        <section className="w-full p-5 py-16 pr-16 m-0 flex flex-col items-end text-white dark:text-white bg-[#344054] relative h-[242px] sm2:h-[336px] md:h-[500px]">
          <img
            src="/new-assets/body_2.webp"
            alt="Beunique Product"
            width={0}
            height={500}
            layout="fill"
            quality={80}
            loading="lazy"
            className="absolute top-0 left-0 w-full h-[500px] z-10 hidden md:block"
          />
          <img
            src="/new-assets/body_2.webp"
            alt="Beunique Product"
            width={0}
            height={242}
            layout="fill"
            quality={80}
            loading="lazy"
            className="absolute top-0 left-0 w-full h-[242px] sm2:h-[336px] z-10 md:hidden"
          />

          <section className="w-[70%] sm2:w-[40%] flex flex-col items-end text-right mr-0 sm2:mt-10 md:mr-10 z-30">
            <h2 className="font-bold text-[24px] md:text-[48px] font-anybody">
              Short Dress
            </h2>
            <p className="mt-[8px] mb-[15px] sm2:mt-[12px] sm2:mb-[35px] text-[16px] font-inter">
              Starting at{" "}
              <span className="text-[18px] font-semibold">₦10, 000</span>
            </p>
            <Link
              to="/products?type=short-dress"
              className="bg-white hover:bg-black text-black hover:text-white px-8 sm:px-12 py-1 sm3:py-2 border-0 outline-none focus:outline-none rounded-md cursor-pointer duration-300 w-fit text-[16px] md:text-[20px] font-semibold font-inter"
            >
              Shop Now
            </Link>
          </section>
        </section>

        <section className="w-full p-0 m-0 flex flex-row items-start justify-center text-white dark:text-white flex-wrap bg-[#344054] relative h-[240px] sm2:h-[336px] md:h-[500px] z-10">
          <section className="w-[50%] p-0 m-0 text-white dark:text-white h-full text-center relative z-10 flex flex-col items-center justify-end">
            <img
              src="/new-assets/body_3A.webp"
              alt="Beunique Product"
              width={0}
              height={500}
              layout="fill"
              quality={80}
              loading="lazy"
              className="absolute top-0 left-0 w-full h-[500px] z-10 hidden md:block"
            />
            <img
              src="/new-assets/body_3A.webp"
              alt="Beunique Product"
              width={0}
              height={240}
              layout="fill"
              quality={80}
              loading="lazy"
              className="absolute top-0 left-0 w-full h-[240px] sm2:h-[336px] z-10 md:hidden"
            />

            <section className="w-[90%] z-50 mb-[30px] md:mb-[60px]">
              <h2 className="text-[16px] md:text-[36px] font-bold font-anybody mb-3">
                Amazing Jumpsuits
              </h2>
              <Link
                to="/products?type=jumpsuit"
                className="bg-white hover:bg-black text-black hover:text-white px-8 sm:px-12 py-1 sm3:py-2 border-0 outline-none focus:outline-none rounded-md cursor-pointer duration-300 w-fit text-[16px] md:text-[20px] font-semibold font-inter"
              >
                Shop Now
              </Link>
            </section>
          </section>

          <section className="w-[50%] p-0 m-0 text-white dark:text-white h-full text-center relative flex flex-col items-center justify-end">
            <img
              src="/new-assets/body_3B.webp"
              alt="Beunique Product"
              width={0}
              height={500}
              layout="fill"
              quality={80}
              loading="lazy"
              className="absolute top-0 left-0 w-full h-[500px] z-10 hidden md:block"
            />
            <img
              src="/new-assets/IMG_9805.webp"
              alt="Beunique Product"
              width={0}
              height={240}
              layout="fill"
              quality={80}
              loading="lazy"
              className="absolute top-0 left-0 w-full h-[240px] sm2:h-[336px] z-10 md:hidden"
            />

            <section className="w-[90%] sm2:w-[80%] z-50 mb-[30px] md:mb-[60px]">
              <h2 className="text-[16px] md:text-[36px] font-bold font-anybody mb-3">
                Shop for exquisite long gowns
              </h2>
              <Link
                to="/products?type=long-dress"
                className="bg-white hover:bg-black text-black hover:text-white px-8 sm:px-12 py-1 sm3:py-2 border-0 outline-none focus:outline-none rounded-md cursor-pointer duration-300 w-fit text-[16px] md:text-[20px] font-semibold font-inter"
              >
                Shop Now
              </Link>
            </section>
          </section>
        </section>

        <section className="w-full p-0 m-0 flex flex-row items-start justify-start md:justify-around gap-[10px] sm3:gap-[5px] text-white dark:text-white bg-white relative z-10 flex-wrap mb-8">
          <section className="w-[48%] sm3:w-[24%] grid place-items-center text-center relative">
            <Link to="/products?type=short-dress" className="">
              <img
                src="/new-assets/IMG_9728.webp"
                alt="Beunique Product"
                width={0}
                height={0}
                layout="fill"
                quality={80}
                loading="lazy"
                className="w-full z-10"
              />
              <button className="bg-black text-white hover:text-[#ACB2BE] grid place-items-center border-0 outline-none focus:outline-none cursor-pointer duration-300 w-full h-[40px] z-30">
                Shop Short Gowns
              </button>
            </Link>
          </section>

          <section className="w-[48%] sm3:w-[24%] grid place-items-center text-center relative">
            <Link to="/products?type=two-piece" className="">
              <img
                src="/new-assets/IMG_9833_(1).webp"
                alt="Beunique Product"
                width={0}
                height={0}
                layout="fill"
                quality={80}
                loading="lazy"
                className="w-full z-10"
              />
              <button className="bg-black text-white hover:text-[#ACB2BE] grid place-items-center border-0 outline-none focus:outline-none cursor-pointer duration-300 w-full h-[40px] z-30">
                Shop Two Piece
              </button>
            </Link>
          </section>

          <section className="w-[48%] sm3:w-[24%] grid place-items-center text-center relative">
            <Link to="/products?type=jumpsuit" className="">
              <img
                src="/new-assets/IMG_9829.webp"
                alt="Beunique Product"
                width={0}
                height={0}
                layout="fill"
                quality={80}
                loading="lazy"
                className="w-full z-10"
              />
              <button className="bg-black text-white hover:text-[#ACB2BE] grid place-items-center border-0 outline-none focus:outline-none cursor-pointer duration-300 w-full h-[40px] z-30">
                Shop Jumpsuit
              </button>
            </Link>
          </section>

          <section className="w-[48%] sm3:w-[24%] grid place-items-center text-center relative">
            <Link to="/products?type=long-dress" className="">
              <img
                src="/new-assets/IMG_9805.webp"
                alt="Beunique Product"
                width={0}
                height={0}
                layout="fill"
                quality={80}
                loading="lazy"
                className="w-full z-10"
              />
              <button className="bg-black text-white hover:text-[#ACB2BE] grid place-items-center border-0 outline-none focus:outline-none cursor-pointer duration-300 w-full h-[40px] z-30">
                Shop Long Gowns
              </button>
            </Link>
          </section>
        </section>

        <section className="w-[95%] p-5 m-0 flex flex-col items-start">
          <h2 className="text-[24px] font-anybody font-semibold text-left mb-3 mt-6">
            New Stock
          </h2>

          <NewStockSlider />
        </section>

        <section className="w-[100%] bg-[#f2f4f7] overflow-hidden flex flex-col space-y-4 py-8 items-center justify-center sm2:flex-row sm2:flex-wrap sm2:justify-between sm2:px-6">
          <section className="w-[90%] sm2:w-[45%]">
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
              className="w-[100%] flex flex-col items-center justify-center md:flex-row md:justify-between"
            >
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                {...register("email", { required: true })}
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
