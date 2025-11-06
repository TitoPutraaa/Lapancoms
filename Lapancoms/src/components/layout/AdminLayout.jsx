import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import { Suspense } from "react";

const AdminLayout = () => {
  const location = useLocation();

  const hideSidebar = location.pathname.startsWith("/admin/blogview");

  return (
    <div className="flex min-h-screen w-full p-4">
      {!hideSidebar && <Sidebar />}
      <div className="ml-3 flex-1 lg:ml-0">
        <Suspense fallback>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default AdminLayout;
