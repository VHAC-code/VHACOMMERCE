import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAdmin, element }) => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);

  if (loading) return null; // Avoid rendering anything while loading

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // If the route is restricted to admin and the user is not an admin, redirect to login
  if (isAdmin && user.role !== "admin") {
    return <Navigate to="/login" />;
  }

  // Render the protected component if all conditions pass
  return element;
};

export default ProtectedRoute;
