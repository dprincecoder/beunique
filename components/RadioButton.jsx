import React, { useState, useEffect } from "react";

const RadioButton = ({ active, size }) => {
  const [width, setWidth] = useState(null);
  const [height, setHeight] = useState(null);
  const [isSize, setIsSize] = useState(false);

  return (
    <span
      className={
        isSize
          ? `${width} ${height} border-[1.5px] border-black rounded-full bg-white inline-block grid place-items-center`
          : `w-[18px] h-[18px] border-[1.5px] border-black rounded-full inline-block grid place-items-center`
      }
    >
      <span className={active && `w-[8px] h-[8px] rounded-full bg-black`}></span>
    </span>
  );
};

export default RadioButton;
