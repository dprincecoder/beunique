import { Add, Minus } from "iconsax-react";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  decreaseQty,
  increaseQty,
  toggleBagIsClosed,
  toggleBagIsOpen,
} from "../redux/features/bag/bagSlice";
import getTotal from "../utils/bagUtils";
import priceFormatter from "../utils/priceFormatter";

const BagDropdown = () => {
  const dispatch = useDispatch();
  const naviagte = useNavigate();

  const { bag, bagIsOpen, bagIsClosed } = useSelector((state) => state.bag);

  const ref = useRef(null);

  const onClickOutside = () => {
    dispatch(toggleBagIsOpen(bagIsOpen));
    dispatch(toggleBagIsClosed(bagIsClosed));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const isTarget =
        event.target.id === "inner_bag_container_icon"
          ? true
          : event.target.id === "inner_bag_container_amt"
          ? true
          : false;

      const isTarget2 =
        event.target.id === "viewbag_btn"
          ? true
          : event.target.id === "checkout_btn"
          ? true
          : false;

      if (isTarget) {
        console.log("Target");
      } else if (event.target.id === "viewbag_btn") {
        onClickOutside && onClickOutside();
        naviagte("/bag");
      } else if (event.target.id === "checkout_btn") {
        onClickOutside && onClickOutside();
        naviagte("/checkout");
      } else {
        if (ref.current && !ref.current.contains(event.target)) {
          onClickOutside && onClickOutside();
        }
      }
    };

    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [bagIsOpen, bagIsClosed]);

  if (!bagIsOpen || !bagIsClosed) return null;

  return (
    <section
      ref={ref}
      className={`absolute -right-[55px] mt-3 w-[400px] origin-center rounded-md bg-[#f9fafb] shadow-sm ring-1 ring-black ring-opacity-5 focus:outline-none `}
    >
      <section
        className={`text-[#344054] flex flex-col w-[100%] items-start justify-center rounded-sm text-[16px] z-50 `}
      >
        <section className="px-4 pt-8 text-[16px] font-bold font-inter text-black">
          Total:{" "}
          <span className="text-[22px]">
            {priceFormatter(getTotal(bag).totalPrice)}
          </span>
        </section>

        <section className="px-4 pt-6 text-[16px] font-bold font-inter text-black flex items-center justify-center space-x-6">
          <button
            type="button"
            className=" px-6 py-2.5 bg-white text-[#101828] font-medium hover:font-semibold text-[16px] rounded-lg focus:outline-none focus:ring-0 transition duration-300 ease-in-out flex align-center w-[151px] border-[1px] border-[#d0d5dd]"
            id="viewbag_btn"
          >
            View Bag ({bag.length})
          </button>
          <button
            type="button"
            className=" px-6 py-2.5 bg-[#101828] text-[#fcfcfd] font-medium hover:font-semibold text-[16px] rounded-lg focus:outline-none focus:ring-0 transition duration-300 ease-in-out flex align-center w-[120px]"
            id="checkout_btn"
          >
            Checkout
          </button>
        </section>
      </section>

      <section className="bg-white w-[100%] px-4 py-6 mt-4">
        {bag.length > 0 ? (
          <section className="space-y-3">
            {bag.map((item) => (
              <section
                key={item.id}
                className="flex items-start justify-center w-full"
              >
                <img
                  src={item.image}
                  width={128}
                  height={172}
                  alt={item.name}
                  loading="lazy"
                  className="w-[128px] h-[172px] mr-3"
                />

                <section className="w-[100%] flex flex-col h-[172px] relative">
                  <section className="w-[100%] flex flex-col items-start space-y-4">
                    <p className="font-inter text-[16px] text-[#344054]">
                      {item.name}
                    </p>
                    <h3 className="font-inter text-[18px] text-black font-bold">
                      {priceFormatter(item.price)}
                    </h3>
                    <span className="w-[32px] h-[32px] bg-black rounded-full grid place-items-center text-[16px] text-white">
                      {item.size}
                    </span>
                  </section>

                  <section className="w-full flex items-start justify-start space-x-3 absolute bottom-0 left-0">
                    <span
                      className="w-[24px] h-[24px] grid place-items-center rounded-full"
                      onClick={() => dispatch(decreaseQty(item.id))}
                    >
                      <Minus size="18" color="#000000" />
                    </span>
                    <span className="">{item.qty}</span>
                    <span
                      className="w-[24px] h-[24px] grid place-items-center rounded-full"
                      onClick={() => dispatch(increaseQty(item.id))}
                    >
                      <Add size="18" color="#000000" />
                    </span>
                  </section>
                </section>
              </section>
            ))}
          </section>
        ) : (
          <h3 className="w-full text-center font-bold text-[16px]">
            Your bag is empty
          </h3>
        )}
      </section>
    </section>
  );
};

export default BagDropdown;
