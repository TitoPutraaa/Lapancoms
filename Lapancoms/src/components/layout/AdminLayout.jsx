import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen w-full p-4">
      <Sidebar />
      <div className="ml-3 flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
