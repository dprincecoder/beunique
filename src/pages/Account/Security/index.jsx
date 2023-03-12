import React from "react";
import EditIcon from "./assets/edit-pen.svg";
import "./security.css";

const Security = () => {
  const [startEdit1, setStartEdit1] = React.useState(false);
  const [startEdit2, setStartEdit2] = React.useState(false);

  const handleCancel = () => {
    setStartEdit1(false);
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
            placeholder="+234-803-784-789"
            name="number"
            id="numer"
          />
        </div>
        {startEdit1 && (
          <div className="security-cta-btns">
            <button className="btn-cancel" onClick={handleCancel}>
              Cancel
            </button>
            <button className="btn-save">Save</button>
          </div>
        )}
      </div>
      <div className="security-auth">
        <div className="security-cta">
          <h2 className="h2-title">Authentication</h2>
          {!startEdit2 && <img src={EditIcon} alt="edit" />}
        </div>
        <div className="security-inputs">
          <div className="security-input">
            <label htmlFor="name">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value="*************"
            />
          </div>
          <div className="security-input">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              value="Beunique@gmail.com"
            />
          </div>
        </div>
        {startEdit2 && (
          <div className="security-cta-btns">
            <button className="btn-cancel">Cancel</button>
            <button className="btn-save">Save</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Security;
