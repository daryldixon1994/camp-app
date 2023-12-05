import React from "react";
import { Navigate } from "react-router-dom";
function AdminPrivateRoutes({ children }) {
  let token = localStorage.getItem("token");
  let isAdmin = localStorage.getItem("isAdmin");
  if (token && isAdmin === "true") {
    return <>{children}</>;
  } else {
    return <Navigate to="/login" />;
  }
}

export default AdminPrivateRoutes;
