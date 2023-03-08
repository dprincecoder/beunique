import React from "react";
import "./inputRadio.css";
const InputRadio = ({
  className,
  title,
  name,
  getCheckedValue,
  value,
  onChecked,
}) => {
  return (
    <div className={`input-radio ${className}`}>
      <div className="radio-wrap">
        <input
          type="radio"
          name={name}
          id="radio-1"
          value={value}
          checked={onChecked}
          onChange={(e) => getCheckedValue(e)}
        />
        <label htmlFor="radio-1"></label>
      </div>
      <p className="p-title">{title}</p>
    </div>
  );
};

export default InputRadio;
