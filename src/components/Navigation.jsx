import { Menu, Transition } from "@headlessui/react";
import {
  Bag2,
  Eye,
  Heart,
  LogoutCurve,
  ProfileCircle,
  SearchNormal1,
} from "iconsax-react";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  toggleBagIsClosed,
  toggleBagIsOpen,
} from "../redux/features/bag/bagSlice";
import BagDropdown from "./BagDopdown";

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = location;
  const currUrlArr = pathname.split("/");
  const queryParams = new URLSearchParams(location.search);
  const type = queryParams.get("type");
  const { bag, bagIsOpen, bagIsClosed } = useSelector((state) => state.bag);

  const { token } = useSelector((state) => state.auth);

  const [searchInput, setSearchInput] = useState("");

  const [categories, setCategories] = useState(null);

  const currUrlRaw = location.pathname;
  const currUrl = currUrlArr[1] ? currUrlArr[1] : null;

  const logoutHandler = () => {
    localStorage.clear();
    sessionStorage.clear();
    navigate("/auth/signin");
  };

  useEffect(() => {
    if (typeof window !== undefined || typeof window !== null) {
      if (location.pathname) {
        setCategories([
          {
            id: 1,
            name: "New In",
            slug: "/products?type=new-in",
            active: type === "new-in" ? true : false,
          },
          {
            id: 2,
            name: "Short Dress",
            slug: "/products?type=short-dress",
            active: type === "short-dress" ? true : false,
          },
          {
            id: 3,
            name: "Long Dress",
            slug: "/products?type=long-dress",
            active: type === "long-dress" ? true : false,
          },
          {
            id: 4,
            name: "Two Piece",
            slug: "/products?type=two-piece",
            active: type === "two-piece" ? true : false,
          },
          {
            id: 5,
            name: "Gown",
            slug: "/products?type=gown",
            active: type === "gown" ? true : false,
          },
          {
            id: 6,
            name: "Jumpsuit",
            slug: "/products?type=jumpsuit",
            active: type === "jumpsuit" ? true : false,
          },
          {
            id: 7,
            name: "Playsuit",
            slug: "/products?type=playsuit",
            active: type === "playsuit" ? true : false,
          },
        ]);
      }
    }
  }, [location.state, type, location.pathname]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchInput !== "") {
      console.log(searchInput);
    }
  };

  return (
    <section className="w-full grid place-items-center py-4 px-[16px] md:px-[40px] m-0 z-30 bg-white text-black dark:bg-white dark:text-black font-inter border-[1px] border-[#eaecf0]">
      <section className="w-full">
        <section className="w-full mb-5 flex flex-row justify-between items-center">
          <section className="w-fit">
            <Link to="/">
              <img src="/logo.png" alt="BeUnique" width={165} height={33} />
            </Link>
          </section>

          <section className="w-fit md:w-[70%] md2:w-[60%] flex flex-row items-center justify-between">
            <section className="w-[60%] md:w-[57%] text-[#667085] rounded-full border-[1px] border-[#667085] flex-row p-1 font-inter hidden md:flex bg-[#f2f4f7]">
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

            <section className="w-fit block space-x-4 sm:space-x-6 lg:space-x-8">
              <section className="inline-block md:hidden align-middle">
                <SearchNormal1 size={20} className="" />
              </section>
              <section className="inline-block align-middle">
                <Link to="/viewed-items">
                  <Eye size={20} className="" />
                </Link>
              </section>
              <section className="inline-block align-middle">
                <Link to="/saved-items">
                  <Heart size={20} className="" />
                </Link>
              </section>

              <section
                className="relative inline-block align-middle text-left "
                id="outer_bag_container"
              >
                <section
                  className="p-0 m-0 mt-1 relative select-none"
                  id="inner_bag_container"
                  onClick={() => {
                    dispatch(toggleBagIsOpen(bagIsOpen));
                    dispatch(toggleBagIsClosed(bagIsClosed));
                  }}
                >
                  <Bag2 size={25} className="" id="inner_bag_container_icon" />

                  {bag.length > 0 && (
                    <span
                      className="absolute bottom-[-8px] right-[-8px] bg-black text-white w-[20px] h-[20px] rounded-full grid place-items-center text-[12px] select-none"
                      id="inner_bag_container_amt"
                    >
                      {bag.length}
                    </span>
                  )}
                </section>

                <BagDropdown />
              </section>

              {token ? (
                <Menu
                  as="section"
                  className="relative inline-block align-middle text-left"
                >
                  <Menu.Button className="p-0 m-0 mt-1">
                    <ProfileCircle size={25} className="" />
                  </Menu.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 mt-3 w-[120px] origin-top-right divide-y divide-gray-600 rounded-md bg-white shadow-md ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <section className="px-2 py-1 ">
                        <Menu.Item>
                          {({ active }) => (
                            <Link to="/account">
                              <button
                                className={`${
                                  active
                                    ? "bg-slate-200 text-black"
                                    : "text-[#344054]"
                                } group flex w-full items-center rounded-md px-2 py-2 text-[14px]`}
                              >
                                Account
                              </button>
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              type="button"
                              className="p-2 bg-[#fbe7e7] text-[#d2120f] font-medium hover:font-semibold text-[14px] rounded-lg focus:outline-none focus:ring-0 transition duration-300 ease-in-out flex align-center w-full mt-1"
                              onClick={() => {
                                logoutHandler();
                                router.reload(window.location.pathname);
                              }}
                            >
                              <LogoutCurve size={20} className="mr-3" />
                              Logout
                            </button>
                          )}
                        </Menu.Item>
                      </section>
                    </Menu.Items>
                  </Transition>
                </Menu>
              ) : (
                <Menu
                  as="section"
                  className="relative inline-block align-middle text-left"
                >
                  <Menu.Button className="p-0 m-0 mt-1">
                    <ProfileCircle size={25} className="" />
                  </Menu.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 mt-3 w-[120px] origin-top-right divide-y divide-gray-600 rounded-md bg-white shadow-md ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <section className="px-2 py-1 ">
                        <Menu.Item>
                          {({ active }) => (
                            <Link to="/auth/signin">
                              <button
                                className={`${
                                  active
                                    ? "bg-slate-200 text-black"
                                    : "text-[#344054]"
                                } group flex w-full items-center rounded-md px-2 py-2 text-[14px]`}
                              >
                                Sign In
                              </button>
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link to="/auth/signup">
                              <button
                                className={`${
                                  active
                                    ? "bg-slate-200 text-black"
                                    : "text-[#344054]"
                                } group flex w-full items-center rounded-md px-2 py-2 text-[14px]`}
                              >
                                Sign Up
                              </button>
                            </Link>
                          )}
                        </Menu.Item>
                      </section>
                    </Menu.Items>
                  </Transition>
                </Menu>
              )}
            </section>
          </section>
        </section>

        <section className="w-full flex flex-row flex-wrap items-start justify-start space-x-0 md:space-x-3 md2:space-x-6 text-[14px] font-semibold">
          {categories &&
            categories.map((cat) => (
              <Link
                to={cat.slug}
                className={`block w-fit pr-4 py-[5px] md:px-0 md:py-1 ${
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
