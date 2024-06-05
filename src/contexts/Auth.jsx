import React, { createContext, useState, useEffect } from "react";

export const Auth = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const retrieveUser = JSON.parse(localStorage.getItem("user"));
    if (retrieveUser === null) return;
    else {
      setUser(retrieveUser);
    }
  }, []);

  return <Auth.Provider value={{ user, setUser }}>{children}</Auth.Provider>;
};
