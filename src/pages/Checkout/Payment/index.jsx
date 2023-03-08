import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import InputField from "../../../components/InputField";
import ButtonRadio from "../../../components/Radios/ButtonRadio";
import RightSideCart from "../RightsideCart";
import checkedSvg from "./assets/checked.svg";
import flutterwavePng from "./assets/flutterwave.png";
import masterSvg from "./assets/master.svg";
import paystackPng from "./assets/paystack.png";
import verveSvg from "./assets/verve.svg";
import visaSvg from "./assets/visa.svg";
import "./payment.css";

const Payment = () => {
  const contactData = JSON.parse(localStorage.getItem("contact"));
  const deliveryData = JSON.parse(localStorage.getItem("delivery"));
  const [paymentMethod, setPaymentMethod] = useState("creditCard");

  const handlePaymentChange = (event) => {
    setPaymentMethod(event.target.value);
  };
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
                  Pickup Station - {deliveryData.pickupStation}
                </p>
              </div>
            </div>
            <div className="change-btn">
              <Link to="/checkout?next=contact-information">Change</Link>
            </div>
          </div>
          <div className="hr-all" />
          <form className="payment-container">
            <h1 className="h1-title">Payment Method</h1>
            <div className="payment-options">
              <div className="payment-option credit-card">
                <div className="card-checked">
                  <ButtonRadio
                    value="creditCard"
                    onChecked={paymentMethod === "creditCard"}
                    getCheckedEl={(e) => handlePaymentChange(e)}
                  />
                  <h3 className="h3-title">Credit Card</h3>
                </div>
                <p className="p-title">We accept all major cards</p>
                <div className="card-available">
                  <img src={visaSvg} alt="visa" />
                  <img src={masterSvg} alt="master" className="master-card" />
                  <img src={verveSvg} alt="verve" />
                </div>
              </div>
              <div className="payment-option">
                <InputField
                  type="number"
                  name="card-number"
                  placeholder="Card number"
                />
                <InputField
                  name="card-name"
                  type="text"
                  placeholder="Card name"
                />
                <div className="two-inputs">
                  <InputField
                    type="text"
                    name="expiry"
                    placeholder="Expiry date (MM/YY)"
                    className="mr-4"
                  />
                  <InputField name="cvv" type="number" placeholder="CVV" />
                </div>
              </div>
              <div className="payment-option">
                <div className="card-checked online-pay">
                  <ButtonRadio
                    value="paystack"
                    onChecked={paymentMethod === "paystack"}
                    getCheckedEl={(e) => handlePaymentChange(e)}
                  />
                  <img src={paystackPng} alt="paystack" />
                </div>
                <div className="card-checked online-pay">
                  <ButtonRadio
                    value="flutterwave"
                    onChecked={paymentMethod === "flutterwave"}
                    getCheckedEl={(e) => handlePaymentChange(e)}
                  />
                  <img src={flutterwavePng} alt="paystack" />
                </div>
              </div>
            </div>
            <div className="agreement">
              <div className="agreement-input">
                <input
                  type="checkbox"
                  name="agree"
                  id=""
                  className="agreement"
                />
                <p className="p-title">
                  Save my Information for a faster checkout
                </p>
              </div>
              <p className="h3-title">
                By submitting your order, you agree to our{" "}
                <Link to="/terms" className="underline">
                  {" "}
                  Terms of Service,
                </Link>{" "}
                <Link to="privacy" className="underline">
                  Privacy Policy,{" "}
                </Link>{" "}
                and{" "}
                <Link to="return-policy" className="underline">
                  {" "}
                  Returns Policy{" "}
                </Link>
              </p>
            </div>
            <div className="place-order">
              <Button text="Pay now" type="submit" />
            </div>
          </form>
        </div>
        <div className="right-side">
          <RightSideCart deliverytitle="₦0.00" />
        </div>
      </div>
    </div>
  );
};

export default Payment;
