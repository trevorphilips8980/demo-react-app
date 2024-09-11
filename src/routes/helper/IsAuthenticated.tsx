import { useAuthStore } from "@/store/useAuthStore";
import React from "react";
import { Navigate } from "react-router-dom";

interface IsAuthenticatedProps {
  children: React.ReactNode;
  redirectTo?: string; // The path to redirect to when authenticated
}

const IsAuthenticated: React.FC<IsAuthenticatedProps> = React.memo(
  ({ children, redirectTo = "/profile" }) => {
    const { isAuthenticated } = useAuthStore();

    // If the user is authenticated, redirect them to the specified route
    return isAuthenticated ? <Navigate to={redirectTo} /> : <>{children}</>;
  }
);

export default IsAuthenticated;
