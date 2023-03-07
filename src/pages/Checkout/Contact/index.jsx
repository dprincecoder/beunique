import React from "react";
import Button from "../../../components/Button";
import InputField from "../../../components/InputField";
import flutterwavePng from "./assets/flutterwave.png";
import paystackPng from "./assets/paystack.png";
import "./contact.css";
const Contact = () => {
  return (
    <div className="contact">
      <div className="left-side">
        <div className="bag-express-payment w-[300px]">
          <h3 className="h3-title text-center">Express checkout</h3>
          <div className="bag-payment-options">
            <div className="bag-payment-option">
              <img src={paystackPng} alt="paystack" />
            </div>
            <div className="bag-payment-option">
              <img src={flutterwavePng} alt="flutterwave" />
            </div>
          </div>
        </div>
        <div className="contant-information">
          <h3 className="h1-title">CONTACT INFORMATION</h3>
          <InputField placeholder="Email" type="text" />
          <h1 className="h1-title">SHIPPING ADDRESS</h1>
          <div className="two-inputs">
            <InputField placeholder="First Name" className="mr-4" />
            <InputField placeholder="Last name" type="text" />
          </div>
          <InputField placeholder="Address" />
          <InputField placeholder="Country/Region" type="text" />
          <div className="two-inputs">
            <InputField placeholder="City" className="mr-4" type="text" />
            <InputField placeholder="State" />
          </div>
          <InputField placeholder="Phone" type="number" />
        </div>
        <Button to="/auth/checkout/payment" text="Continue to Delivery" />
        <div className="hr-all" />
        <div className="optional">
          <p className="h1-title text-muted">DELIVERY METHOD</p>
          <div className="hr-all" />
          <p className="h1-title text-muted">PAYMENT METHOD</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
