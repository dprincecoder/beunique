import React from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import AuthError from "../../components/AuthError";
import AdminOrders from "./Orders";
import AdminSettings from "./Settings";
import Sidebar from "./Sidebar";
import StockOverview from "./StockOverview";
import AdminUpload from "./Upload";

const AdminOverview = () => {
  const router = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const type = query.get("type");
  const { token } = useSelector((state) => state.auth);
  const componentToRender = () => {
    switch (type) {
      case "admin":
        return <StockOverview />;
      case "orders":
        return <AdminOrders />;
      case "upload":
        return <AdminUpload />;
      case "settings":
        return <AdminSettings />;
      default:
        return <StockOverview />;
    }
  };

  return (
    <>
      {token ? (
        <section className="flex p-[20px] py-[0] pr-0">
          <Sidebar />
          <div className="w-full  h-[100vh]">{componentToRender()}</div>
        </section>
      ) : (
        <AuthError />
      )}
    </>
  );
};

export default AdminOverview;
