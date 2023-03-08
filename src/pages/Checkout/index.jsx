import React from "react";
import { useLocation } from "react-router-dom";
import "./checkout.css";
import Contact from "./Contact";
import Delivery from "./Delivery";
import Payment from "./Payment";
import RightSideCart from "./RightsideCart";

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
  return (
    <div className="checkout">
      <h1 className="h1-title2">Checkout</h1>
      <div className="checkout-process">
        <div className="left-side">{componentToRender()}</div>
        <div className="contact-right">
          <RightSideCart />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
