import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { Suspense } from "react";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen w-full p-4">
      <Sidebar />
      <div className="ml-3 flex-1 lg:ml-0">
        <Suspense fallback>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default AdminLayout;
