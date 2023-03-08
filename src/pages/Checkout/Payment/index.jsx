import React from "react";
import { Link } from "react-router-dom";
import RightSideCart from "../RightsideCart";
import checkedSvg from "./assets/checked.svg";

const Payment = () => {
  const contactData = JSON.parse(localStorage.getItem("contact"));
  const deliveryData = JSON.parse(localStorage.getItem("delivery"));
  return (
    <div className="payment custom-container">
      <h1 className="h1-title">Checkout</h1>
      <div className="grid-container">
        <div className="left-side">
          <div className="head-contact-info">
            <div className="the-info">
              <img src={checkedSvg} alt="checked" />
              <div className="info">
                <h3 className="h1-title">Contact Information</h3>
                <p className="p-title">{contactData.email}</p>
              </div>
            </div>
            <div className="change-btn">
              <Link to="/checkout?next=contact-information">Change</Link>
            </div>
          </div>
          <div className="hr-all" />
          <div className="head-contact-info">
            <div className="the-info">
              <img src={checkedSvg} alt="checked" />
              <div className="info">
                <h3 className="h1-title">Ship To</h3>
                <p className="p-title">{contactData.address}</p>
              </div>
            </div>
            <div className="change-btn">
              <Link to="/checkout?next=contact-information">Change</Link>
            </div>
          </div>
          <div className="hr-all" />
          <div className="head-contact-info">
            <div className="the-info">
              <img src={checkedSvg} alt="checked" />
              <div className="info">
                <h3 className="h1-title">DELIVERY METHOD</h3>
                <p className="p-title">
                  Pickup Station {deliveryData.pickupStation}
                </p>
              </div>
            </div>
            <div className="change-btn">
              <Link to="/checkout?next=contact-information">Change</Link>
            </div>
          </div>
        </div>
        <div className="right-side">
          <RightSideCart />
        </div>
      </div>
    </div>
  );
};

export default Payment;
