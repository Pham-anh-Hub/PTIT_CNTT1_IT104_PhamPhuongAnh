import React, { type JSX } from 'react'
// src/components/ProtectedRoute.tsx
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: JSX.Element;
}

export default function ProtectRouter({ children }: ProtectedRouteProps) {
  const userLoggined = localStorage.getItem("userLoggined"); 

  if (!userLoggined) {
    // Chưa đăng nhập -> chuyển về login
    return <Navigate to="/login" replace />;
  }

  // Nếu đã có token -> cho phép truy cập
  return children;
}




