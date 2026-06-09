import { createBrowserRouter , Navigate } from "react-router-dom";
import Dashboard from "../features/dashboard/Dashboard";
import BlankLayout from "@/layouts/BlankLayout";
import { ProtectedRoute } from "@/layouts/ProtectedRoute";
import FullLayout from "@/layouts/FullLayout";
import RoleRoute from "@/layouts/RoleRoute";
import Login from "@/features/login/Login";
import Setting from "@/features/setting/Setting";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/dashboard" replace />,
  },

  {
    path: "/auth",
    element: <BlankLayout />,
    children: [{ path: "login", element: <Login /> }],
  },

  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <FullLayout />,
        children: [
          {
            element: <RoleRoute roles={["receptionist", "admin"]} />,
            children: [
              { path: "dashboard", element: <Dashboard /> },
              { path: "setting", element: <Setting /> },
            ],
          },
        ],
      },
    ],
  },
]);