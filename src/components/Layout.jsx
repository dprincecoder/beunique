import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  const location = useLocation();
  const HeaderShow =
    !location.pathname.includes("/auth") &&
    !location.pathname.includes("/admin");

  const useSessionStorage = (name) => {
    const [value, setValue] = useState("");

    useEffect(() => {
      setValue(sessionStorage.getItem(name));
    }, []);

    return value;
  };
  // dispatch(setToken(useSessionStorage("token")));

  return (
    <>
      <section className="bg-white dark:bg-white text-black dark:text-black w-[100%] min-w-[320px] overflow-hidden">
        {HeaderShow && <Header />}
        <main className="">{children}</main>
        {HeaderShow && <Footer />}
      </section>
    </>
  );
};

export default Layout;
