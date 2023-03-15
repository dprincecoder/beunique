// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// // import {
// //   decrementQuantity,
// //   incrementQuantity,
// //   removeItem,
// // } from "../../redux/features/cart/cartslice";
// import add from "./assets/Add.png";
// // import editPen from "./assets/edit-pen.svg";
// import flutterwavePng from "./assets/flutterwave.png";
// import payStackPng from "./assets/paystack.png";
// import trash from "./assets/trash.png";
// import "./mybag.css";

// const MyBag = () => {
//   const { cart } = useSelector((state) => state.cartItems);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
//   const price = cart.reduce((total, item) => {
//     const priceWithoutComma = item.price.replace(",", "");
//     return total + Number(priceWithoutComma);
//   }, 0);
//   const totalCost = price * totalItems;

//   const handleIncrement = (id) => {
//     console.log(id);
//     // dispatch(incrementQuantity(id));
//   };
//   const handleDecrement = (id) => {
//     console.log(id);
//     // dispatch(decrementQuantity(id));
//   };
//   const handleRemove = (id) => {
//     console.log(id);
//     // dispatch(removeItem(id));
//   };

//   useEffect(() => {
//     if (cart.length === 0) {
//       navigate("/");
//     }

//     return () => {
//       // cleanup
//     };
//   }, [cart]);

//   return (
//     <div className="my-bag-page">
//       <div className="bag-directional-link">
//         <Link to="/">Home</Link>
//         <span> {">"} </span>
//         <p className="h3-title">My Bag</p>
//       </div>
//       <div className="my-bag-page__content">
//         <h2 className="h1-title">My Bag</h2>
//         <div className="bag-grid">
//           {cart.map((item) => (
//             <div className="bag-item" key={item.id}>
//               <div className="bag-item__image">
//                 <img src={item.img} alt={item.name} />
//               </div>
//               <div className="bag-item__details">
//                 <p className="p-title">{item.name}</p>
//                 <p className="h1-title">₦{item.price}</p>
//                 <div className="bag-item__size_edit">
//                   <div className="bag-item__size">
//                     <p className="h3-title">{item.selectedSize}</p>
//                   </div>
//                   {/* <img src={editPen} alt="edit" /> */}
//                 </div>
//                 <div className="bag-item__quantity">
//                   <div
//                     className="h1-title decrement"
//                     onClick={() => handleDecrement(item.id)}
//                   >
//                     -
//                   </div>
//                   <p className="h3-title">Qty: {item.quantity}</p>
//                   <div
//                     className="increment"
//                     onClick={() => handleIncrement(item.id)}
//                   >
//                     <img src={add} alt="add" />
//                   </div>
//                 </div>
//                 <div
//                   className="bag-item__remove"
//                   onClick={() => handleRemove(item.id)}
//                 >
//                   <img src={trash} alt="edit" />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="bag-checkout-wrap">
//         <div className="bag-checkout">
//           <div className="bag-calculate">
//             <div className="bag-items">
//               <p className="h3-title">{totalItems} Item(s)</p>
//               <h2 className="h3-title">₦{price}</h2>
//             </div>
//             <div className="bag-subtotal">
//               <p className="h3-title">Subtotal:</p>
//               <h2 className="h1-title">₦{totalCost}</h2>
//             </div>
//             <Link
//               to="/auth/checkout?next=contact-information"
//               className="bag-checkout-button"
//             >
//               <button>Checkout</button>
//             </Link>
//           </div>
//           <div className="bag-express-payment">
//             <p>Express payment options at checkout</p>
//             <div className="bag-payment-options">
//               <div className="bag-payment-option">
//                 <img src={payStackPng} alt="paystack" />
//               </div>
//               <div className="bag-payment-option">
//                 <img src={flutterwavePng} alt="flutterwave" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyBag;

import { Add, ArrowRight2, Minus } from "iconsax-react";
import React from "react";
import { TbPencil } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { NewStockSlider } from "../../components";
import { ProductTypes } from "../../data/ProductTypes";
import { decreaseQty, increaseQty } from "../../redux/features/bag/bagSlice";
import getTotal from "../../utils/bagUtils";
import priceFormatter from "../../utils/priceFormatter";
import flutterwaveLogo from "./assets/flutterwave.png";
import paystackLogo from "./assets/paystack.png";

