import React from "react";
import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <div className="flex">
      {/* <Sidebar /> */}
      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default PublicLayout;
