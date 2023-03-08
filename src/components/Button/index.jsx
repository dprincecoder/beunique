import React from "react";
import { Link } from "react-router-dom";
import "./button.css";

const Button = ({ to, text, type }) => {
  return (
    <>
      {to ? (
        <Link className="button-wrap" to={to}>
          {text}
        </Link>
      ) : (
        <button className="button-wrap" type={type}>
          {text}
        </button>
      )}
    </>
  );
};

export default Button;
