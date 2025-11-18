import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AdminContext } from "./AdminContext";

export default function PrivateRoute({ allowedRoles }) {
  const { admin, token } = useContext(AdminContext);
  console.log("romin", admin);
  const role = localStorage.getItem("role");

  // 1. No token → go to login
  if (!token) {
    return <Navigate to="/admin/login" replace />;
  }
  if (!admin || !admin.role) {
    return <Navigate to="/admin/login" replace />;
  }

  // 3. Role not allowed → 404
  if (!allowedRoles.includes(role)) {
    return <Navigate to="/NotFound" replace />;
  }

  // 4. Passed all checks
  return <Outlet />;
}
