import React from "react";
import { useLocation } from "react-router-dom";
import "./checkout.css";
import Contact from "./Contact";
import Delivery from "./Delivery";
import Payment from "./Payment";

const Checkout = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const next = query.get("next");
  const componentToRender = () => {
    switch (next) {
      case "contact-information":
        return <Contact />;
      case "delivery-information":
        return <Delivery />;
      case "payment-method":
        return <Payment />;
      default:
        return <Contact />;
    }
  };
  return <div className="checkout">{componentToRender()}</div>;
};

export default Checkout;
