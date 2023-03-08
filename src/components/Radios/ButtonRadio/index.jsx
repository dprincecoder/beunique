import React from "react";
import "./btnRadio.css";

const ButtonRadio = ({ value, onChecked, getCheckedEl }) => {
  return (
    <div className="radio-wrap btn-radio-wrap">
      <input
        type="radio"
        name="btn-radio"
        value={value}
        checked={onChecked}
        onChange={(e) => getCheckedEl(e)}
        id="radio-2"
      />
      <label htmlFor="radio-2"></label>
    </div>
  );
};

export default ButtonRadio;
