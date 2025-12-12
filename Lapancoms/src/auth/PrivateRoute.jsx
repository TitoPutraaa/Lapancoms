import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute({ allowedRoles = [] }) {
  if (!localStorage.getItem("token"))
    return <Navigate to="/admin/login" replace />;

  if (allowedRoles.length <= 1) {
    if (allowedRoles[0] != localStorage.getItem("role"))
      return <Navigate to="*" />;
    return <Outlet />;
  }

  return <Outlet />;
}
