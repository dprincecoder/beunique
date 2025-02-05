import React from "react";
import { GrFormClose } from "react-icons/gr";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeItem } from "../../redux/features/bag/bagSlice";
import { dispatch } from "../../redux/store";
import "./mybagMini.css";

const MyBagMini = () => {
  const { cart } = useSelector((state) => state.cartItems);
  const fiveItems = cart.slice(0, 5);

  const handleRemove = (item) => {
    dispatch(removeItem(item));
  };
  return (
    <section className="my-bag-mini">
      {cart.length > 0 && (
        <div className="my-bag-mini__content">
          {fiveItems.map((item, index) => (
            <div className="my-bag-mini__item" key={index}>
              <div className="my-bag-mini__item__image">
                <img src={item.img} alt={item.name} />
              </div>
              <div className="my-bag-mini__item__info">
                <h3 className="h3-title">{item.name}</h3>
                <div className="remove">
                  <GrFormClose
                    className="remove-item"
                    onClick={() => handleRemove(item.id)}
                  />
                </div>
              </div>
            </div>
          ))}
          <Link to="/my-bag" className="my-bag-mini__link">
            View Bag
          </Link>
        </div>
      )}
    </section>
  );
};

export default MyBagMini;
