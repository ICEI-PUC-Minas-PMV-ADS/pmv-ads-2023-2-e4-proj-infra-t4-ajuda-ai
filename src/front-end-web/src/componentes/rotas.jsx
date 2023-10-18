/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

const RotasProtegidas = ({ children }) => {
  const { loginInfo } = useContext(LoginContext);
  if (!loginInfo.email) {
    return <Navigate to="/" />;
  }
  return children;
};

const RotasPublicas = ({ children }) => {
  const { loginInfo } = useContext(LoginContext);
  if (loginInfo.email) {
    return <Navigate to="/inicio" />;
  }
  return children;
};

export { RotasProtegidas, RotasPublicas };
