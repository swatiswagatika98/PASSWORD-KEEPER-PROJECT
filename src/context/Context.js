import React, { createContext, useState } from "react";

export const PasswordContext = createContext(null);

const ContextProvider = (props) => {
  const [input, setInput] = useState("");

  const value = {
    id: 1,
  };

  return (
    <PasswordContext.Provider value={value}>
      {props.children}
    </PasswordContext.Provider>
  );
};

export default ContextProvider;
