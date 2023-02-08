import React from "react";

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <section
      className={
        isDanger
          ? "flex flex-row items-end text-red-400"
          : "flex flex-row items-end"
      }
    >
      <section className="font-semibold text-3xl font-notoSans">
        {value}
      </section>
      <span className="text-[16px]">{type}</span>
    </section>
  );
};

export default DateTimeDisplay;
