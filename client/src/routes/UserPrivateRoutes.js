import React from "react";
import { Navigate } from "react-router-dom";

function UserPrivateRoutes({ children }) {
  let token = localStorage.getItem("token");
  let isUser = localStorage.getItem("isUser");
  if (token && isUser === "true") {
    return <>{children}</>;
  } else {
    return <Navigate to="/login" />;
  }
}

export default UserPrivateRoutes;
