/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const LoginContext = createContext();

const LoginContextProvider = ({ children }) => {
  const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });

  return (
    <LoginContext.Provider value={{ loginInfo, setLoginInfo }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
