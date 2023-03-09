import React, { useEffect, useState } from "react";

import {
  CloudAdd,
  DocumentUpload,
  I3Dcube,
  LogoutCurve,
  Setting2,
  ShoppingCart,
} from "iconsax-react";
import Multiselect from "multiselect-react-dropdown";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { MdClose } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import AuthError from "../../../components/AuthError";
import { AddProductApi } from "../../../redux/axios/apis/admin";
import ErrorHandler from "../../../redux/axios/Utils/ErrorHandler";
import { GetCategories } from "../../../redux/features/admin/services";
import { dispatch } from "../../../redux/store";

const AdminUpload = () => {
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const { categories } = useSelector((state) => state.admin);

  const [categoryData, setCategoryData] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);

  const [sizes, setsizes] = useState([]);

  const sizesArr = ["sm", "md", "lg", "xl", "xxl"];
  const logoutHandler = () => {
    localStorage.clear();
    sessionStorage.clear();
    navigate("/auth/signin");
  };

  useEffect(() => {
    dispatch(GetCategories());
  }, []);

  useEffect(() => {
    if (categories.length > 0) {
      setCategoryData(categories);
    }
  }, [categories]);

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm();

  const getImages = (e) => {
    const files = e.target.files;
    const previewFiles = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      if (!/\.(jpe?g|png|gif)$/i.test(file.name)) {
        continue;
      }

      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onloadend = () => {
        previewFiles.push({ name: file.name, src: reader.result });
        setPreviewImages([...previewFiles]);
      };
    }
  };

  const onSubmit = async (data) => {
    data.sizes = sizes;

    if (sizes.length < 1) {
      setError(
        "sizes",
        { type: "required", message: "Product is size is required" },
        { shouldFocus: false }
      );
    }

    var formData = new FormData();
    formData.append("product_name", data.product_name);
    formData.append("product_price", data.product_price);
    formData.append("sizes", data.sizes);
    formData.append("category", data.category);
    formData.append("units", data.stock);
    formData.append("weight", data.weight);
    formData.append("sales_price", data.sales_price);
    formData.append("description", data.description);
    formData.append("new_stock", true);
    formData.append("product_url", data.product_image[0]);

    try {
      const res = await AddProductApi(formData);
      if (res.status) {
        reset();
        setsizes([]);
        toast.success("Product uploaded successfully");
      }
    } catch (error) {
      toast.error(ErrorHandler(error).message);
    }
  };

  return (
    <>
      <section className="min-w-[1200px] w-full h-full mx-auto block p-[16px] md:px-[40px] md:py-[20px] relative font-inter overflow-x-hidden overflow-y-scroll scrollbar-thin scrollbar-track-[#ACB2BE] scrollbar-thumb-black scrollbar-track-rounded-md scrollbar-thumb-rounded-md">
        {token ? (
          <>
            <section className="w-[20%] min-h-full fixed top-0 left-0 flex flex-col items-start justify-start pl-[30px] pt-[30px] pb-[30px]">
              <section className="w-fit flex items-end">
                <Link to="/">
                  <img
                    src="/logo.png"
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
                  <Link to="/admin">
                    <button
                      type="button"
                      className="px-6 py-2.5 text-[#101828] hover:bg-[#101828] hover:text-[#fcfcfd] font-medium hover:font-semibold text-[14px] rounded-lg focus:outline-none focus:ring-0 transition duration-300 ease-in-out flex align-center w-[200px]"
                    >
                      <I3Dcube size={20} className="mr-3" />
                      Overview
                    </button>
                  </Link>
                  <Link to="/admin/upload">
                    <button
                      type="button"
                      className=" px-6 py-2.5 bg-[#101828] text-[#fcfcfd] font-medium hover:font-semibold text-[14px] rounded-lg focus:outline-none focus:ring-0 transition duration-300 ease-in-out flex align-center w-[200px]"
                    >
                      <DocumentUpload size={20} className="mr-3" />
                      Upload
                    </button>
                  </Link>
                  <Link to="/admin/orders">
                    <button
                      type="button"
                      className="px-6 py-2.5 text-[#101828] hover:bg-[#101828] hover:text-[#fcfcfd] font-medium hover:font-semibold text-[14px] rounded-lg focus:outline-none focus:ring-0 transition duration-300 ease-in-out flex align-center w-[200px]"
                    >
                      <ShoppingCart size={20} className="mr-3" />
                      Orders
                    </button>
                  </Link>
                  <Link to="/admin/settings">
                    <button
                      type="button"
                      className="px-6 py-2.5 text-[#101828] hover:bg-[#101828] hover:text-[#fcfcfd] font-medium hover:font-semibold text-[14px] rounded-lg focus:outline-none focus:ring-0 transition duration-300 ease-in-out flex align-center w-[200px]"
                    >
                      <Setting2 size={20} className="mr-3" />
                      Settings
                    </button>
                  </Link>
                </section>

                <button
                  type="button"
                  className="px-6 py-2.5 bg-[#fbe7e7] text-[#d2120f] font-medium hover:font-semibold text-[14px] rounded-lg focus:outline-none focus:ring-0 transition duration-300 ease-in-out flex align-center w-[200px]"
                  onClick={() => {
                    logoutHandler();
                  }}
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
                          // value={images ? images.name : ""}
                          {...register("product_image", { required: true })}
                          className="cursor-pointer relative w-[150px] h-[42px] z-20 flex items-center justify-center opacity-0 px-2 py-2.5"
                          multiple
                          onChange={(e) => {
                            getImages(e);
                          }}
                        />

                        <button
                          type="button"
                          className="px-2 py-2.5 bg-[#101828] text-[#fcfcfd] font-medium hover:font-semibold text-[14px] rounded-lg focus:outline-none focus:ring-0 transition duration-300 ease-in-out flex items-center justify-center w-[150px] h-[42px] absolute top-0 left-0 z-10"
                        >
                          Upload
                        </button>
                      </section>
                    </label>
                    {errors.product_image && (
                      <p className="w-full px-2 py-2.5 text-red-600 font-medium -mt-1">
                        Product image(s) is required
                      </p>
                    )}

                    <p className="font-inter text-[14px] text-[#667085] mt-2">
                      Do you know? Buyers like to browse images that are clear
                      and tells easily what your product is? <br />
                      Make your product images count!
                    </p>
                    {previewImages.map((file, index) => (
                      <div
                        key={index}
                        className="mb-2 mt-2 font-inter text-[14px] text-[#667085]"
                      >
                        <img src={file.src} alt={file.name} height={100} />
                        <div>{file.name}</div>
                      </div>
                    ))}
                  </section>
                </section>

                <section className="w-[60%] flex flex-col h-full space-y-6">
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
                    </label>
                    {errors.product_name && (
                      <p className="w-full px-2 py-2.5 text-red-600 font-medium -mt-1">
                        Product name is required
                      </p>
                    )}

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
                    </label>
                    {errors.description && (
                      <p className="w-full px-2 py-2.5 text-red-600 font-medium -mt-1">
                        Product description is required
                      </p>
                    )}
                  </section>

                  <section className="w-full">
                    <h3 className="font-inter font-semibold text-[18px] text-[#101828]">
                      General
                    </h3>
                    <section className="w-full grid grid-cols-2 gap-4 mt-2 mb-6">
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
                      </label>
                      {errors.product_price && (
                        <p className="w-full px-2 py-2.5 text-red-600 font-medium -mt-1">
                          Product price is required
                        </p>
                      )}

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
                      </label>
                      {errors.sales_price && (
                        <p className="w-full px-2 py-2.5 text-red-600 font-medium -mt-1">
                          Sales price is required
                        </p>
                      )}

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
                      </label>
                      {errors.weight && (
                        <p className="w-full px-2 py-2.5 text-red-600 font-medium -mt-1">
                          Weight is required
                        </p>
                      )}

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
                      </label>
                      {errors.stock && (
                        <p className="w-full px-2 py-2.5 text-red-600 font-medium -mt-1">
                          Sales price is required
                        </p>
                      )}

                      <label
                        htmlFor="category"
                        className="w-full font-normal text-[14px] text-[#344054] space-y-3 col-span-2"
                      >
                        <p>Category</p>

                        <select
                          name="category"
                          {...register("category", { required: true })}
                          className="w-full px-[16px] py-[8px] rounded-md placeholder:text-[16px] placeholder:text-[#667085] outline-none bg-white border-[1px] border-[#d0d5dd]"
                        >
                          {categoryData.map((ele) => (
                            <option
                              value={ele.category_name}
                              key={categories.indexOf(ele)}
                            >
                              {ele.category_name}
                            </option>
                          ))}
                        </select>
                      </label>
                      {errors.category && (
                        <p className="w-full px-2 py-2.5 text-red-600 font-medium -mt-1">
                          Product category is required
                        </p>
                      )}

                      <label
                        htmlFor="size"
                        className="w-full font-normal text-[14px] text-[#344054] space-y-3 col-span-2"
                      >
                        <p>Size</p>

                        <Multiselect
                          {...register("sizes")}
                          customCloseIcon={
                            <MdClose size={16} className="mt-1 ml-1" />
                          }
                          displayValue="key"
                          id="css_custom"
                          isObject={false}
                          onKeyPressFn={function noRefCheck() {}}
                          onRemove={(event) => setsizes(event)}
                          onSearch={function noRefCheck() {}}
                          onSelect={(event) => setsizes(event)}
                          options={sizesArr}
                          placeholder="Select"
                          required
                          closeIcon="cancel"
                          style={{
                            chips: {
                              background: "#F2F4F7",
                              border: "1px solid #d0d5dd",
                              "border-radius": "4px",
                              padding: "4px 8px",
                              fontSize: "14px",
                              fontWeight: "medium",
                              color: "#1d2939",
                            },
                            multiselectContainer: {
                              color: "#344054",
                              outline: "none",
                            },

                            searchBox: {
                              border: "1px solid #d0d5dd",
                              "border-radius": "4px",
                              outline: "none",
                              padding: "8px 16px",
                            },

                            closeIcon: {
                              color: "red",
                              background: "yellow",
                            },
                          }}
                        />
                      </label>
                      {errors.sizes && (
                        <p className="w-full px-2 py-2.5 text-red-600 font-medium -mt-1">
                          Product size is required
                        </p>
                      )}

                      <section className="w-full flex items-centerjustify-center space-x-5">
                        <button
                          type="reset"
                          className="px-2 py-2.5 bg-white text-[#101828] font-medium hover:font-semibold text-[14px] rounded-lg focus:outline-none focus:ring-0 transition duration-300 ease-in-out flex items-center justify-center w-[150px] outline-none border-[1px] border-[#d0d5dd]"
                          onClick={reset}
                        >
                          Reset
                        </button>

                        <button
                          type="submit"
                          className="px-2 py-2.5 bg-[#101828] text-[#fcfcfd] font-medium hover:font-semibold text-[14px] rounded-lg focus:outline-none focus:ring-0 transition duration-300 ease-in-out flex items-center justify-center w-[150px]"
                        >
                          Upload
                        </button>
                      </section>
                    </section>
                  </section>
                </section>
              </form>
            </section>
          </>
        ) : (
          <AuthError />
        )}
      </section>
    </>
  );
};

export default AdminUpload;
