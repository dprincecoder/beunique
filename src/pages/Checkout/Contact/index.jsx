import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import InputField from "../../../components/InputField";
import flutterwavePng from "./assets/flutterwave.png";
import paystackPng from "./assets/paystack.png";
import "./contact.css";
const Contact = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [phone, setPhone] = useState("");

  const getTypingValue = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "address":
        setAddress(value);
        break;
      case "country":
        setCountry(value);
        break;
      case "city":
        setCity(value);
        break;
      case "state":
        setState(value);
        break;
      case "phone":
        setPhone(value);
        break;
      default:
        break;
    }
  };
  const navigate = useNavigate();
  const handleSubmission = (e) => {
    e.preventDefault();
    if (
      !email ||
      !firstName ||
      !lastName ||
      !address ||
      !country ||
      !city ||
      !state ||
      !phone
    ) {
      return toast.error("Please fill all fields");
    } else {
      const jsonData = {
        email,
        firstName,
        lastName,
        address,
        country,
        city,
        state,
        phone,
      };
      const json = JSON.stringify(jsonData);
      localStorage.setItem("contact", json);
      navigate("/auth/checkout?next=delivery-information");
    }
  };
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
        <form onSubmit={handleSubmission}>
          <div className="contant-information">
            <h3 className="h1-title">CONTACT INFORMATION</h3>
            <InputField
              placeholder="Email"
              type="text"
              inputValue={email}
              name="email"
              getValue={(e) => getTypingValue(e)}
            />
            <h1 className="h1-title">SHIPPING ADDRESS</h1>
            <div className="two-inputs">
              <InputField
                placeholder="First Name"
                className="mr-4"
                inputValue={firstName}
                name="firstName"
                getValue={(e) => getTypingValue(e)}
              />
              <InputField
                placeholder="Last name"
                type="text"
                inputValue={lastName}
                name="lastName"
                getValue={(e) => getTypingValue(e)}
              />
            </div>
            <InputField
              placeholder="Address"
              inputValue={address}
              name="address"
              getValue={(e) => getTypingValue(e)}
            />
            <InputField
              placeholder="Country/Region"
              type="text"
              inputValue={country}
              name="country"
              getValue={(e) => getTypingValue(e)}
            />
            <div className="two-inputs">
              <InputField
                placeholder="City"
                className="mr-4"
                type="text"
                inputValue={city}
                name="city"
                getValue={(e) => getTypingValue(e)}
              />
              <InputField
                placeholder="State"
                inputValue={state}
                name="state"
                getValue={(e) => getTypingValue(e)}
              />
            </div>
            <InputField
              placeholder="+23470742978473"
              type="number"
              inputValue={phone}
              name="phone"
              getValue={(e) => getTypingValue(e)}
            />
          </div>
          <Button
            // onClick={handleSubmission}
            type="submit"
            // to="/auth/checkout?next=delivery-information"
            text="Continue to Delivery"
          />
        </form>
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
