import React, { useContext } from "react";
import { PasswordContext } from "../context/Context";

const PasswordForm = () => {
  const { password,
    setPassword,
    title,
    setTitle,
    search,
    setSearch,
    addPasswordHandler
  } = useContext(PasswordContext);

  return (
    <div className="mainForm">
      <h1>Password Keeper</h1>
      <p>Total Passwords : 0</p>
      <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Add New Password
      </button>
      <div className="searchField">
        <label>Search : </label>
        <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search your password ." />
      </div>

      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <form onSubmit={addPasswordHandler} className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="title" />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="number"
                placeholder="password" />
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" aria-label="Close">Save Password</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PasswordForm;
