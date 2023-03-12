import React from "react";
import { useSelector } from "react-redux";
import "./savedItem.css";

const SavedItems = () => {
  const { cart } = useSelector((state) => state.cartItems);
  return (
    <div className="account-savedItems-page">
      <h1 className="p-title">Saved Items</h1>
      {cart.map((order) => (
        <div className="account-savedItems" key={order.id}>
          <div className="account-savedItems-items">
            <div className="account-savedItems-item-img">
              <img src={order.img} alt="account-savedItems-item" />
            </div>
            <div className="account-savedItems-item-info">
              <h3 className="account-savedItems-item-name">{order.name}</h3>
            </div>
          </div>
          <div className="account-savedItems-link">
            <a href="">See details</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SavedItems;
