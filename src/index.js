import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { PasswordContext } from "./context/Context";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PasswordContext>
      <App />
    </PasswordContext>
  </React.StrictMode>
);
