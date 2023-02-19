import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { SearchNormal1, Eye, Heart, Bag2, ProfileCircle } from "iconsax-react";
import Link from "next/link";
import Logo from "@/public/logo.png";
import { useAppContext } from "../context/AppContext";

const Navigation = () => {
  const router = useRouter();

  const { isHomeSearchOpen, setIsHomeSearchOpen, userLoggedIn } =
    useAppContext();

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

  useEffect(() => {
    console.log(userLoggedIn);
  }, []);

  // console.log(currUrl);

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

  /*


import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <div className="fixed top-16 w-56 text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            Options
            <ChevronDownIcon
              className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <EditActiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <EditInactiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                    Edit
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <DuplicateActiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <DuplicateInactiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                    Duplicate
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <ArchiveActiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <ArchiveInactiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                    Archive
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <MoveActiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <MoveInactiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                    Move
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <DeleteActiveIcon
                        className="mr-2 h-5 w-5 text-violet-400"
                        aria-hidden="true"
                      />
                    ) : (
                      <DeleteInactiveIcon
                        className="mr-2 h-5 w-5 text-violet-400"
                        aria-hidden="true"
                      />
                    )}
                    Delete
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

function EditInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
    </svg>
  )
}

function EditActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
    </svg>
  )
}

function DuplicateInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4H12V12H4V4Z"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <path
        d="M8 8H16V16H8V8Z"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
    </svg>
  )
}

function DuplicateActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4H12V12H4V4Z"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <path
        d="M8 8H16V16H8V8Z"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
    </svg>
  )
}

function ArchiveInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="8"
        width="10"
        height="8"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <rect
        x="4"
        y="4"
        width="12"
        height="4"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  )
}

function ArchiveActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="8"
        width="10"
        height="8"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <rect
        x="4"
        y="4"
        width="12"
        height="4"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  )
}

function MoveInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 4H16V10" stroke="#A78BFA" strokeWidth="2" />
      <path d="M16 4L8 12" stroke="#A78BFA" strokeWidth="2" />
      <path d="M8 6H4V16H14V12" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  )
}

function MoveActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 4H16V10" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M16 4L8 12" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M8 6H4V16H14V12" stroke="#C4B5FD" strokeWidth="2" />
    </svg>
  )
}

function DeleteInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#A78BFA" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  )
}

function DeleteActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#C4B5FD" strokeWidth="2" />
    </svg>
  )
}




*/

  return (
    <section className="w-full grid place-items-center py-4 px-[40px] m-0 z-30 bg-white text-black dark:bg-white dark:text-black font-inter border-[1px] border-[#eaecf0]">
      <section className="w-full">
        <section className="w-full mb-5 flex flex-row justify-between items-center">
          <section className="w-fit">
            <Link href="/">
              <Image src={Logo} alt="BeUnique" width={165} height={33} />
            </Link>
          </section>

          <section className="w-fit md:w-[70%] md2:w-[60%] flex flex-row items-center justify-between">
            <section className="w-[60%] text-[#667085] rounded-full border-[1px] border-[#667085] flex-row p-1 font-inter hidden md:flex bg-[#f2f4f7]">
              <SearchNormal1 size={25} className="" />
              <form onSubmit={() => handleSubmit()} className="w-[85%] ">
                <input
                  name="search"
                  type="search"
                  placeholder="Search"
                  value={searchInput ? searchInput : ""}
                  onChange={(e) => setSearchInput(e.target.value)}
                  className="w-full ml-4 placeholder-[#344054] placeholder:font-semibold placeholder:text-[14px] border-none outline-none hover:outline-none focus:outline-none bg-[#f2f4f7]"
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

        <section className="w-full flex flex-row flex-wrap items-start justify-start space-x-0 md:space-x-3 md2:space-x-6 text-[14px] font-semibold">
          {categories &&
            categories.map((cat) => (
              <Link
                href={cat.slug}
                className={`block w-fit px-4 py-[5px] md:px-0 md:py-1 ${
                  cat.active && "text-red-600"
                } hover:text-red-600`}
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
