import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AdminContext } from "./AdminContext";

export default function PrivateRoute({ allowedRoles = [] }) {
  const { admin, token } = useContext(AdminContext);

  // 1. No token → redirect to login
  if (!token) return <Navigate to="/admin/login" replace />;

  // 2. Token exists but admin not loaded yet → show nothing (or spinner)
  if (!admin) return null;

  // 3. Derive role safely from different possible shapes
  const role =
    admin?.data?.role ??
    admin?.role ??
    admin?.user?.role ??
    (Array.isArray(admin?.roles) ? admin.roles[0]?.name : undefined);

  // If role still not found, treat as unauthenticated
  if (!role) return <Navigate to="/admin/login" replace />;

  // Normalize allowedRoles to array
  const allowed = Array.isArray(allowedRoles) ? allowedRoles : [allowedRoles];

  // If no allowed roles specified, allow any authenticated admin
  if (allowed.length === 0) return <Outlet />;

  // Check if role is included
  if (!allowed.includes(role)) return <Navigate to="/not-authorized" replace />;

  return <Outlet />;
}
