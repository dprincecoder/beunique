import React from "react";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../../redux/utils/UtilSlice";

const InputField = ({ name, type, placeholder, inputValue, id, className }) => {
  const dispatch = useDispatch;
  const getSearchValue = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };
  return (
    <section
      className={`w-full my-5 flex flex-col items-center space-y-6 ${className}`}
    >
      <div className="w-full flex flex-col items-center my-0">
        <label
          htmlFor="password"
          className="w-full rounded-lg border-[1px] border-[#d0d5dd] relative mt-0"
        >
          <input
            type={type}
            placeholder={placeholder}
            value={inputValue}
            id={id}
            name={name}
            className="w-full p-[10px] rounded-lg placeholder:text-[16px] placeholder:text-[#344054] font-medium outline-none border-none bg-white"
            onChange={(e) => getSearchValue(e)}
          />
        </label>
      </div>
    </section>
  );
};

export default InputField;
