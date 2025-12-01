import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import { Suspense } from "react";

const AdminLayout = () => {
  const location = useLocation();

  const hideSidebar = location.pathname.startsWith("/admin/delete/deleteBlog/");
  const hideSidebar2 = location.pathname.startsWith("/admin/template");

  return (
    <div className="flex min-h-screen w-full p-4">
      {!hideSidebar2 && !hideSidebar && <Sidebar />}
      <div className="flex-1 overflow-hidden pb-5 lg:ml-3">
        <Suspense fallback>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default AdminLayout;
