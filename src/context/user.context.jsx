import { createContext, useState } from "react";

export const User = createContext({
  isLogged: localStorage.getItem("isLogged"),
  name: localStorage.getItem("name"),
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    isLogged: localStorage.getItem("isLogged"),
    name: localStorage.getItem("name"),
  });

  return <User.Provider value={{ user, setUser }}>{children}</User.Provider>;
};
