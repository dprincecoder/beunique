import React from "react";

const Layout = ({ children }) => {
  return (
    <section className="bg-white dark:bg-white text-black dark:text-black w-[100%] min-w-[320px] overflow-hidden">
      
      <main className="">{children}</main>
      
    </section>
  );
};

export default Layout;
