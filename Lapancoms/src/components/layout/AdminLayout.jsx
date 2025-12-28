import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import { Suspense, useEffect, useRef, useState } from "react";
import useMediaQuery from "../../hooks/useMediaQueryA";
import useClickOutside from "../../hooks/useClickOutside";

const AdminLayout = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true);
  const isMd = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    if (isMd) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [isMd]);

  const hideSidebar = location.pathname.startsWith("/admin/delete/deleteBlog/");
  const hideSidebar2 = location.pathname.startsWith("/admin/template");
  const hideSidebar3 = location.pathname.startsWith("/admin/dashboard/blog/");
  const hideSidebar4 = location.pathname.startsWith("/admin/updateLandingPage");
  const sidebarRef = useRef(null);
  useClickOutside(sidebarRef, () => setIsOpen(false));

  return (
    <div className="min-h-screen w-full">
      <div className="relative flex">
        {!isMd && isOpen && (
          <div className="bg-dark/80 fixed inset-0 z-99 backdrop-blur-sm"></div>
        )}
        {!hideSidebar3 && !hideSidebar2 && !hideSidebar && !hideSidebar4 && (
          <div
            ref={!isMd ? sidebarRef : null}
            className={`md:mx-4 ${isOpen ? "w-64" : "w-13"} ${!isMd ? "fixed z-101" : "block"} transition-all duration-500`}
          >
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} isMd={isMd} />
          </div>
        )}
        <div
          className={`h-fit w-full flex-1 overflow-hidden ${!isMd && !hideSidebar3 && !hideSidebar2 && !hideSidebar ? "ml-16" : ""}`}
        >
          <Suspense fallback>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
