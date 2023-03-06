import AuthError from "@/components/AuthError";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const SavedItems = () => {
  const { token } = useSelector((state) => state.auth);

  return (
    <>
      <section className="grid place-items-center w-full p-16">
        {token ? (
          <h1 className="font-anybody font-bold text-3xl text-[#344054]">
            Saved Items
          </h1>
        ) : (
          <AuthError />
        )}
      </section>
    </>
  );
};

export default SavedItems;
