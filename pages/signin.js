import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { Eye } from "iconsax-react";

const Signin = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  // const handleChange = (e) => {
  //   console.log(e.target.name);
  //   setRegData({ ...regData, [e.target.name]: e.target.value });
  // };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const options = {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data),
      };

      await fetch("https://54.157.82.169/users/login", options)
        .then((res) => res.json())
        .then((resData) => {
          if (resData.detail) {
            toast.error(resData.detail);
            console.log(resData.detail);
          } else {
            toast.success(resData);
            console.log(resData);
            // router.push("/signin");
          }
        });
    } catch (err) {
      console.log(err);
      // toast.error(err);
    }
  };
  // console.log(errors);

  return (
    <>
      <Head>
        <title>BeUnique | Sign In</title>
        <meta
          name="description"
          content="The most unique and affordable ecommerce store for females"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="w-screen h-auto block p-[16px] md:p-[40px] relative font-inter overflow-x-hidden overflow-y-scroll scrollbar-thin scrollbar-track-[#ACB2BE] scrollbar-thumb-black scrollbar-track-rounded-md scrollbar-thumb-rounded-md">
        <section className="w-full sm2:w-[70%] md3:w-[40%] mt-[8vh] mx-auto flex flex-col items-center relative">
          <section className="w-fit">
            <Link href="/">
              <Image
                src={Logo}
                alt="BeUnique"
                width={288}
                height={56}
                className="w-[206px] h-[40px] md:w-[288px] md:h-[56px]"
              />
            </Link>
          </section>

          <section className="w-full my-8 flex flex-col items-center space-y-6">
            <h3 className="text-[18px] font-bold text-left w-full">Sign In</h3>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full flex flex-col items-center my-0"
            >
              <label
                htmlFor="email"
                className="w-full rounded-lg border-[1px] border-[#d0d5dd]"
              >
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="w-full p-[16px] rounded-lg placeholder:text-[16px] placeholder:text-[#344054] font-medium outline-none border-none bg-white"
                  {...register("email", { required: true })}
                />
              </label>

              <label
                htmlFor="password"
                className="w-full rounded-lg border-[1px] border-[#d0d5dd] relative mt-4"
              >
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  id="password"
                  name="password"
                  className="w-full p-[16px] rounded-lg placeholder:text-[16px] placeholder:text-[#344054] font-medium outline-none border-none bg-white"
                  {...register("password", { required: true })}
                />

                <Eye
                  size={20}
                  className="text-[#344054] absolute top-[50%] -translate-y-[50%] right-[16px] cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                />
              </label>

              <p className="font-inter text-[16px] text-[#344054] mt-4 mb-10 w-full text-right">
                <Link href="/forgot-password">Forgot password</Link>
              </p>

              <button
                type="submit"
                className="w-full bg-black text-[#fcfcfd] p-[16px] rounded-lg cursor-pointer duration-300"
              >
                Sign In
              </button>
            </form>
          </section>

          <section className="w-full flex flex-col items-center text-center space-y-8">
            <p className="font-inter text-[16px] text-[#344054]">
              Don&apos;t have an account?{" "}
              <span className="font-bold">
                <Link href="/signup">Create account</Link>
              </span>
            </p>
          </section>
        </section>
      </section>
    </>
  );
};

export default Signin;
