import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  decrementQuantity,
  incrementQuantity,
  removeItem,
} from "../../redux/features/cart/cartslice";
import add from "./assets/Add.png";
// import editPen from "./assets/edit-pen.svg";
import flutterwavePng from "./assets/flutterwave.png";
import payStackPng from "./assets/paystack.png";
import trash from "./assets/trash.png";
import "./mybag.css";

const MyBag = () => {
  const { cart } = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const price = cart.reduce((total, item) => {
    const priceWithoutComma = item.price.replace(",", "");
    return total + Number(priceWithoutComma);
  }, 0);
  const totalCost = price * totalItems;

  const handleIncrement = (id) => {
    console.log(id);
    dispatch(incrementQuantity(id));
  };
  const handleDecrement = (id) => {
    console.log(id);
    dispatch(decrementQuantity(id));
  };
  const handleRemove = (id) => {
    console.log(id);
    dispatch(removeItem(id));
  };

  useEffect(() => {
    if (cart.length === 0) {
      navigate("/");
    }

    return () => {
      // cleanup
    };
  }, [cart]);

  return (
    <div className="my-bag-page">
      <div className="bag-directional-link">
        <Link to="/">Home</Link>
        <span> {">"} </span>
        <p className="h3-title">My Bag</p>
      </div>
      <div className="my-bag-page__content">
        <h2 className="h1-title">My Bag</h2>
        <div className="bag-grid">
          {cart.map((item) => (
            <div className="bag-item" key={item.id}>
              <div className="bag-item__image">
                <img src={item.img} alt={item.name} />
              </div>
              <div className="bag-item__details">
                <p className="p-title">{item.name}</p>
                <p className="h1-title">₦{item.price}</p>
                <div className="bag-item__size_edit">
                  <div className="bag-item__size">
                    <p className="h3-title">{item.selectedSize}</p>
                  </div>
                  {/* <img src={editPen} alt="edit" /> */}
                </div>
                <div className="bag-item__quantity">
                  <div
                    className="h1-title decrement"
                    onClick={() => handleDecrement(item.id)}
                  >
                    -
                  </div>
                  <p className="h3-title">Qty: {item.quantity}</p>
                  <div
                    className="increment"
                    onClick={() => handleIncrement(item.id)}
                  >
                    <img src={add} alt="add" />
                  </div>
                </div>
                <div
                  className="bag-item__remove"
                  onClick={() => handleRemove(item.id)}
                >
                  <img src={trash} alt="edit" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bag-checkout-wrap">
        <div className="bag-checkout">
          <div className="bag-calculate">
            <div className="bag-items">
              <p className="h3-title">{totalItems} Item(s)</p>
              <h2 className="h3-title">₦{price}</h2>
            </div>
            <div className="bag-subtotal">
              <p className="h3-title">Subtotal:</p>
              <h2 className="h1-title">₦{totalCost}</h2>
            </div>
            <Link
              to="/auth/checkout?next=contact-information"
              className="bag-checkout-button"
            >
              <button>Checkout</button>
            </Link>
          </div>
          <div className="bag-express-payment">
            <p>Express payment options at checkout</p>
            <div className="bag-payment-options">
              <div className="bag-payment-option">
                <img src={payStackPng} alt="paystack" />
              </div>
              <div className="bag-payment-option">
                <img src={flutterwavePng} alt="flutterwave" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBag;
