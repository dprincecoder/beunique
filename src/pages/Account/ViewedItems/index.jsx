import React from "react";
import { useSelector } from "react-redux";
import "./viewedItems.css";

const ViewedItems = () => {
  const { cart } = useSelector((state) => state.cartItems);
  return (
    <div className="account-viewedItems-page">
      <h1 className="p-title">Viewed Items</h1>
      {cart.map((order) => (
        <div className="account-viewedItems" key={order.id}>
          <div className="account-viewedItems-items">
            <div className="account-viewedItems-item-img">
              <img src={order.img} alt="account-viewedItems-item" />
            </div>
            <div className="account-viewedItems-item-info">
              <h3 className="account-viewedItems-item-name">{order.name}</h3>
            </div>
          </div>
          <div className="account-viewedItems-link">
            <a href="">See details</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ViewedItems;
