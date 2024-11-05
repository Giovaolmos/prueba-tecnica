import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./authContext";

interface ProtectedRouteProps {
  children: React.ReactNode;
  adminOnly?: boolean;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  adminOnly = false,
}) => {
  const { isLoggedIn, isAdmin } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  if (adminOnly && !isAdmin) {
    return <Navigate to="/home" replace />;
  }

  return <>{children}</>;
};
