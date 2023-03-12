import React from "react";
import { useSelector } from "react-redux";
import "./orders.css";

const Orders = () => {
  const { cart } = useSelector((state) => state.cartItems);
  return (
    <div className="account-orders-page">
      <h1 className="p-title">Orders</h1>
      {cart.map((order) => (
        <div className="account-orders" key={order.id}>
          <div className="account-order-items">
            <div className="account-order-item-img">
              <img src={order.img} alt="account-order-item" />
            </div>
            <div className="account-order-item-info">
              <h3 className="account-order-item-name">{order.name}</h3>
              <p className="account-order-item-price p-title">
                Order 274683984
              </p>
              <div className="account-order-item-status order-delivered">
                <p className="p-title">Deliverd</p>
              </div>
              <h3 className="h3-title">On 21-01-23</h3>
            </div>
          </div>
          <div className="account-order-link">
            <a href="/account/orders">See details</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Orders;
