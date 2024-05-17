import React, { createContext, useState } from "react";

export const Auth = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return <Auth.Provider value={{ user, setUser }}>{children}</Auth.Provider>;
};
