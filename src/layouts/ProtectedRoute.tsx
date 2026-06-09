import { useAuthStore } from "@/store/authStore";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
  const token = useAuthStore((s) => s.token);

  if (!token) {
    return <Navigate to="/auth/login" replace />;
  }

  return <Outlet />;
};