const Bag = () => {
  const router = useNavigate();
  const dispatch = useDispatch();

  const path = router.location.pathname;

  const { bag, bagIsOpen, bagIsClosed } = useSelector((state) => state.bag);

  // https://beunique.vercel.app/p?type=short-dress&item=cameringo

  return (
    <>
      <section className="w-full flex flex-col items-center justify-center p-0 px-[16px] md:px-[40px] m-0 z-30 font-inter scrollbar scrollbar-track-[#ACB2BE] scrollbar-thumb-black scrollbar-corner-red-500 scrollbar-w-4 scrollbar-track-rounded-md scrollbar-thumb-rounded-md scrollbar-corner-rounded-md">
        <section className="w-full mx-auto bg-white dark:bg-white">
          <section className="flex items-center justify-start my-4 space-x-2">
            <span className="font-inter text-[14px] text-[#34405]">
              <Link to="/">Home</Link>
            </span>
            <ArrowRight2 variant="Linear" size={16} className="" />
            <span className="font-inter text-[14px] text-black font-medium">
              <p>{ProductTypes[path]}</p>
            </span>
          </section>

          <section className="w-full grid place-items-center">
            <h3 className="text-[30px] font-anybody font-bold">My Bag</h3>

            <section className="w-full md:w-[80%] lg2:w-[70%] mx-auto flex flex-wrap items-start justify-between mt-[62px] mb-7 space-y-14 md:space-y-0">
              <section className="w-full md:w-[47%] flex flex-col items-center justify-center">
                {bag.length > 0 ? (
                  <section className="space-y-3 w-full">
                    {bag.map((item) => (
                      <section
                        key={item.id}
                        className="flex items-start justify-start w-full space-x-3"
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
                            <p className="font-inter font-medium text-[16px] text-[#344054]">
                              {item.name}
                            </p>
                            <h3 className="font-inter text-[18px] text-black font-bold">
                              {priceFormatter(item.price)}
                            </h3>

                            <section className="flex items-center justify-start space-x-2">
                              <span className="w-[32px] h-[32px] bg-black rounded-full grid place-items-center text-[16px] text-white">
                                {item.size}
                              </span>

                              <Link
                                to={`/p?type=${item.category_slug}&item=${item.item_slug}`}
                              >
                                <TbPencil size={18} />
                              </Link>
                            </section>
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
                  <h3 className="w-full text-center font-bold text-[20px]">
                    Your bag is empty
                  </h3>
                )}
              </section>

              <section className="w-full md:w-[47%] flex flex-col items-center justify-center relative space-y-8">
                <section className="w-full bg-[#f9fafb] border-[1px] border-[#f2f4f7 px-3 py-4">
                  <section className="w-full flex items-center justify-between text-[16px] border-b-[1px] border-b-[#eaecf0] py-2 font-medium">
                    <span className="">No. of Items</span>{" "}
                    <span>{bag.length}</span>
                  </section>

                  <section className="w-full flex items-center justify-between text-[18px] py-4 mb-4">
                    <span className="font-medium">Subtotal</span>{" "}
                    <span className="text-[18px] font-bold">
                      {priceFormatter(getTotal(bag).totalPrice)}
                    </span>
                  </section>

                  <Link to="/checkout" className="">
                    <button
                      type="button"
                      className="px-6 py-4 bg-[#101828] text-[#fcfcfd] font-medium hover:font-semibold text-[18px] rounded-lg focus:outline-none focus:ring-0 transition duration-300 ease-in-out flex items-center justify-center text-center align-center w-full"
                    >
                      Checkout
                    </button>
                  </Link>
                </section>

                <section className="w-full flex flex-col items-center text-center space-y-3">
                  <p className="text-[14px] ">
                    Express payment options at checkout
                  </p>
                  <section className="w-[70%] flex items-center justify-center space-x-2">
                    <img
                      src={paystackLogo}
                      width={92}
                      height={24}
                      alt="Paystack"
                      loading="lazy"
                      className="w-[92px] h-[24px] mr-3"
                    />
                    <img
                      src={flutterwaveLogo}
                      width={100}
                      height={24}
                      alt="Flutterwave"
                      loading="lazy"
                      className="w-[100px] h-[24px] mr-3"
                    />
                  </section>
                </section>
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

export default Bag;
