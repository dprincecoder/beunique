import React from "react";
import Button from "../../../components/Button";
import InputField from "../../../components/InputField";
import flutterwavePng from "./assets/flutterwave.png";
import paystackPng from "./assets/paystack.png";
import "./contact.css";
const Contact = () => {
  return (
    <div className="contact">
      <div className="express-checkout">
        <h3>express checkout</h3>
        <div className="express-checkout-options">
          <img src={paystackPng} alt="paystack" />
          <img src={flutterwavePng} alt="flutterwave" />
        </div>
      </div>
      <div className="contant-information">
        <h3 className="h3-title">CONTACT INFORMATION</h3>
        <InputField placeholder="Email" />
        <h1 className="h1-title">SHIPPING ADDRESS</h1>
        <div className="two-inputs">
          <InputField placeholder="First Name" />
          <InputField placeholder="Last name" />
        </div>
        <InputField placeholder="Address" />
        <div className="two-inputs">
          <InputField placeholder="City" />
          <InputField placeholder="State" />
        </div>
        <InputField placeholder="Phone" />
      </div>
      <Button to="/auth/checkout/payment" text="Continue to Delivery" />
      <div className="optional">
        <p className="h3-title muted">DELIVERY METHOD</p>
        <p className="h3-title muted">PAYMENT METHOD</p>
      </div>
    </div>
  );
};

export default Contact;
