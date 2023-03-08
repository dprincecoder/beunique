import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import ButtonRadio from "../../../components/Radios/ButtonRadio";
import InputRadio from "../../../components/Radios/InputRadio";
import RightSideCart from "../RightsideCart";
import checkedSvg from "./assets/checked.svg";
import "./delivery.css";

const Delivery = () => {
  const navigate = useNavigate();
  const contactData = JSON.parse(localStorage.getItem("contact"));
  const [deliveryMethod, setDeliveryMethod] = useState("pickupDelivery");
  const [pickupStation, setPickupStation] = useState("lagos");

  const handleDeliveryChange = (event) => {
    setDeliveryMethod(event.target.value);
  };

  const handlePickupChange = (event) => {
    setPickupStation(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const deliveryData = {
      deliveryMethod,
      pickupStation,
    };
    if (deliveryMethod == "pickupDelivery") {
      localStorage.setItem("delivery", JSON.stringify(deliveryData));
      navigate("/auth/checkout?next=payment-method");
    } else {
      toast.error("Please select a pickup station");
    }
  };

  return (
    <div className="delivery custom-container">
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
          <div className="delivery-method">
            <form onSubmit={handleSubmit}>
              <h3 className="h1-title">Delivery Method</h3>
              <div className="inputs-radio">
                <InputRadio
                  title="Door Delivery"
                  value="doorDelivery"
                  name="deliveryMethod"
                  onChecked={deliveryMethod === "doorDelivery"}
                  getCheckedValue={(e) => handleDeliveryChange(e)}
                />
                <InputRadio
                  className="active"
                  title="Pickup Station"
                  name="deliveryMethod"
                  value="pickupDelivery"
                  onChecked={deliveryMethod === "pickupDelivery"}
                  getCheckedValue={(e) => handleDeliveryChange(e)}
                />
              </div>
              <div className="select-pickup">
                <p className="p-title">Select pick up station</p>
                <div className="radio-btns">
                  <div className="btn-hold">
                    <ButtonRadio
                      value="lagos"
                      onChecked={pickupStation === "lagos"}
                      getCheckedEl={(e) => handlePickupChange(e)}
                    />
                    <div className="radio-info">
                      <h3 className="h3-title">Lagos</h3>
                      <p className="p-title">
                        Address: 47, Beunique street, off lekki epe express way,
                        Lekki, Lagos, Nigeria
                      </p>
                    </div>
                  </div>
                  <div className="btn-hold">
                    <ButtonRadio
                      value="abuja"
                      onChecked={pickupStation === "abuja"}
                      getCheckedEl={(e) => handlePickupChange(e)}
                    />
                    <div className="radio-info">
                      <h3 className="h3-title">Abuja</h3>
                      <p className="p-title">
                        Address: 47, Beunique street, off lekki epe express way,
                        Lekki, Abuja, Nigeria
                      </p>
                    </div>
                  </div>
                </div>
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
              <p className="h1-title text-muted">PAYMENT METHOD</p>
            </div>
          </div>
        </div>
        <div className="right-side">
          <RightSideCart deliverytitle="₦0.00" />
        </div>
      </div>
    </div>
  );
};

export default Delivery;
