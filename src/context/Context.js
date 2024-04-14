import React, { createContext, useState } from "react";

export const PasswordContext = createContext(null);

const ContextProvider = (props) => {
  const [allPassword, setAllPassword] = useState([]);
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [search, setSearch] = useState("");


  const addPasswordHandler = (e) => {
    e.preventDefault();
    if (!title || !password) {
      alert("please fill all the field !");
      return;
    }
    const newPassword = {
      title,
      password,
      id: Math.random().toString()
    }
    setAllPassword((allPassword) => [...allPassword, newPassword])
    setTitle("");
    setPassword("");
  }


  const passwordRemoveHandler = (id) => {
    const newPassowords = allPassword.filter((data) => data.id !== id);
    setAllPassword(newPassowords)
  }
  const passwordEditHandler = (data) => {
    const newTitle = prompt("Enter your new title");
    const newPassword = prompt("Enter your new Password");
    setAllPassword((prevPasswords) => {
      return prevPasswords.map(passwordData => {
        if (passwordData.id === data.id) {
          return { ...passwordData, title: newTitle, password: newPassword };
        }
        return passwordData;
      });
    });
  };


  console.log(allPassword)

  const modifyPasswords = allPassword.filter((data) => data.title.toLowerCase().includes(search));


  const value = {
    password,
    setPassword,
    modifyPasswords,
    title,
    setTitle,
    search,
    setSearch,
    setAllPassword,
    addPasswordHandler,
    passwordRemoveHandler,
    passwordEditHandler
  };

  return (
    <PasswordContext.Provider value={value}>
      {props.children}
    </PasswordContext.Provider>
  );
};

export default ContextProvider;
