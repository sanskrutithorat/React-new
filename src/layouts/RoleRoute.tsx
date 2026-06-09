import { useAuthStore } from "@/store/authStore";

import {
  Navigate,
  Outlet,
} from "react-router-dom";

type Props = {
  roles: string[];
};

export const RoleRoute = ({
  roles,
}: Props) => {

  const user =
    useAuthStore(
      (s) => s.user
    );

  const role = user?.role;

  if (
    !role ||
    !roles.includes(role)
  ) {
    return (
      <Navigate
        to="/403"
        replace
      />
    );
  }

  return <Outlet />;
};

export default RoleRoute;