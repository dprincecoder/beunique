import React from "react";
import { Link } from "react-router-dom";

const AuthError = () => {
  return (
    <section className="w-full h-screen flex flex-col items-center justify-center">
      <h1 className="font-anybody font-bold text-3xl text-[#344054]">
        Please login to access your account!
      </h1>

      <Link to="/auth/signin">
        <button
          type="button"
          className="px-2 py-2.5 mt-6 bg-[#101828] text-[#fcfcfd] font-medium hover:font-semibold text-[14px] rounded-lg focus:outline-none focus:ring-0 transition duration-300 ease-in-out flex items-center justify-center w-[150px] h-[42px]"
        >
          Login
        </button>
      </Link>
    </section>
  );
};

export default AuthError;
