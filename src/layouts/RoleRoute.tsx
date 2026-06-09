import { useAuthStore } from "@/store/authStore";
import { Navigate, Outlet } from "react-router-dom";

type Props = { roles: string[] };

export const RoleRoute = ({ roles }: Props) => {
  const role = useAuthStore((s) => s.role);

  if (!role || !roles.includes(role)) {
    return <Navigate to="/403" replace />;
  }

  return <Outlet />;
};

export default RoleRoute;
