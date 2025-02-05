import React, { useState } from "react";
import EditIcon from "./assets/edit-pen.svg";
import eye from "./assets/eye.svg";
import "./security.css";

const Security = () => {
  const [startEdit1, setStartEdit1] = useState(false);
  const [startEdit2, setStartEdit2] = useState(false);
  const [typeOf, setTypeOf] = useState(false);

  const handleCancel1 = () => {
    setStartEdit1(false);
  };
  const handleCancel2 = () => {
    setStartEdit2(false);
  };
  return (
    <div className="security-page">
      <h1>Security</h1>
      <div className="security-personal-info">
        <div className="security-cta">
          <h2>Personal Information</h2>
          {!startEdit1 && (
            <img
              src={EditIcon}
              alt="edit"
              onClick={() => setStartEdit1(true)}
            />
          )}
        </div>
        <div className="security-inputs">
          <div className="security-input">
            <label htmlFor="name">Name</label>
            <input value="Tyrone Johnson" type="text" name="name" id="name" />
          </div>
          <div className="security-input">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              autoComplete="off"
              id="email"
              value="Beunique@gmail.com"
            />
          </div>
        </div>
        <div className="security-input">
          <label htmlFor="number">Phone number</label>
          <input
            type="number"
            value="+234-803-784-789"
            autoComplete="off"
            placeholder="+234-803-784-789"
            name="number"
            id="numer"
          />
        </div>
        {startEdit1 && (
          <div className="security-cta-btns">
            <button className="btn-cancel" onClick={handleCancel1}>
              Cancel
            </button>
            <button className="btn-save">Save</button>
          </div>
        )}
      </div>
      <div className="security-auth">
        <div className="security-cta">
          <h2 className="h2-title">Authentication</h2>
          {!startEdit2 && (
            <img
              src={EditIcon}
              alt="edit"
              onClick={() => setStartEdit2(true)}
            />
          )}
        </div>
        <div className="security-inputs">
          <div className="security-input">
            <label htmlFor="name">Password</label>
            <div style={{ display: "flex", width: "100%" }}>
              <input
                autoComplete="off"
                type={typeOf ? "text" : "password"}
                name="password"
                id="password"
                value="*************"
              />
              <img src={eye} alt="" onClick={() => setTypeOf(!typeOf)} />
            </div>
          </div>
          <div className="security-input">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              autoComplete="off"
              value="Beunique@gmail.com"
            />
          </div>
        </div>
        {startEdit2 && (
          <div className="security-cta-btns">
            <button className="btn-cancel" onClick={handleCancel2}>
              Cancel
            </button>
            <button className="btn-save">Save</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Security;
