import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AdminContext } from "./AdminContext";

export default function PrivateRoute({ allowedRoles = [] }) {
  const { admin, token } = useContext(AdminContext);
  console.log("min r", admin);

  if (!token) return <Navigate to="/admin/login" replace />;

  if (!admin) return <Navigate to="*" />;

  if (!admin.role) return <Navigate to="*" />;

  if (allowedRoles == !admin.role) return <Navigate to="*" replace />;

  return <Outlet />;
}
