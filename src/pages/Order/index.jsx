import React from "react";
import { useSelector } from "react-redux";
import Button from "../../components/Button/index";
import "./order.css";

const Order = () => {
  const { cart } = useSelector((state) => state.cartItems);
  return (
    <div className="order">
      <h1 className="h1-title text-center size-big">Order Successful </h1>
      <div className="order-container">
        <div className="order-txt">
          <p className="p-title text-center">
            Thanks you for shopping on Beunique!
          </p>
          <p className="p-title text-center mt-4">
            Your order 2367890 has been confirmed successfully.{" "}
          </p>
          <p className="p-title text-center mt-4">
            It will be packed and shipped as soon as possible. You will receive
            a notification from us once the item(s) are available for door
            delivery or collection from your selected Pick-up station.
          </p>
        </div>
        <div className="order-direction-wrap">
          <div className="order-direction">
            <div className="dir">
              <div className="dir-box-filled h1-title">
                Estimated Delivery Date
              </div>
              <div className="dir-box-light p-title">
                Between 09 July 2022 - 10 July 2022
              </div>
            </div>
            <div className="dir">
              <div className="dir-box-filled h1-title">Delivery method</div>
              <div className="dir-box-light p-title">
                Pick Up Station - Lagos
              </div>
            </div>
          </div>
          <div className="order-direction">
            <div className="dir">
              <div className="dir-box-filled h1-title">Recipient Details</div>
              <div className="dir-box-light p-title">
                Bequnique - 09873645671
              </div>
            </div>
            <div className="dir">
              <div className="dir-box-filled h1-title">Delivery Address</div>
              <div className="dir-box-light p-title">Beunique store, Lagos</div>
            </div>
          </div>
        </div>
        <div className="order-items">
          <h1 className="h1-title">Your Order</h1>
          {cart.map((item) => (
            <div className="order-item" key={item.id}>
              <div className="order-item-img">
                <img src={item.img} alt="" />
              </div>
              <div className="order-item-details">
                <div className="order-item-list">
                  <h3 className="h1-title">Item</h3>
                  <p className="p-title">{item.name}</p>
                </div>
                <div className="order-item-list">
                  <h3 className="h1-title">Quantity</h3>
                  <p className="p-title">{item.quantity}</p>
                </div>
                <div className="order-item-list">
                  <h3 className="h1-title">Price</h3>
                  <p className="p-title">{item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="hr-all" />
        <div className="shipping-vat">
          <div className="shipping">
            <h3 className="h1-title">Shipping cost</h3>
            <p className="p-title">₦ 0.00</p>
          </div>
          <div className="shipping">
            <h3 className="h1-title">VAT</h3>
            <p className="p-title">₦ 0.00</p>
          </div>
          <div className="shipping">
            <h1 className="h1-title">Total</h1>
            <h3 className="h3-title">₦ 0.00</h3>
          </div>
          <div className="shipping">
            <h3 className="h1-title">Payment Method</h3>
            <p className="p-title">Card Transfer</p>
          </div>
        </div>
        <div className="thankyou">
          <p className="p-title">Thank you for shopping with us.</p>
          <p className="p-title">Warm regards</p>
        </div>
        <div className="download-pdf">
          <Button text="Download" />
        </div>
      </div>
    </div>
  );
};

export default Order;
