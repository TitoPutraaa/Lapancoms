import { useState, useRef, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useClickOutside from "../../hooks/useClickOutside";
import { AdminContext } from "../../auth/AdminContext";
import Logout from "../common/Logout";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDropM, setIsOpenDropM] = useState(false);
  const navigate = useNavigate();
  const sidebarRef = useRef(null);
  const { admin } = useContext(AdminContext);

  useClickOutside(sidebarRef, () => setIsOpen(false));
  return (
    <>
      <div className="sticky z-99 flex h-screen w-fit pb-10">
        <button
          onClick={() => setIsOpen(true)}
          type="button"
          className={`z-10 cursor-pointer items-center focus:outline-none sm:hidden ${
            isOpen ? "hidden" : "fixed"
          }`}
        >
          <svg
            className="text-primary h-6 w-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>

        <div
          className={`${isOpen ? "bg-dark/80 fixed inset-0 z-998 backdrop-blur-xs " : ""}`}
        >
          <aside
            className={`top-4 bottom-4 z-999 max-w-64 shrink-0 rounded-2xl bg-white transition-transform lg:static lg:h-full lg:translate-x-0 lg:overflow-visible ${
              isOpen
                ? "fixed left-4 translate-x-0"
                : "fixed left-0 -translate-x-full overflow-hidden"
            } `}
            aria-label="Sidebar"
            ref={sidebarRef}
          >
            <button
              onClick={() => setIsOpen(false)}
              type="button"
              className="text-dark hover:text-primary absolute top-2 right-3 inline-flex h-8 w-8 items-center justify-center bg-transparent text-sm lg:hidden"
            >
              <svg
                className="h-3 w-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
            <div className="shadow-soft h-full w-full overflow-y-auto rounded-2xl px-3 py-4">
              <div className="mt-6 mb-10">
                <h1 className="text-dark mb-2 text-center text-2xl font-medium">
                  {/* {admin.username} */}
                </h1>
                <p className="bg-secondary mx-auto w-fit rounded-full px-2 py-0.5 text-xs">
                  {/* {admin.role} */}
                </p>
              </div>

              {/* Dashboard */}
              <div>
                <ul className="space-y-2.5 font-medium">
                  <li>
                    <NavLink className="sideMenu" to="dashboard">
                      <div className="text-dark group hover:bg-secondary flex w-full items-center rounded-lg p-2">
                        <svg
                          className="text-dark group-hover:text-accent h-4.5 w-4.5 shrink-0 transition duration-75"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 18 18"
                        >
                          <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                        </svg>
                        <span className="group-hover:text-primary ms-3">
                          Dashboard
                        </span>
                      </div>
                    </NavLink>
                  </li>
                  {/* Post */}
                  <li className="relative">
                    <button
                      type="button"
                      onClick={() => {
                        setIsOpenDropM(!isOpenDropM);
                        navigate("/admin/postBlog");
                      }}
                      className="sideMenu text-dark group hover:bg-secondary flex w-full items-center rounded-lg p-2 text-base transition duration-75"
                    >
                      <svg
                        className="text-dark group-hover:text-accent h-5 w-5 shrink-0 transition duration-75"
                        viewBox="2 2 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="Edit / Add_Plus_Square">
                          <path
                            id="Vector"
                            d="M8 12H12M12 12H16M12 12V16M12 12V8M4 16.8002V7.2002C4 6.08009 4 5.51962 4.21799 5.0918C4.40973 4.71547 4.71547 4.40973 5.0918 4.21799C5.51962 4 6.08009 4 7.2002 4H16.8002C17.9203 4 18.4801 4 18.9079 4.21799C19.2842 4.40973 19.5905 4.71547 19.7822 5.0918C20.0002 5.51962 20.0002 6.07967 20.0002 7.19978V16.7998C20.0002 17.9199 20.0002 18.48 19.7822 18.9078C19.5905 19.2841 19.2842 19.5905 18.9079 19.7822C18.4805 20 17.9215 20 16.8036 20H7.19691C6.07899 20 5.5192 20 5.0918 19.7822C4.71547 19.5905 4.40973 19.2842 4.21799 18.9079C4 18.4801 4 17.9203 4 16.8002Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                      </svg>

                      <span className="group-hover:text-primary ms-3 flex-1 text-left whitespace-nowrap rtl:text-right">
                        Post
                      </span>
                      <svg
                        className="h-3 w-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button>
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
                    <NavLink className="sideMenu" to="delete">
                      <div className="text-dark group hover:bg-secondary flex w-full items-center rounded-lg p-2">
                        <svg
                          className="text-dark group-hover:text-accent h-5 w-5 shrink-0 transition duration-75"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.75 6.16667C2.75 5.70644 3.09538 5.33335 3.52143 5.33335L6.18567 5.3329C6.71502 5.31841 7.18202 4.95482 7.36214 4.41691C7.36688 4.40277 7.37232 4.38532 7.39185 4.32203L7.50665 3.94993C7.5769 3.72179 7.6381 3.52303 7.72375 3.34536C8.06209 2.64349 8.68808 2.1561 9.41147 2.03132C9.59457 1.99973 9.78848 1.99987 10.0111 2.00002H13.4891C13.7117 1.99987 13.9056 1.99973 14.0887 2.03132C14.8121 2.1561 15.4381 2.64349 15.7764 3.34536C15.8621 3.52303 15.9233 3.72179 15.9935 3.94993L16.1083 4.32203C16.1279 4.38532 16.1333 4.40277 16.138 4.41691C16.3182 4.95482 16.8778 5.31886 17.4071 5.33335H19.9786C20.4046 5.33335 20.75 5.70644 20.75 6.16667C20.75 6.62691 20.4046 7 19.9786 7H3.52143C3.09538 7 2.75 6.62691 2.75 6.16667Z"
                            fill="currentColor"
                          />
                          <path
                            d="M11.6068 21.9998H12.3937C15.1012 21.9998 16.4549 21.9998 17.3351 21.1366C18.2153 20.2734 18.3054 18.8575 18.4855 16.0256L18.745 11.945C18.8427 10.4085 18.8916 9.6402 18.45 9.15335C18.0084 8.6665 17.2628 8.6665 15.7714 8.6665H8.22905C6.73771 8.6665 5.99204 8.6665 5.55047 9.15335C5.10891 9.6402 5.15777 10.4085 5.25549 11.945L5.515 16.0256C5.6951 18.8575 5.78515 20.2734 6.66534 21.1366C7.54553 21.9998 8.89927 21.9998 11.6068 21.9998Z"
                            fill="currentColor"
                          />
                        </svg>
                        <span className="group-hover:text-primary ms-3">
                          Delete
                        </span>
                      </div>
                    </NavLink>
                  </li>
                </ul>
              </div>

              {/* SuperAdmin */}
              {admin.role === "superadmin" && (
                <div className="mt-10">
                  <h2 className="text-dark mb-4 font-medium">SUPER ADMIN</h2>
                  <ul className="space-y-2.5 font-medium">
                    {/* Manage Admin */}
                    <li>
                      <NavLink className="sideMenu" to="manageAdmin">
                        <div className="text-dark group hover:bg-secondary flex w-full items-center rounded-lg p-2">
                          <svg
                            className="text-dark group-hover:text-accent h-5 w-5 shrink-0 transition duration-75"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g id="File / Folder_Edit">
                              <path
                                id="Vector"
                                d="M21 9.25V9.2C21 8.0799 21 7.51984 20.782 7.09202C20.5903 6.7157 20.2843 6.40974 19.908 6.21799C19.4802 6 18.9201 6 17.8 6L3 6M3 6L3 16.8C3 17.9201 3 18.4802 3.21799 18.908C3.40973 19.2843 3.7157 19.5903 4.09202 19.782C4.51984 20 5.0799 20 6.2 20H7M3 6L3 5.6C3 5.03995 3 4.75992 3.109 4.54601C3.20487 4.35785 3.35785 4.20487 3.54601 4.10899C3.75992 4 4.03995 4 4.6 4H9.33726C9.58185 4 9.70415 4 9.81923 4.02763C9.92127 4.05213 10.0188 4.09253 10.1083 4.14736C10.2092 4.2092 10.2957 4.29568 10.4686 4.46863L12 6M16 14L18 16M11 21V18.5L18.5 11L21 13.5L13.5 21H11Z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </g>
                          </svg>
                          <span className="group-hover:text-primary ms-3">
                            Manage Admin
                          </span>
                        </div>
                      </NavLink>
                    </li>
                    {/* Update LPage */}
                    <li>
                      <NavLink className="sideMenu" to="updateLandingPage">
                        <div className="text-dark group hover:bg-secondary flex w-full items-center rounded-lg p-2">
                          <svg
                            className="text-dark group-hover:text-accent h-5 w-5 shrink-0 transition duration-75"
                            fill="currentColor"
                            viewBox="0 0 1024 1024"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M536.1 273H488c-4.4 0-8 3.6-8 8v275.3c0 2.6 1.2 5 3.3 6.5l165.3 120.7c3.6 2.6 8.6 1.9 11.2-1.7l28.6-39c2.7-3.7 1.9-8.7-1.7-11.2L544.1 528.5V281c0-4.4-3.6-8-8-8zm219.8 75.2l156.8 38.3c5 1.2 9.9-2.6 9.9-7.7l.8-161.5c0-6.7-7.7-10.5-12.9-6.3L752.9 334.1a8 8 0 0 0 3 14.1zm167.7 301.1l-56.7-19.5a8 8 0 0 0-10.1 4.8c-1.9 5.1-3.9 10.1-6 15.1-17.8 42.1-43.3 80-75.9 112.5a353 353 0 0 1-112.5 75.9 352.18 352.18 0 0 1-137.7 27.8c-47.8 0-94.1-9.3-137.7-27.8a353 353 0 0 1-112.5-75.9c-32.5-32.5-58-70.4-75.9-112.5A353.44 353.44 0 0 1 171 512c0-47.8 9.3-94.2 27.8-137.8 17.8-42.1 43.3-80 75.9-112.5a353 353 0 0 1 112.5-75.9C430.6 167.3 477 158 524.8 158s94.1 9.3 137.7 27.8A353 353 0 0 1 775 261.7c10.2 10.3 19.8 21 28.6 32.3l59.8-46.8C784.7 146.6 662.2 81.9 524.6 82 285 82.1 92.6 276.7 95 516.4 97.4 751.9 288.9 942 524.8 942c185.5 0 343.5-117.6 403.7-282.3 1.5-4.2-.7-8.9-4.9-10.4z" />
                          </svg>
                          <span className="group-hover:text-primary ms-3">
                            Update Landing Page
                          </span>
                        </div>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              )}
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
                <Link>
                  <Logout />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
