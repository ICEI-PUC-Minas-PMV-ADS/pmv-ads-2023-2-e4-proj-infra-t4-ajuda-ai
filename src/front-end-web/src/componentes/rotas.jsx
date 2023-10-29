/* eslint-disable react/prop-types */
import { useMemo } from "react";
import { Navigate } from "react-router-dom";

const RotasProtegidas = ({ children }) => {
  const loginInfo = JSON.parse(localStorage.getItem("login"));

  const isLogged = useMemo(() => loginInfo, [loginInfo]);

  if (!isLogged) {
    return <Navigate to="/" />;
  }
  return children;
};

const RotasPublicas = ({ children }) => {
  const loginInfo = JSON.parse(localStorage.getItem("login"));

  const isLogged = useMemo(() => loginInfo, [loginInfo]);
  if (isLogged) {
    return <Navigate to="/inicio" />;
  }
  return children;
};

export { RotasProtegidas, RotasPublicas };
