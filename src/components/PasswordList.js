import React from "react";

const PasswordList = () => {
  return (
    <div className="mainList">
      <h1>All Passwords</h1>
      <div>
        <ul className="listItem">
          <li className="listItems">
            <p>Gmail</p>
            <p>1234</p>
            <button>Delete</button>
            <button>Edit</button>
          </li>
          <li className="listItems">
            <p>Gmail</p>
            <p>1234</p>
            <button>Delete</button>
            <button>Edit</button>
          </li>
          <li className="listItems">
            <p>Gmail</p>
            <p>1234</p>
            <button>Delete</button>
            <button>Edit</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PasswordList;
