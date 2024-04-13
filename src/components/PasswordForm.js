import React, { useContext } from "react";
import { ContextProvider } from "../context/Context";

const PasswordForm = () => {
  const value = useContext(ContextProvider);
  console.log(value);

  return (
    <div className="mainForm">
      <h1>Password Keeper</h1>
      <p>Total Passwords : 0</p>
      <button>Add New Password</button>
      <div className="searchField">
        <label>Search : </label>
        <input type="text" placeholder="Search your password ." />
      </div>
    </div>
  );
};

export default PasswordForm;
