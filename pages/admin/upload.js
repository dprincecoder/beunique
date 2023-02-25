import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";

import { useAppContext } from "@/context/AppContext";
import Logo from "@/public/logo.png";
import {
  I3Dcube,
  DocumentUpload,
  ShoppingCart,
  Setting2,
  LogoutCurve,
  ArrowLeft,
  ArrowRight,
  ClipboardExport,
  Filter,
  CloudAdd,
} from "iconsax-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Listbox, Transition } from "@headlessui/react";

// import UploadImages from "@/components/UploadImages";

const AdminUpload = () => {
  const { userLoggedIn, priceFormatter } = useAppContext();

  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors },
  } = useForm();

  const [images, setImages] = useState(null);

  const imageUploader = () => {};

  const onChangePicture = (e) => {
    setPicture(URL.createObjectURL(e.target.files[0]));
  };

  const onSubmit = async (data) => {
    const formData = new FormData();

    formData.append("file", data.file[0]);
    // const res = await fetch("http://localhost:3001/files", {
    //   method: "POST",
    //   body: formData,
    // }).then((res) => res.json());
    // console.log(res);
    // alert(JSON.stringify(`${res.message}, status: ${res.status}`));
    // setPicture(null);
  };

const categoriesData = [

{
id: 1,
name: "Short Dress",
},

{
id: 2,
name: "Long Dress",
},

{
id: 3,
name: "Two Piece",
},

{
id: 4,
name: "Gown",
},

{
id: 5,
name: "Jumpsuit",
},

{
id: 6,
name: "Playsuit",
},

]

  return (
    <>
      <Head>
        <title>BeUnique | Upload Product</title>
        <meta
          name="description"
          content="The most unique and affordable ecommerce store for females"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="min-w-[1200px] w-full h-full mx-auto block p-[16px] md:px-[40px] md:py-[20px] relative font-inter overflow-x-hidden overflow-y-scroll scrollbar-thin scrollbar-track-[#ACB2BE] scrollbar-thumb-black scrollbar-track-rounded-md scrollbar-thumb-rounded-md">
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
                  class="px-6 py-2.5 text-[#101828] hover:bg-[#101828] hover:text-[#fcfcfd] font-medium hover:font-semibold text-[14px] rounded-lg focus:outline-none focus:ring-0 transition duration-300 ease-in-out flex align-center w-[200px]"
                >
                  <I3Dcube size={20} className="mr-3" />
                  Overview
                </button>
              </Link>
              <Link href="admin/upload">
                <button
                  type="button"
                  class=" px-6 py-2.5 bg-[#101828] text-[#fcfcfd] font-medium hover:font-semibold text-[14px] rounded-lg focus:outline-none focus:ring-0 transition duration-300 ease-in-out flex align-center w-[200px]"
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
              onClick={() => alert("Logging out...")}
            >
              <LogoutCurve size={20} className="mr-3" />
              Logout
            </button>
          </section>
        </section>

        <section className="fixed top-0 right-0 w-[78%] h-full pt-[30px] pr-[30px] pb-[30px] overflow-x-hidden overflow-y-scroll scrollbar-thin scrollbar-track-[#ACB2BE] scrollbar-thumb-black scrollbar-track-rounded-md scrollbar-thumb-rounded-md ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full h-full flex items-start justify-between"
          >
              
            <section className="w-[35%] flex flex-col">
              <section className="w-full">
                <h2 className="font-anybody font-bold text-[24px] text-[#101828]">
                  Add new product
                </h2>
                <p className="font-inter text-[14px] text-[#344054] mt-1">
                  All fields are to be filled for optimized experience
                </p>

                <label
                  htmlFor="product_image"
                  className="w-full h-[212px] border-[1px] border-[#d0d5dd] rounded-lg bg-[#fcfcfd] my-6 grid place-items-center py-6 space-y-3"
                >
                  <CloudAdd size={48} className="text-[#101828]" />
                  <p className="font-inter text-[16px] font-medium text-[#344054]">
                    Upload product photos
                  </p>

                  <section className="relative w-[150px] h-[42px]">
                    <input
                      type="file"
                      {...register("product_image", { required: true })}
                      onChange={imageUploader}
                      className="cursor-pointer relative w-[150px] h-[42px] z-20 flex items-center justify-center opacity-0 px-2 py-2.5"
                      multiple
                    />

                    <button
                      type="button"
                      class="px-2 py-2.5 bg-[#101828] text-[#fcfcfd] font-medium hover:font-semibold text-[14px] rounded-lg focus:outline-none focus:ring-0 transition duration-300 ease-in-out flex items-center justify-center w-[150px] h-[42px] absolute top-0 left-0 z-10"
                    >
                      Upload
                    </button>
                  </section>
                </label>
                {errors.product_image && (
                  <p className="w-full px-2 py-2.5 text-red-600 font-medium">
                    Product image(s) is required
                  </p>
                )}

                <p className="font-inter text-[14px] text-[#667085] mt-2">
                  Do you know? Buyers like to browse images that are clear and
                  tells easily what your product is? <br />
                  Make your product images count!
                </p>
              </section>
            </section>

            <section className="w-[60%] h-full space-y-6 overflow-y-scroll scrollbar-thin scrollbar-track-[#ACB2BE] scrollbar-thumb-black scrollbar-track-rounded-md scrollbar-thumb-rounded-md pr-6">
              <section className="w-full flex flex-col">
                <h3 className="font-inter font-semibold text-[18px] text-[#101828] ">
                  Introduction
                </h3>

                <label
                  htmlFor="product_name"
                  className="w-full font-normal text-[14px] text-[#344054] space-y-3 mt-2"
                >
                  <p>Product name</p>

                  <input
                    type="text"
                    placeholder="Outfit name"
                    name="product_name"
                    className="w-full px-[16px] py-[8px] rounded-md placeholder:text-[16px] placeholder:text-[#667085] outline-none bg-white border-[1px] border-[#d0d5dd]"
                    {...register("product_name", { required: true })}
                  />
                  {errors.product_name && (
                    <p className="w-full px-2 py-2.5 text-red-600 font-medium">
                      Product name is required
                    </p>
                  )}
                </label>

                <label
                  htmlFor="description"
                  className="w-full font-normal text-[14px] text-[#344054] space-y-2 mt-6"
                >
                  <p>Description</p>

                  <textarea
                    type="text"
                    placeholder="Enter a description"
                    name="description"
                    className="w-full h-[208px] px-[16px] py-[8px] rounded-md placeholder:text-[16px] placeholder:text-[#667085] outline-none bg-white border-[1px] border-[#d0d5dd] overflow-y-scroll scrollbar-thin scrollbar-track-[#ACB2BE] scrollbar-thumb-black scrollbar-track-rounded-md scrollbar-thumb-rounded-md"
                    {...register("description", { required: true })}
                  />
                  {errors.description && (
                    <p className="w-full px-2 py-2.5 text-red-600 font-medium">
                      Product description is required
                    </p>
                  )}
                </label>
              </section>

              <section className="w-full">
                <h3 className="font-inter font-semibold text-[18px] text-[#101828]">
                  General
                </h3>
                <section className="w-full grid grid-cols-2 gap-4 mt-2">
                  <label
                    htmlFor="product_price"
                    className="w-full font-normal text-[14px] text-[#344054] space-y-3"
                  >
                    <p>Price</p>

                    <input
                      type="number"
                      placeholder="12000"
                      name="product_price"
                      className="w-full px-[16px] py-[8px] rounded-md placeholder:text-[16px] placeholder:text-[#667085] outline-none bg-white border-[1px] border-[#d0d5dd]"
                      {...register("product_price", { required: true })}
                    />
                    {errors.product_price && (
                      <p className="w-full px-2 py-2.5 text-red-600 font-medium">
                        Product price is required
                      </p>
                    )}
                  </label>

                  <label
                    htmlFor="sales_price"
                    className="w-full font-normal text-[14px] text-[#344054] space-y-3"
                  >
                    <p>Sales Price</p>

                    <input
                      type="text"
                      placeholder="8500"
                      name="sales_price"
                      className="w-full px-[16px] py-[8px] rounded-md placeholder:text-[16px] placeholder:text-[#667085] outline-none bg-white border-[1px] border-[#d0d5dd]"
                      {...register("sales_price", { required: true })}
                    />
                    {errors.sales_price && (
                      <p className="w-full px-2 py-2.5 text-red-600 font-medium">
                        Sales price is required
                      </p>
                    )}
                  </label>

                  <label
                    htmlFor="weight"
                    className="w-full font-normal text-[14px] text-[#344054] space-y-3"
                  >
                    <p>Weight</p>

                    <input
                      type="text"
                      placeholder="4kg"
                      name="weight"
                      className="w-full px-[16px] py-[8px] rounded-md placeholder:text-[16px] placeholder:text-[#667085] outline-none bg-white border-[1px] border-[#d0d5dd]"
                      {...register("weight", { required: true })}
                    />
                    {errors.weight && (
                      <p className="w-full px-2 py-2.5 text-red-600 font-medium">
                        Weight is required
                      </p>
                    )}
                  </label>

                  <label
                    htmlFor="stock"
                    className="w-full font-normal text-[14px] text-[#344054] space-y-3"
                  >
                    <p>No. of units available</p>

                    <input
                      type="number"
                      placeholder="5"
                      name="stock"
                      className="w-full px-[16px] py-[8px] rounded-md placeholder:text-[16px] placeholder:text-[#667085] outline-none bg-white border-[1px] border-[#d0d5dd]"
                      {...register("stock", { required: true })}
                    />
                    {errors.stock && (
                      <p className="w-full px-2 py-2.5 text-red-600 font-medium">
                        Sales price is required
                      </p>
                    )}
                  </label>

<label
                    htmlFor="category"
                    className="w-full font-normal text-[14px] text-[#344054] space-y-3 col-span-2"
                  >
<p>Category</p>

<select name="category" {...register("category", { required: true })} className="w-full px-[16px] py-[8px] rounded-md placeholder:text-[16px] placeholder:text-[#667085] outline-none bg-white border-[1px] border-[#d0d5dd]" >
        <option value="Short Dress">Short Dress</option>
        <option value="Long Dress">Long Dress</option>
        <option value="Two Piece">Two Piece</option>
        <option value="Gown">Gown</option>
        <option value="Jumpsuit">Jumpsuit</option>
        <option value="Playsuit">Playsuit</option>
      </select>

{errors.category && (
                      <p className="w-full px-2 py-2.5 text-red-600 font-medium">
                        Product category is required
                      </p>
                    )}
</label>

<label htmlFor="size" className="w-full font-normal text-[14px] text-[#344054] space-y-3 col-span-2">
<p>Size</p>


<select name="size" {...register("category", { required: true })} className="w-full px-[16px] py-[8px] rounded-md placeholder:text-[16px] placeholder:text-[#667085] outline-none bg-white border-[1px] border-[#d0d5dd]" >
        <option value="sm">sm</option>
        <option value="md">md</option>
        <option value="lg">lg</option>
        <option value="xl">xl</option>
        <option value="xxl">xxl</option>
      </select>

{errors.size && (
                      <p className="w-full px-2 py-2.5 text-red-600 font-medium">
                        Product size is required
                      </p>
                    )}
</label>


                  <section className="w-full flex items-centerjustify-center space-x-5">
                    <button
                      type="button"
                      class="px-2 py-2.5 bg-white text-[#101828] font-medium hover:font-semibold text-[14px] rounded-lg focus:outline-none focus:ring-0 transition duration-300 ease-in-out flex items-center justify-center w-[150px]"
                    >
                      Reset
                    </button>

                    <button
                      type="button"
                      class="px-2 py-2.5 bg-[#101828] text-[#fcfcfd] font-medium hover:font-semibold text-[14px] rounded-lg focus:outline-none focus:ring-0 transition duration-300 ease-in-out flex items-center justify-center w-[150px]"
                    >
                      Upload
                    </button>
                  </section>
                </section>
              </section>
            </section>
          </form>
        </section>
      </section>
    </>
  );
};

export default AdminUpload;
