import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <section className="bg-white dark:bg-white text-black dark:text-black w-[100%] min-w-[320px] max-w-[1440px] overflow-hidden">
      <Header />
      <main className="">{children}</main>
      <Footer />
    </section>
  );
};

export default Layout;
