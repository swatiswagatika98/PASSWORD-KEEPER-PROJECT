import React, { useContext } from "react";
import { PasswordContext } from "../context/Context";

const PasswordList = () => {

  const {
    modifyPasswords,
    passwordRemoveHandler,
    passwordEditHandler
  } = useContext(PasswordContext);


  return (
    <div className="mainList">
      <h1>All Passwords</h1>
      <div>
        <ul className="listItem">
          {modifyPasswords.map((data) => (
            <li key={data.id} className="listItems">
              <p>{data.title}</p>
              <p>{data.password}</p>
              <button onClick={() => passwordRemoveHandler(data.id)}>Delete</button>
              <button onClick={() => passwordEditHandler(data)}>Edit</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PasswordList;
