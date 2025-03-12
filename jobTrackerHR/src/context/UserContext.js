import React, { createContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false); // Default is not authenticated

  const login = () => setIsAuth(true);
  const logout = () => setIsAuth(false);

  return (
    <UserContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
