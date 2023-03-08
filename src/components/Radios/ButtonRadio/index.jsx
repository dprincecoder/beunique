import React from "react";
import "./btnRadio.css";

const ButtonRadio = ({ state, address, value, onChecked, getCheckedEl }) => {
  return (
    <div className="button-radio">
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
      <div className="radio-info">
        <h3 className="h3-title">{state}</h3>
        <p className="p-title">{address}</p>
      </div>
    </div>
  );
};

export default ButtonRadio;
