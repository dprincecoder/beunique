import React from "react";
import "./addressbook.css";
import editPen from "./edit-pen.svg";

const AddressBook = () => {
  const [startEdit, setStartEdit] = React.useState(false);

  const handleCancel = () => {
    setStartEdit(false);
  };
  return (
    <div className="address-book-page">
      <h1>Address Book</h1>
      <div className="address-book-edit">
        <h3>Personal Information</h3>
        {!startEdit && (
          <img src={editPen} alt="edit" onClick={() => setStartEdit(true)} />
        )}
      </div>
      <div className="address-book-inputs">
        <div className="address-book-input">
          <label htmlFor="first-name">Address</label>
          <input
            type="text"
            id="address"
            value="24 beunique street, Lagos, Nigeria"
          />
        </div>
        <div className="address-book-input">
          <label htmlFor="country">Country/Region</label>
          <select name="country" id="country">
            <option value="">Nigeria</option>
          </select>
        </div>
        <div className="two-flex">
          <div className="address-book-input">
            <label htmlFor="city">City</label>
            <input type="text" id="city" value="Lekki" />
          </div>
          <div className="address-book-input">
            <label htmlFor="state">State</label>
            <select name="state" id="state">
              <option value="">Lagos</option>
            </select>
          </div>
        </div>
        {startEdit && (
          <div className="address-book-btns">
            <button className="btn-cancel" onClick={handleCancel}>
              Cancel
            </button>
            <button className="btn-save">Save</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddressBook;
