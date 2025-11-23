import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import { Suspense } from "react";

const AdminLayout = () => {
  const location = useLocation();

  const hideSidebar = location.pathname.startsWith("/admin/blogview");
  const hideSidebar2 = location.pathname.startsWith("/admin/template");

  return (
    <div className="min-h-screen w-full p-4">
      <div className="flex w-full">
        {/* Sidebar fixed width */}
        {!hideSidebar2 && !hideSidebar && (
          <div className="w-64 flex-none">
            <Sidebar />
          </div>
        )}

        {/* Main content */}
        <main className="flex-1 overflow-hidden">
          <Suspense fallback>
            <Outlet />
          </Suspense>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
