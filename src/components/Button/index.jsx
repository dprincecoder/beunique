import React from "react";
import { Link } from "react-router-dom";
import "./button.css";

const Button = ({ to, text }) => {
  return (
    <div className="button-wrap">
      <Link to={to}>{text}</Link>
    </div>
  );
};

export default Button;
