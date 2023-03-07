import React from "react";
import { Link } from "react-router-dom";
import "./button.css";

const Button = ({ to, text }) => {
  return (
    <Link to={to} className="button-wrap">
      <button className="button">{text}</button>
    </Link>
  );
};

export default Button;
