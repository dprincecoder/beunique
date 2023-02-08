import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { SearchNormal1, Eye, Heart, Bag2, ProfileCircle } from "iconsax-react";
import Link from "next/link";
import Logo from "@/public/logo.png";
import { useAppContext } from "../context/AppContext";

const Navigation = () => {
  const router = useRouter();

  const { isHomeSearchOpen, setIsHomeSearchOpen } = useAppContext();

  const [searchInput, setSearchInput] = useState("");

  const [categories, setCategories] = useState(null);

  const currUrlRaw = router.route;
  const currUrlArr = currUrlRaw.split("/");
  const currUrl = currUrlArr[1] ? currUrlArr[1] : null;

  useEffect(() => {
    if (window !== undefined || window !== null) {
      if (router.route) {
        setCategories([
          {
            id: 1,
            name: "New In",
            slug: "/new-in",
            active: currUrl === "new-in" ? true : false,
          },
          {
            id: 2,
            name: "Short Dress",
            slug: "/short-dress",
            active: currUrl === "short-dress" ? true : false,
          },
          {
            id: 3,
            name: "Long Dress",
            slug: "/long-dress",
            active: currUrl === "long-dress" ? true : false,
          },
          {
            id: 4,
            name: "Two Piece",
            slug: "/two-piece",
            active: currUrl === "two-piece" ? true : false,
          },
          {
            id: 5,
            name: "Gown",
            slug: "/gown",
            active: currUrl === "gown" ? true : false,
          },
          {
            id: 6,
            name: "Jumpsuit",
            slug: "/jumpsuit",
            active: currUrl === "jumpsuit" ? true : false,
          },
          {
            id: 7,
            name: "Playsuit",
            slug: "/playsuit",
            active: currUrl === "playsuit" ? true : false,
          },
        ]);
      }
    }
  }, [router.isReady, currUrl, router.route]);

  // const handleChange = (e) => {
  //   setSearchInput({
  //     [e.target.id]: e.target.value.trim(),
  //   });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchInput !== "") {
      console.log(searchInput);
    }
  };

  console.log(searchInput);

  return (
    <section className="w-full grid place-items-center py-4 px-6 m-0 z-30 bg-white text-black dark:bg-white dark:text-black font-inter">
      <section className="w-full">
        <section className="w-full mb-5 flex flex-row justify-between items-center">
          <section className="w-fit">
            <Link href="/">
              <Image src={Logo} alt="BeUnique" width={165} height={33} />
            </Link>
          </section>

          <section className="w-fit md:w-[70%] md2:w-[60%] flex flex-row items-center justify-between">
            <section className="w-[60%] text-[#ACB2BE] rounded-full border-2 border-[#ACB2BE] flex-row p-1 font-inter hidden md:flex">
              <SearchNormal1 size={25} className="" />
              <form onSubmit={() => handleSubmit()} className="w-[85%] ">
                <input
                  name="search"
                  type="search"
                  placeholder="Search"
                  value={searchInput ? searchInput : ""}
                  onChange={(e) => setSearchInput(e.target.value)}
                  className="w-full ml-4 placeholder-black border-none outline-none hover:outline-none focus:outline-none"
                />
              </form>
            </section>

            <section className="w-fit flex flex-row items-center space-x-4 sm:space-x-8 ">
              <section className="block md:hidden">
                <SearchNormal1 size={20} className="" />
              </section>
              <section className="">
                <Eye size={20} className="" />
              </section>
              <section className="">
                <Heart size={20} className="" />
              </section>
              <section className="relative">
                <Bag2 size={25} className="" />
                <span className="absolute bottom-[-8px] right-[-8px] bg-black text-white w-[20px] h-[20px] rounded-full grid place-items-center text-[12px]">
                  3
                </span>
              </section>
              <section className="">
                <ProfileCircle size={25} className="" />
              </section>
            </section>
          </section>
        </section>

        <section className="w-full flex flex-row flex-wrap items-start justify-start space-x-0 md:space-x-3 md2:space-x-6 font-medium text-[12px] md:text-[14px] lg2:text-[16px]">
          {categories &&
            categories.map((cat) => (
              <Link
                href={cat.slug}
                className="block w-fit px-4 py-[5px] md:px-0 md:py-1"
                key={cat.id}
              >
                {cat.name}
              </Link>
            ))}
        </section>
      </section>
    </section>
  );
};

export default Navigation;
