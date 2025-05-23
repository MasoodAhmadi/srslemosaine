// components/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./contexts/authContext/authContext";

const ProtectedRoute = ({ children }) => {
  const { userLoggedIn } = useAuth();

  if (!userLoggedIn) {
    // If not logged in, redirect to home or login page
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
