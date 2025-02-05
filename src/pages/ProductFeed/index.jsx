import { Listbox, Transition } from "@headlessui/react";
import { ArrowDown2, ArrowRight2, Filter } from "iconsax-react";
import React, { Fragment, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { NewStockSlider, ProductCard, RadioButton } from "../../components";
import { priceRanges } from "../../data/priceRanges";
import { ProductTypes } from "../../data/ProductTypes";
import { sizes } from "../../data/sizes";
import { sortOptions } from "../../data/sortOptions";

import axios from "axios";

const Products = () => {
  const router = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(router.search);
  const type = queryParams.get("type");
  console.log(type);
  const [sortOption, setSortOption] = useState(sortOptions[0]);
  const [sortOptionsFt, setSortOptionsFt] = useState(sortOptions);
  const [priceRange, setPriceRange] = useState(null);
  const [priceRangeFt, setPriceRangeFt] = useState(priceRanges);
  const [size, setSize] = useState(null);
  const [sizesFt, setSizesFt] = useState(sizes);

  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const { register, handleSubmit } = useForm();

  const sortOptions2 = [...sortOptions];
  const priceRanges2 = [...priceRanges];
  const sizes2 = [...sizes];

  const handleSortOptions2 = (id) => {
    for (let x = 0; x < sortOptions2.length; x++) {
      sortOptions2[x].selected = false;

      if (sortOptions2[x].id === id) {
        sortOptions2[x].selected = true;
      }
    }

    setSortOptionsFt(sortOptions2);

    setSortOption(sortOptions2.find((ft) => ft.selected === true));
  };

  const handlePriceRange = (id) => {
    for (let x = 0; x < priceRanges2.length; x++) {
      priceRanges2[x].selected = false;

      if (priceRanges2[x].id === id) {
        priceRanges2[x].selected = true;
      }
    }

    setPriceRangeFt(priceRanges2);

    setPriceRange(priceRanges2.find((ft) => ft.selected === true));
  };

  const handleSize = (id) => {
    for (let x = 0; x < sizes2.length; x++) {
      sizes2[x].selected = false;

      if (sizes2[x].id === id) {
        sizes2[x].selected = true;
      }
    }

    setSizesFt(sizes2);

    setSize(sizes2.find((ft) => ft.selected === true));
  };

  const [pageTitle, setPageTitle] = useState(null);
  const [products, setProducts] = useState([{ items: null, isLoading: true }]);

  const GetProductsApi = async () => {
    try {
      const res = await axios.get(
        `https://beunique.live/users/get_dress/${type}`
      );
      console.log(res.data.detail);
      setProducts({ ...products, items: res.data.detail, isLoading: false });
    } catch (error) {
      console.log(error);
    }
  };
  console.log(products);
  useEffect(() => {
    if (type) {
      const typeArr = type.split("-");
      for (let i = 0; i < typeArr.length; i++) {
        typeArr[i] = typeArr[i].charAt(0).toUpperCase() + typeArr[i].slice(1);
      }
      const title = typeArr.join(" ");
      setPageTitle(title);

      GetProductsApi();
    }
  }, [type, products.isLoading]);

  return (
    <>
      <section className="w-full flex flex-col items-center justify-center p-0 px-[16px] md:px-[40px] m-0 z-30 font-inter scrollbar scrollbar-track-[#ACB2BE] scrollbar-thumb-black scrollbar-corner-red-500 scrollbar-w-4 scrollbar-track-rounded-md scrollbar-thumb-rounded-md scrollbar-corner-rounded-md">
        <section className="w-full mx-auto bg-white dark:bg-white">
          <section className="flex items-center justify-start my-4 space-x-2">
            <span className="font-inter text-[14px] text-[#34405]">
              <Link href="/">Home</Link>
            </span>
            <ArrowRight2 variant="Linear" size={16} className="" />
            <span className="font-inter text-[14px] text-black font-medium">
              <p>{ProductTypes[type]}</p>
            </span>
          </section>

          <section className="flex items-center justify-between w-full">
            <h2 className="font-anybody text-[30px] font-bold dark:text-black w-fit">
              {ProductTypes[type]}
            </h2>

            <section
              className="flex items-center justify-start space-x-2 p-2 w-fit md:hidden border-2 border-[#d0d5dd] rounded-full px-4 py-2 bg-[#f2f4f7] cursor-pointer"
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
            >
              <Filter variant="Linear" size={24} className="text-[#101828]" />

              <span className="text-[16px] text-[#101828] font-semibold">
                Filter
              </span>
            </section>
          </section>
        </section>

        <section className="w-full mx-auto bg-white dark:bg-white text-black dark:text-black p-0 m-0 my-4">
          <section className=" items-center justify-end space-x-2 p-2 hidden md:flex">
            <span className="text-[14px] text-[#101828] font-medium">
              Sort by
            </span>

            <Listbox value={sortOption} onChange={setSortOption}>
              <div className="relative">
                <Listbox.Button className="relative w-full cursor-pointer bg-white dark:bg-white py-2 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 text-[14px] font-medium">
                  <span className="block truncate">{sortOption.option}</span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <ArrowDown2
                      variant="Linear"
                      size={24}
                      className=" text-black"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute right-0 mt-1 w-[220px] overflow-auto rounded-md bg-white py-2 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-[14px] z-30 space-y-3">
                    {sortOptions.map((option, optionIdx) => {
                      // console.log(option, optionIdx + 1);

                      return (
                        <Listbox.Option
                          key={optionIdx}
                          className={({ active }) =>
                            `relative cursor-pointer select-none w-fit my-2 ml-5`
                          }
                          value={option}
                        >
                          {({ active }) => {
                            return (
                              <section className="flex items-center justify-start space-x-2">
                                {sortOption.id === optionIdx + 1 ? (
                                  <RadioButton active={true} size={0} />
                                ) : (
                                  <RadioButton active={false} size={0} />
                                )}

                                <span
                                  className={`block truncate ${
                                    sortOption.id === optionIdx + 1
                                      ? "text-[#101828]"
                                      : "text-[#344054]"
                                  } text-[14px] font-medium`}
                                >
                                  {option.option}
                                </span>
                              </section>
                            );
                          }}
                        </Listbox.Option>
                      );
                    })}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </section>

          <section className="w-full flex items-start justify-between mt-4">
            <section className="w-[25%] lg2:w-[20%] hidden md:block">
              <section className="flex items-center justify-start space-x-2 p-2">
                <Filter variant="Linear" size={24} className="" />

                <span className="text-[18px] text-black font-semibold">
                  Filter
                </span>
              </section>

              <div
                className="accordion accordion-flush border-none"
                id="filterAccordion"
              >
                <div className="accordion-item bg-white border-none block md:hidden">
                  <h2
                    className="accordion-header mb-0 border-none"
                    id="sortHeader"
                  >
                    <button
                      id="filterAccordionBtn"
                      className="

        relative
        flex
        items-center
        justify-between
        w-full
        py-4 pb-0
        px-5
        text-[16px] text-black text-left
        bg-white
        border-none
        rounded-none
        transition
        focus:outline-none
      "
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#sortBody"
                      aria-expanded="true"
                      aria-controls="sortBody"
                    >
                      <span className=" text-black font-semibold">Sort By</span>
                      <ArrowDown2
                        variant="Linear"
                        size={24}
                        className="text-black"
                      />
                    </button>
                  </h2>
                  <div
                    id="sortBody"
                    className="accordion-collapse collapse show border-none"
                    aria-labelledby="sortHeader"
                  >
                    <div className="accordion-body py-4 px-5 border-none space-y-4">
                      {sortOptionsFt
                        ? sortOptionsFt.map((option) => {
                            return (
                              <section
                                className="flex items-center justify-start space-x-2 cursor-pointer"
                                key={option.id}
                              >
                                {option.selected ? (
                                  <RadioButton active={true} size={0} />
                                ) : (
                                  <RadioButton active={false} size={0} />
                                )}

                                <span
                                  className={`block truncate text-[14px] font-medium`}
                                  onClick={() => handleSortOptions2(option.id)}
                                >
                                  {option.option}
                                </span>
                              </section>
                            );
                          })
                        : "No Sorting"}
                    </div>
                  </div>
                </div>

                <div className="accordion-item bg-white border-none">
                  <h2
                    className="accordion-header mb-0 border-none"
                    id="priceRangeHeader"
                  >
                    <button
                      id="priceRangeBtn"
                      className="
        relative
        flex
        items-center
        justify-between
        w-full
        py-4
        pb-0
        px-5
        text-[16px] text-black text-left
        bg-white
        border-none
        rounded-none
        transition
        focus:outline-none outline-none
      "
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#priceRangeBody"
                      aria-expanded="true"
                      aria-controls="priceRangeBody"
                    >
                      <span className=" text-black font-semibold">Price</span>
                      <ArrowDown2
                        variant="Linear"
                        size={24}
                        className="text-black"
                      />
                    </button>
                  </h2>
                  <div
                    id="priceRangeBody"
                    className="accordion-collapse collapse show border-none border-0 outline-none"
                    aria-labelledby="priceRangeHeader"
                  >
                    <div className="accordion-body py-4 px-5 border-none space-y-4">
                      {priceRanges2
                        ? priceRanges2.map((range) => {
                            return (
                              <section
                                className="flex items-center justify-start space-x-2 cursor-pointer"
                                key={range.id}
                              >
                                {range.selected ? (
                                  <RadioButton active={true} size={0} />
                                ) : (
                                  <RadioButton active={false} size={0} />
                                )}

                                <span
                                  className={`block truncate text-[14px] font-medium`}
                                  onClick={() => handlePriceRange(range.id)}
                                >
                                  {range.range}
                                </span>
                              </section>
                            );
                          })
                        : "No Price Range"}
                    </div>
                  </div>
                </div>

                <div className="accordion-item bg-white border-none">
                  <h2
                    className="accordion-header mb-0 border-none"
                    id="sizesHeader"
                  >
                    <button
                      id="sizesAccordionBtn"
                      className="
        relative
        flex
        items-center
        justify-between
        w-full
        py-4 pb-0
        px-5
        text-[16px] text-black text-left
        bg-white
        border-none
        rounded-none
        transition
        focus:outline-none
      "
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#sizesBody"
                      aria-expanded="true"
                      aria-controls="sizesBody"
                    >
                      <span className=" text-black font-semibold">Size</span>
                      <ArrowDown2
                        variant="Linear"
                        size={24}
                        className="text-black"
                      />
                    </button>
                  </h2>
                  <div
                    id="sizesBody"
                    className="accordion-collapse collapse show border-none"
                    aria-labelledby="sizesHeader"
                  >
                    <div className="accordion-body py-4 px-5 border-none w-fit grid grid-cols-3 gap-4">
                      {sizesFt
                        ? sizesFt.map((size) =>
                            size.selected ? (
                              <section
                                className="grid place-items-center  cursor-pointer text-[16px] font-medium w-[56px] h-[46px] bg-[#101828] text-[#fcfcfd] rounded-lg"
                                key={size.id}
                                onClick={() => handleSize(size.id)}
                              >
                                {size.size}
                              </section>
                            ) : (
                              <section
                                className="grid place-items-center border-[1px] border-[#d0d5dd] cursor-pointer text-[16px] font-medium w-[56px] h-[46px] bg-white rounded-lg"
                                key={size.id}
                                onClick={() => handleSize(size.id)}
                              >
                                {size.size}
                              </section>
                            )
                          )
                        : "No Sizes"}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="w-full mx-auto md:w-[72%] lg2:w-[77%] flex flex-col items-center justify-center relative">
              <div
                className={`accordion accordion-flush border-none md:hidden w-[70%] sm2:w-[50%] absolute top-[10px] left-[50%] md:top-[15px] max-h-screen md:left-[50%] -translate-x-[50%] space-y-2 py-6 bg-white duration-300 z-30 rounded-lg ${
                  mobileFilterOpen ? "block" : "hidden"
                }`}
                id="filterAccordion2"
              >
                <div className="accordion-item bg-white border-none block md:hidden">
                  <h2
                    className="accordion-header mb-0 border-none"
                    id="sortHeader"
                  >
                    <button
                      id="filterAccordionBtn"
                      className="

        relative
        flex
        items-center
        justify-between
        w-full
        py-4 pb-0
        px-5
        text-[16px] text-black text-left
        bg-white
        border-none
        rounded-none
        transition
        focus:outline-none
      "
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#sortBody"
                      aria-expanded="true"
                      aria-controls="sortBody"
                    >
                      <span className=" text-black font-semibold">Sort By</span>
                      <ArrowDown2
                        variant="Linear"
                        size={24}
                        className="text-black"
                      />
                    </button>
                  </h2>
                  <div
                    id="sortBody"
                    className="accordion-collapse collapse show border-none"
                    space-y-2
                    py-6
                    bg-white
                    data-bs-3a
                    rounded-lgrent="#filterAccordion2"
                    aria-labelledby="sortHeader"
                  >
                    <div className="accordion-body py-4 px-5 border-none space-y-4">
                      {sortOptionsFt
                        ? sortOptionsFt.map((option) => {
                            return (
                              <section
                                className="flex items-center justify-start space-x-2 cursor-pointer"
                                key={option.id}
                              >
                                {option.selected ? (
                                  <RadioButton active={true} size={0} />
                                ) : (
                                  <RadioButton active={false} size={0} />
                                )}

                                <span
                                  className={`block truncate text-[14px] font-medium`}
                                  onClick={() => handleSortOptions2(option.id)}
                                >
                                  {option.option}
                                </span>
                              </section>
                            );
                          })
                        : "No Sorting"}
                    </div>
                  </div>
                </div>

                <div className="accordion-item bg-white border-none">
                  <h2
                    className="accordion-header mb-0 border-none"
                    id="priceRangeHeader"
                  >
                    <button
                      id="priceRangeBtn"
                      className="

        relative
        flex
        items-center
        justify-between
        w-full
        py-4
        pb-0
        px-5
        text-[16px] text-black text-left
        bg-white
        border-none
        rounded-none
        transition
        focus:outline-none outline-none
      "
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#priceRangeBody"
                      aria-expanded="true"
                      aria-controls="priceRangeBody"
                    >
                      <span className=" text-black font-semibold">Price</span>
                      <ArrowDown2
                        variant="Linear"
                        size={24}
                        className="text-black"
                      />
                    </button>
                  </h2>
                  <div
                    id="priceRangeBody"
                    className="accordion-collapse collapse border-none border-0 outline-none"
                    space-y-2
                    py-6
                    bg-white
                    data-bs-3a
                    rounded-lgrent="#filterAccordion2"
                    aria-labelledby="priceRangeHeader"
                  >
                    <div className="accordion-body py-4 px-5 border-none space-y-4">
                      {priceRanges2
                        ? priceRanges2.map((range) => {
                            return (
                              <section
                                className="flex items-center justify-start space-x-2 cursor-pointer"
                                key={range.id}
                              >
                                {range.selected ? (
                                  <RadioButton active={true} size={0} />
                                ) : (
                                  <RadioButton active={false} size={0} />
                                )}

                                <span
                                  className={`block truncate text-[14px] font-medium`}
                                  onClick={() => handlePriceRange(range.id)}
                                >
                                  {range.range}
                                </span>
                              </section>
                            );
                          })
                        : "No Price Range"}
                    </div>
                  </div>
                </div>

                <div className="accordion-item bg-white border-none">
                  <h2
                    className="accordion-header mb-0 border-none"
                    id="sizesHeader"
                  >
                    <button
                      id="sizesAccordionBtn"
                      className="

        relative
        flex
        items-center
        justify-between
        w-full
        py-4 pb-0
        px-5
        text-[16px] text-black text-left
        bg-white
        border-none
        rounded-none
        transition
        focus:outline-none
      "
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#sizesBody"
                      aria-expanded="true"
                      aria-controls="sizesBody"
                    >
                      <span className=" text-black font-semibold">Size</span>
                      <ArrowDown2
                        variant="Linear"
                        size={24}
                        className="text-black"
                      />
                    </button>
                  </h2>
                  <div
                    id="sizesBody"
                    className="accordion-collapse collapse border-none"
                    space-y-2
                    py-6
                    bg-white
                    data-bs-3a
                    rounded-lgrent="#filterAccordion2"
                    aria-labelledby="sizesHeader"
                  >
                    <div className="accordion-body py-4 px-5 border-none w-fit grid grid-cols-3 gap-4">
                      {sizesFt
                        ? sizesFt.map((size) =>
                            size.selected ? (
                              <section
                                className="grid place-items-center  cursor-pointer text-[16px] font-medium w-[56px] h-[46px] bg-[#101828] text-[#fcfcfd] rounded-lg"
                                key={size.id}
                                onClick={() => handleSize(size.id)}
                              >
                                {size.size}
                              </section>
                            ) : (
                              <section
                                className="grid place-items-center border-[1px] border-[#d0d5dd] cursor-pointer text-[16px] font-medium w-[56px] h-[46px] bg-white rounded-lg"
                                key={size.id}
                                onClick={() => handleSize(size.id)}
                              >
                                {size.size}
                              </section>
                            )
                          )
                        : "No Sizes"}
                    </div>
                  </div>
                </div>
              </div>

              {products.isLoading ? (
                <section className="w-full flex items-center justify-center mb-8">
                  <h3 className="font-anybody text-lg text-center">
                    loading...
                  </h3>
                </section>
              ) : (
                <section className="w-full flex flex-wrap items-start justify-start gap-[10px] lg2:gap-[20px]">
                  {products.items &&
                    products.items.length > 0 &&
                    products.items.map((prod, i) => (
                      <section
                        className="w-[48%] md2:w-[32%] lg2:w-[22%]"
                        key={i}
                      >
                        <ProductCard product={prod} />
                      </section>
                    ))}
                </section>
              )}

              <section className="bg-red-300 w-full p-1 text-center">
                Pagination
              </section>
            </section>
          </section>
        </section>

        <section className="w-full p-0 m-0 my-6 flex flex-col items-start">
          <h2 className="text-[24px] font-anybody font-semibold text-left mb-3">
            New Stock
          </h2>

          <NewStockSlider />
        </section>
      </section>
    </>
  );
};

export default Products;
