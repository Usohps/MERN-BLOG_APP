import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import { HomeProvider } from "./context/HomeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <HomeProvider>
      <App />
    </HomeProvider>
  </AuthProvider>
);
