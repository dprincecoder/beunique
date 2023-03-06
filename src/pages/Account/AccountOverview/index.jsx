import React from "react";
import { Link } from "react-router-dom";
import "./account-overiew.css";
import EditPen from "./assets/edit-pen.svg";

const AccountOverview = () => {
  return (
    <div className="account-overview">
      <h1 className="account-title">Account overview</h1>
      <div className="account-overview__content">
        <div className="cards">
          <div className="card">
            <div className="card__title">
              <h3 className="h3-title">Account details</h3>
            </div>
            <div className="hr" />
            <h3 className="h3-title">Tyrone Johnson</h3>
            <p className="p-title"> TyroneJohnson@ gmail.com</p>
          </div>
          <div className="card">
            <div className="card__title">
              <h3 className="h3-title">Address book</h3>
              <div className="edit-btn">
                <Link to="/auth/account?type=address-book">
                  <img src={EditPen} alt="edit" />
                </Link>
              </div>
            </div>
            <div className="hr" />
            <h3 className="h3-title">Your default shipping address</h3>
            <p className="p-title">
              234 Bulivard drive way, Lekki Epe Express way, Lagos, Nigeria
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountOverview;
