import { useState, useRef, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useClickOutside from "../../hooks/useClickOutside";
import Logout from "../common/Logout";
import { AdminContext } from "../../auth/AdminContext";
import {
  BsGridFill,
  BsPlusSquare,
  BsTrash,
  BsPersonGear,
  BsClockHistory,
  BsChevronDown,
  BsX,
  BsList,
} from "react-icons/bs";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [isOpenDropM, setIsOpenDropM] = useState(false);
  const navigate = useNavigate();
  const sidebarRef = useRef(null);
  // const { admin } = useContext(AdminContext);

  useClickOutside(sidebarRef, () => setIsOpen(false));
  return (
    <>
      <aside
        className={`shadow-soft relative rounded-xl ${isOpen ? "w-64" : "w-13"} transition-all duration-500`}
      >
        {/* <div
          className={`${isOpen ? "bg-dark/80 fixed inset-0 z-998 backdrop-blur-xs " : ""}`}
        > */}
        <div
          className="px-1.5"
          aria-label="Sidebar"
          // ref={sidebarRef}
        >
          {/* Content */}
          <div className="mt-6">
            <div
              className={`flex items-start justify-between ${!isOpen ? "mb-6" : "mb-8"}`}
            >
              <div className={`ml-16 ${!isOpen ? "hidden" : "block"}`}>
                <h1 className="text-dark mb-1 text-center text-2xl font-semibold">
                  {/* {admin.username} */} Steve
                </h1>
                <p className="bg-accent text-secondary mx-auto w-fit rounded-full px-3 py-1 text-xs">
                  {/* {admin.role} */} Superadmin
                </p>
              </div>
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="cursor-pointer items-center focus:outline-none"
              >
                {!isOpen ? (
                  <BsList className="text-primary mx-2.5 size-5" />
                ) : (
                  <BsX className="text-primary mx-2.5 size-5" />
                )}
              </button>
            </div>
            <ul className="mb-2.5 space-y-2.5 font-medium">
              {/* Dashboard */}
              <li>
                <NavLink className="sideMenu group relative" to="dashboard">
                  <div className="text-dark hover:bg-secondary relative flex w-full items-center overflow-hidden rounded-md py-2">
                    <BsGridFill className="text-dark group-hover:text-accent mx-3 shrink-0 transition duration-75" />
                    <span className="group-hover:text-primary ml-0.5">
                      Dashboard
                    </span>
                  </div>
                  {!isOpen && (
                    <span className="text-accent! pointer-events-none absolute top-1/2 left-full ml-3 -translate-y-1/2 scale-90 rounded bg-white px-2 py-1 text-xs whitespace-nowrap opacity-0 shadow transition-all duration-200 group-hover:scale-100 group-hover:opacity-100">
                      Dashboard
                    </span>
                  )}
                </NavLink>
              </li>
              {/* Post */}
              <li className="group relative">
                <button
                  type="button"
                  onClick={() => {
                    setIsOpenDropM(!isOpenDropM);
                    navigate("/admin/postBlog");
                  }}
                  className="sideMenu text-dark group hover:bg-secondary flex w-full items-center overflow-hidden rounded-md py-2"
                >
                  <BsPlusSquare className="text-dark group-hover:text-accent mx-3 shrink-0 stroke-1 transition duration-75" />
                  <span className="group-hover:text-primary ml-0.5 w-full text-left">
                    Post
                  </span>
                  <BsChevronDown className="stroke-1" />
                </button>
                {!isOpen && !isOpenDropM && (
                  <span className="text-accent! pointer-events-none absolute top-1/2 left-full ml-3 -translate-y-1/2 scale-90 rounded bg-white px-2 py-1 text-xs whitespace-nowrap opacity-0 shadow transition-all duration-200 group-hover:scale-100 group-hover:opacity-100">
                    Post
                  </span>
                )}
                {isOpenDropM && (
                  <ul className="space-y-2 py-2">
                    <li>
                      <NavLink className="sideMenu" to="postBlog">
                        <div className="text-dark group hover:bg-secondary flex w-full items-center rounded-lg p-2 pl-11 transition duration-75">
                          <span className="group-hover:text-primary">
                            Post Blog
                          </span>
                        </div>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="sideMenu" to="postImage">
                        <div className="text-dark group hover:bg-secondary flex w-full items-center rounded-lg p-2 pl-11 transition duration-75">
                          <span className="group-hover:text-primary">
                            Post Image
                          </span>
                        </div>
                      </NavLink>
                    </li>
                  </ul>
                )}
              </li>
              {/* Delete */}
              <li>
                <NavLink className="sideMenu group relative" to="delete">
                  <div className="text-dark group hover:bg-secondary flex w-full items-center overflow-hidden rounded-md py-2">
                    <BsTrash className="text-dark group-hover:text-accent mx-3 shrink-0 transition duration-75" />
                    <span className="group-hover:text-primary ml-0.5">
                      Delete
                    </span>
                  </div>
                  {!isOpen && (
                    <span className="text-accent! pointer-events-none absolute top-1/2 left-full ml-3 -translate-y-1/2 scale-90 rounded bg-white px-2 py-1 text-xs whitespace-nowrap opacity-0 shadow transition-all duration-200 group-hover:scale-100 group-hover:opacity-100">
                      Delete
                    </span>
                  )}
                </NavLink>
              </li>
            </ul>

            {/* SuperAdmin */}
            {/* {admin.role === "superadmin" && ( */}
            <div>
              <h2
                className={`text-dark mx-3 mt-10 mb-4 font-medium text-nowrap ${!isOpen ? "hidden" : "block"}`}
              >
                SUPER ADMIN
              </h2>
              <ul className="space-y-2.5 font-medium">
                {/* Manage Admin */}
                <li>
                  <NavLink className="sideMenu group relative" to="manageAdmin">
                    <div className="text-dark group hover:bg-secondary flex w-full items-center overflow-hidden rounded-md py-2">
                      <BsPersonGear className="text-dark group-hover:text-accent mx-3 shrink-0 transition duration-75" />
                      <span className="group-hover:text-primary ml-0.5 text-nowrap">
                        Manage Admin
                      </span>
                    </div>
                    {!isOpen && (
                      <span className="text-accent! pointer-events-none absolute top-1/2 left-full ml-3 -translate-y-1/2 scale-90 rounded bg-white px-2 py-1 text-xs whitespace-nowrap opacity-0 shadow transition-all duration-200 group-hover:scale-100 group-hover:opacity-100">
                        Manage Admin
                      </span>
                    )}
                  </NavLink>
                </li>
                {/* Update LPage */}
                <li>
                  <NavLink
                    className="sideMenu group relative"
                    to="updateLandingPage"
                  >
                    <div className="text-dark group hover:bg-secondary flex w-full items-center overflow-hidden rounded-md py-2">
                      <BsClockHistory className="text-dark group-hover:text-accent mx-3 shrink-0 transition duration-75" />
                      <span className="group-hover:text-primary ml-0.5 text-nowrap">
                        Update Landing Page
                      </span>
                    </div>
                    {!isOpen && (
                      <span className="text-accent! pointer-events-none absolute top-1/2 left-full ml-3 -translate-y-1/2 scale-90 rounded bg-white px-2 py-1 text-xs whitespace-nowrap opacity-0 shadow transition-all duration-200 group-hover:scale-100 group-hover:opacity-100">
                        Update Landing Page
                      </span>
                    )}
                  </NavLink>
                </li>
              </ul>
            </div>
            {/* )} */}

            {/* <div className="">
              <Link>
                <Logout />
              </Link>
            </div> */}
          </div>
        </div>
        {/* </div> */}
      </aside>
    </>
  );
}
