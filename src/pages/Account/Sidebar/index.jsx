import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import accountSvg from "./assets/account.svg";
import addressBookSvg from "./assets/address-book.svg";
import logoutSvg from "./assets/logout.svg";
import orderSvg from "./assets/orders.svg";
import saveItemSvg from "./assets/savedItems.svg";
import securitySvg from "./assets/security.svg";
import viewedItemSvg from "./assets/viewedItems.svg";
import "./sidebar.css";

const sidebar_list1 = [
  { name: "My Account", link: "/auth/account", icon: accountSvg, active: true },
  {
    name: "Orders",
    link: "/auth/account?type=orders",
    icon: orderSvg,
    active: false,
  },
  {
    name: "Save Items",
    link: "/auth/account?type=saved-items",
    icon: saveItemSvg,
    active: false,
  },
  {
    name: "Viewed items",
    link: "/auth/account?type=viewed-items",
    icon: viewedItemSvg,
    active: false,
  },
];
const sidebar_list2 = [
  {
    name: "Security",
    link: "/auth/account?type=security",
    icon: securitySvg,
    active: false,
  },
  {
    name: "Address Book",
    link: "/auth/account?type=address-book",
    icon: addressBookSvg,
    active: false,
  },
];

const Sidebar = () => {
  const [sidebarList1, setSidebarList1] = useState(sidebar_list1);
  const [sidebar1IsActive, setSidebar1IsActive] = useState(true);
  const [sidebarList2, setSidebarList2] = useState(sidebar_list2);
  const [sidebar2IsActive, setSidebar2IsActive] = useState(false);
  const [toggleSidebar, setToggleSidebar] = useState(false);

  const toggleActive1 = (index) => {
    const newList = sidebarList1.map((item, i) => {
      if (i === index) {
        return { ...item, active: true };
      } else {
        return { ...item, active: false };
      }
    });
    setSidebarList1(newList);
    setSidebar2IsActive(false);
    setSidebar1IsActive(true);
    setToggleSidebar(false);
  };

  const toggleActive2 = (index) => {
    const newList = sidebarList2.map((item, i) => {
      if (i === index) {
        return { ...item, active: true };
      } else {
        return { ...item, active: false };
      }
    });
    setSidebarList2(newList);
    setSidebar1IsActive(false);
    setSidebar2IsActive(true);
    setToggleSidebar(false);
  };

  return (
    <div
      className={`account-sidebar-wrap ${toggleSidebar ? "showSidebar" : ""}`}
    >
      <div className="account-sidebar-header">
        <RxHamburgerMenu onClick={() => setToggleSidebar(!toggleSidebar)} />
        <h3 className="account-sidebar-header-title">My Account</h3>
      </div>
      <section className="account-sidebar">
        <ul className="account-sidebar-list">
          {sidebarList1.map((item, index) => {
            return (
              <Link
                to={item.link}
                key={index}
                className={`account-sidebar-list-item ${
                  sidebar1IsActive && item.active ? "isActive" : ""
                }`}
                onClick={() => toggleActive1(index)}
              >
                <img src={item.icon} alt={item.name} />
                <p className="account-sidebar-list-item-link">{item.name}</p>
              </Link>
            );
          })}
        </ul>
        <div className="hr" />
        <ul className="account-sidebar-list">
          {sidebarList2.map((item, index) => {
            return (
              <Link
                to={item.link}
                key={index}
                className={`account-sidebar-list-item ${
                  sidebar2IsActive && item.active ? "isActive" : ""
                }`}
                onClick={() => toggleActive2(index)}
              >
                <img src={item.icon} alt={item.name} />
                <p className="account-sidebar-list-item-link">{item.name}</p>
              </Link>
            );
          })}
        </ul>
        <div className="logout-btn">
          <img src={logoutSvg} alt="logout" />
          <button className="btn btn-primary">Logout</button>
        </div>
      </section>
    </div>
  );
};

export default Sidebar;
