import { useState, useRef, useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
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
  BsFileText,
  BsImage,
} from "react-icons/bs";

export default function Sidebar({ isOpen, setIsOpen, isMd }) {
  const location = useLocation();

  const [isOpenDropM, setIsOpenDropM] = useState(false);
  const dropBarRef = useRef(null);
  // const { admin } = useContext(AdminContext);

  useClickOutside(dropBarRef, () => setIsOpenDropM(false));
  const isPostSection =
    location.pathname.includes("postBlog") ||
    location.pathname.includes("postImage");

  return (
    <>
      <aside
        className={`shadow-soft fixed top-4 bottom-4 left-0 z-100 rounded-xl bg-white md:left-4 ${isOpen ? "w-64" : "w-13"} transition-all duration-500`}
      >
        <div className="px-1.5" aria-label="Sidebar">
          {/* Content */}
          <div className="py-8">
            <div
              className={`flex items-start justify-between ${!isOpen ? "mb-0 -translate-x-40.5" : "mb-8 translate-x-0 "} transition-all duration-500`}
            >
              <div
                className={`ml-16 ${!isOpen ? "opacity-0" : "opacity-100"} transition-all duration-200`}
              >
                <h1 className="text-dark mb-1 text-center text-2xl font-semibold">
                  {/* {admin.username} */} Steve
                </h1>
                <p className="bg-accent text-secondary mx-auto w-fit rounded-full px-3 py-1 text-xs">
                  {/* {admin.role} */} Superadmin
                </p>
              </div>
              <button
                onClick={() => {
                  setIsOpen(!isOpen);
                  setIsOpenDropM(false);
                }}
                type="button"
                className="cursor-pointer items-center focus:outline-none"
              >
                {!isOpen ? (
                  <BsList className="text-dark mx-2.5 size-5" />
                ) : (
                  <BsX className="text-dark mx-2.5 size-5" />
                )}
              </button>
            </div>
            <ul className="mb-2.5 space-y-2.5 font-medium">
              {/* Dashboard */}
              <li>
                <NavLink to="dashboard" className="sideMenu group relative">
                  <div
                    onClick={
                      isMd
                        ? () => setIsOpenDropM(false)
                        : () => {
                            setIsOpenDropM(false);
                            setIsOpen(false);
                          }
                    }
                    className="text-dark hover:bg-secondary relative flex w-full items-center overflow-hidden rounded-md py-2"
                  >
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
                <NavLink
                  className={
                    isPostSection && !isOpenDropM ? "sideMenu activeDMenu" : ""
                  }
                  to="postBlog"
                >
                  <div
                    type="button"
                    onClick={() => setIsOpenDropM(!isOpenDropM)}
                    className="text-dark hover:bg-secondary flex w-full items-center overflow-hidden rounded-md py-2"
                  >
                    <BsPlusSquare className="text-dark group-hover:text-accent mx-3 shrink-0 stroke-1 transition duration-75" />
                    <span className="group-hover:text-primary ml-0.5 w-full text-left">
                      Post
                    </span>
                    <BsChevronDown
                      className={`mr-3 stroke-1 text-lg ${isOpenDropM ? "-rotate-180" : ""} transition duration-500`}
                    />
                  </div>
                </NavLink>
                {!isOpen && !isOpenDropM && (
                  <span className="text-accent! pointer-events-none absolute top-1/2 left-full ml-3 -translate-y-1/2 scale-90 rounded bg-white px-2 py-1 text-xs whitespace-nowrap opacity-0 shadow transition-all duration-200 group-hover:scale-100 group-hover:opacity-100">
                    Post
                  </span>
                )}
                {isOpenDropM && (
                  <div
                    className={` ${!isOpen ? "shadow-soft absolute top-0 left-full ml-3 w-30 rounded bg-white px-1 " : " ml-7"}`}
                    ref={!isMd || !isOpen ? dropBarRef : null}
                  >
                    <div className="relative">
                      <button
                        onClick={() => setIsOpenDropM(!isOpenDropM)}
                        type="button"
                        className={`absolute top-1 right-0 cursor-pointer transition duration-200 hover:scale-110 ${!isOpen ? "block" : "hidden"}`}
                      >
                        <BsX />
                      </button>

                      <span
                        className={`text-accent! px-2 py-2 text-sm whitespace-nowrap ${!isOpen ? "block" : "hidden"}`}
                      >
                        Post
                      </span>
                    </div>
                    <ul
                      className={`space-y-2 py-2 ${!isOpen ? "text-xs" : "text-sm"}`}
                    >
                      <li>
                        <NavLink className="sideMenu" to="postBlog">
                          <div
                            onClick={
                              !isOpen || !isMd
                                ? () => setIsOpenDropM(false)
                                : null
                            }
                            className="text-dark group hover:bg-secondary flex w-full items-center rounded-lg py-2 transition duration-75"
                          >
                            <BsFileText className="text-dark mr-2 ml-3 shrink-0 transition duration-75" />
                            <span className="group-hover:text-primary text-nowrap">
                              Post Blog
                            </span>
                          </div>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="sideMenu" to="postImage">
                          <div
                            onClick={
                              !isOpen || !isMd
                                ? () => setIsOpenDropM(false)
                                : null
                            }
                            className="text-dark group hover:bg-secondary flex w-full items-center rounded-lg py-2 transition duration-75"
                          >
                            <BsImage className="text-dark mr-2 ml-3 shrink-0 transition duration-75" />
                            <span className="group-hover:text-primary text-nowrap">
                              Post Image
                            </span>
                          </div>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              {/* Delete */}
              <li>
                <NavLink className="sideMenu group relative" to="delete">
                  <div
                    onClick={
                      isMd
                        ? () => setIsOpenDropM(false)
                        : () => {
                            setIsOpenDropM(false);
                            setIsOpen(false);
                          }
                    }
                    className="text-dark group hover:bg-secondary flex w-full items-center overflow-hidden rounded-md py-2"
                  >
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
                className={`text-dark mx-3 overflow-hidden font-medium text-nowrap ${!isOpen ? "absolute opacity-0" : "mt-10 mb-4 opacity-100"} transition-all duration-200`}
              >
                SUPER ADMIN
              </h2>
              <ul className="space-y-2.5 font-medium">
                {/* Manage Admin */}
                <li>
                  <NavLink className="sideMenu group relative" to="manageAdmin">
                    <div
                      onClick={
                        isMd
                          ? () => setIsOpenDropM(false)
                          : () => {
                              setIsOpenDropM(false);
                              setIsOpen(false);
                            }
                      }
                      className="text-dark group hover:bg-secondary flex w-full items-center overflow-hidden rounded-md py-2"
                    >
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
                    <div
                      onClick={
                        isMd
                          ? () => setIsOpenDropM(false)
                          : () => {
                              setIsOpenDropM(false);
                              setIsOpen(false);
                            }
                      }
                      className="text-dark group hover:bg-secondary flex w-full items-center overflow-hidden rounded-md py-2"
                    >
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

            <div className="group relative mt-10">
              <Link>
                <Logout />
                {!isOpen && (
                  <span className="text-danger! pointer-events-none absolute top-1/2 left-full ml-3 -translate-y-1/2 scale-90 rounded bg-white px-2 py-1 text-xs whitespace-nowrap opacity-0 shadow transition-all duration-200 group-hover:scale-100 group-hover:opacity-100">
                    Logout
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
