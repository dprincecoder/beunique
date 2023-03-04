import React from "react";
import Announcements from "./Announcements";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="w-full grid place-items-center p-0  m-0 z-30">
      <Announcements />
      <Navigation />
    </header>
  );
};

export default Header;
