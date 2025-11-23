import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="flex">
      <div className="relative">
        <Sidebar />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
