import React from "react";
import { useSelector } from "react-redux";
import "./rightsidecart.css";

const RightSideCart = ({ deliverytitle }) => {
  const { cart } = useSelector((state) => state.cartItems);

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const price = cart.reduce((total, item) => {
    const priceWithoutComma = item.price.replace(",", "");
    return total + Number(priceWithoutComma);
  }, 0);
  const totalCost = price * totalItems;
  const firstCartItem = cart.slice(0, 1);
  return (
    <div className="right-side">
      <div className="bag-calculate">
        <div className="bag-items">
          <p className="p-title">{totalItems} Item(s)</p>
          <h2 className="h3-title">₦{price}</h2>
        </div>
        <div className="bag-items">
          <p className="p-title">Delivery</p>
          <h2 className="h3-title">
            {" "}
            {deliverytitle ? deliverytitle : "Calculated at next stage"}
          </h2>
        </div>
        <div className="bag-subtotal">
          <p className="h3-title">Total:</p>
          <h2 className="h1-title">₦{totalCost}</h2>
        </div>
      </div>
      <div className="rightside-mini-cart">
        {firstCartItem.map((item) => (
          <div className="mini-cart-item" key={item.id}>
            <div className="mini-cart-item__image">
              <img src={item.img} alt={item.name} />
            </div>
            <div className="mini-cart-item__details">
              <p className="p-title">{item.name}</p>
              <p className="h1-title">₦{item.price}</p>
              <div className="mini-cart-item__size_edit">
                <div className="bag-item__size">
                  <p className="h3-title">{item.selectedSize}</p>
                </div>
                {/* <img src={editPen} alt="edit" /> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightSideCart;
