import { Header } from "@/components";
import AccountLeftBar from "@/components/account/AccountLeftBar";
import MyAccount from "@/components/account/MyAccount";
import MyOrders from "@/components/account/Orders";
import AuthError from "@/components/AuthError";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const Account = () => {
  const { token } = useSelector((state) => state.auth);

  return (
    <>
      {token ? (
        <div className="w-full flex pt-[40px]">
          <div className="w-1/4">
            <AccountLeftBar />
          </div>
          <div className="w-3/4">
            <MyAccount />
          </div>
        </div>
      ) : (
        <>
          <AuthError />
        </>
      )}
    </>
  );
};

export default Account;
