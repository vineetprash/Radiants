import { Navigate, useLocation } from "react-router-dom";
import React from "react";

const AuthRequired = ({ children }) => {
   const token = localStorage.getItem("jwtToken");

   if (!token) {
      return <Navigate to="/auth" replace />;
   }

   return children;
};

export default AuthRequired;
