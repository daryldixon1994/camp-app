import React from "react";
import { Navigate } from "react-router-dom";

function PublicRoutes({ children }) {
  let token = localStorage.getItem("token");
  if (!token) {
    return <>{children}</>;
  } else {
    return <Navigate to="/" />;
  }
}

export default PublicRoutes;
