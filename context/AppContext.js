import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  useReducer,
} from "react";
// import {Cookies} from "js-cookie";

// import Cookies from "js-cookie";

// import { globalReducer, productFilterReducer } from "./Reducers";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [salesTimerOn, setSalesTimerOn] = useState(true);
  const [isHomeSearchOpen, setIsHomeSearchOpen] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  // const [globalState, globalDispatch] = useReducer(globalReducer, [], () => ({
  //   cart: Cookies.get("cartItems") ? JSON.parse(Cookies.get("cartItems")) : [],
  //   savedItems: Cookies.get("savedItems")
  //     ? JSON.parse(Cookies.get("savedItems"))
  //     : [],
  //   viewedItems: Cookies.get("viewedItems")
  //     ? JSON.parse(Cookies.get("viewedItems"))
  //     : [],
  // }));

  // const { cart, savedItems, viewedItems } = globalState;

  const priceFormatter = (price) => {
    return price
      ? price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ", ")
      : "0".replace(/\B(?=(\d{3})+(?!\d))/g, ", ");
  };

  // CART FUNCTIONS
  // const addToCart = async (product) => {
  //   const existItem = cart.find((x) => x.id === product.id);
  //   const qty = existItem ? existItem.qty + 1 : 1;
  //   // const  data  = await fetch(
  //   //   `https://domain.com/api/products/${product.id}`
  //   // );
  //   globalDispatch({
  //     type: "ADD_TO_CART",
  //     payload: {
  //       id: product.id,
  //       name: product.name,
  //       slug: product.slug,
  //       price: product.price,
  //       image: product.image,
  //       qty: qty,
  //       size: size,
  //     },
  //   });
  // };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        setIsSidebarOpen,
        salesTimerOn,
        setSalesTimerOn,
        isHomeSearchOpen,
        setIsHomeSearchOpen,
        userInfo,
        setUserInfo,
        userLoggedIn,
        setUserLoggedIn,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
