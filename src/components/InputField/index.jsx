import { Eye, EyeSlash } from "iconsax-react";
import React from "react";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../../redux/utils/UtilSlice";

const InputField = ({
  setPassword,
  name,
  type,
  password,
  showEye,
  placeholder,
  inputValue,
  id,
}) => {
  const dispatch = useDispatch;
  const getSearchValue = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };
  return (
    <section className="w-full my-8 flex flex-col items-center space-y-6">
      <div className="w-full flex flex-col items-center my-0">
        <label
          htmlFor="password"
          className="w-full rounded-lg border-[1px] border-[#d0d5dd] relative mt-4"
        >
          <input
            type={type ? "text" : "password"}
            placeholder={placeholder}
            value={inputValue}
            id={id}
            name={name}
            className="w-full p-[16px] rounded-lg placeholder:text-[16px] placeholder:text-[#344054] font-medium outline-none border-none bg-white"
            onChange={(e) => getSearchValue(e)}
          />
          {showEye && (
            <>
              {type ? (
                <Eye
                  size={20}
                  className="text-[#344054] absolute top-[50%] -translate-y-[50%] right-[16px] cursor-pointer"
                  onClick={() => setShowPassword((prev) => !prev)}
                />
              ) : (
                <EyeSlash
                  size={20}
                  className="text-[#344054] absolute top-[50%] -translate-y-[50%] right-[16px] cursor-pointer"
                  onClick={() => setShowPassword((prev) => !prev)}
                />
              )}
            </>
          )}
        </label>
      </div>
    </section>
  );
};

export default InputField;
