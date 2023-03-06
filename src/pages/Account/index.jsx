import React from "react";
import { useLocation } from "react-router-dom";
import { Navigation } from "../../components";
import "./account.css";
import AccountOverview from "./AccountOverview";
import AddressBook from "./AddressBook";
import Orders from "./Orders";
import Saveditems from "./SavedItems";
import Security from "./Security";
import Sidebar from "./Sidebar";
import ViewedItems from "./ViewedItems";

const Account = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const type = query.get("type");
  const pagetoRender = () => {
    switch (type) {
      case "orders":
        return <Orders />;
      case "saved-items":
        return <Saveditems />;
      case "viewed-items":
        return <ViewedItems />;
      case "security":
        return <Security />;
      case "address-book":
        return <AddressBook />;
      default:
        return <AccountOverview />;
    }
  };

  return (
    <>
      <Navigation />
      <section className="account-page two-grid-item">
        <Sidebar />
        <div className="account-page-content">{pagetoRender()}</div>
      </section>
    </>
  );
};

export default Account;
