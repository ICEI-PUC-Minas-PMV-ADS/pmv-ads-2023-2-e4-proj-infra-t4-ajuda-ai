import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import LoginContextProvider from "./context/LoginContext.jsx";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./services/queryClient.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <LoginContextProvider>
        <App />
      </LoginContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
