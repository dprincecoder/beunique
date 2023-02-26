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
  const [authtoken, setAuthtoken] = useState(null);
  const [isToken, setIsToken] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    if (typeof window !== null || typeof window !== "undefined") {
      if (window.localStorage.getItem("but")) {
        setAuthtoken(JSON.parse(window.localStorage.getItem("but")));
        setIsToken(true);

        if (isToken && authtoken) {
          setUserLoggedIn(true);
        }
      }
    }
  }, [userLoggedIn, isToken]);

  const logoutHandler = () => {
    window.localStorage.removeItem("but");
    setAuthtoken(null);
    setIsToken(false);
    setUserLoggedIn(false);
  };

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
        priceFormatter,
        authtoken,
        logoutHandler,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
