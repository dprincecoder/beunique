import React from "react";
import { Link } from "react-router-dom";
import RightSideCart from "../RightsideCart";
import checkedSvg from "./assets/checked.svg";
import "./delivery.css";

const Delivery = () => {
  const jsonData = JSON.parse(localStorage.getItem("contact"));
  return (
    <div className="delivery container">
      <div className="grid-container">
        <div className="left-side">
          <div className="head-contact-info">
            <div className="the-info">
              <img src={checkedSvg} alt="checked" />
              <div className="info">
                <h3 className="h1-title">Contact Information</h3>
                <p className="p-title">{jsonData.email}</p>
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
                <p className="p-title">{jsonData.address}</p>
              </div>
            </div>
            <div className="change-btn">
              <Link to="/checkout?next=contact-information">Change</Link>
            </div>
          </div>
          <div className="hr-all" />
        </div>
        <div className="right-side">
          <RightSideCart />
        </div>
      </div>
    </div>
  );
};

export default Delivery;
