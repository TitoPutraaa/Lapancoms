import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AdminContext } from "../../auth/AdminContext";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { admin } = useContext(AdminContext);
  return (
    <>
      <div className="relative flex w-fit p-4">
        <button
          onClick={() => setIsOpen(true)}
          type="button"
          className={`text-dark focus:ring-secondary z-10 cursor-pointer items-center rounded-lg text-sm focus:ring-2 focus:outline-none lg:hidden ${
            isOpen ? "hidden" : "fixed"
          }`}
        >
          <span className="sr-only">Open sidebar</span>
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
        <aside
          className={`top-4 bottom-4 left-4 z-40 w-64 shrink-0 rounded-2xl bg-white transition-transform lg:static lg:translate-x-0 lg:overflow-visible ${
            isOpen
              ? "fixed translate-x-0"
              : "fixed -translate-x-full overflow-hidden"
          } `}
          aria-label="Sidebar"
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
            <div className="mt-8 mb-10">
              <h1 className="text-dark mb-2 text-center text-2xl font-medium">
                {admin.username}
              </h1>
              <p className="bg-secondary mx-auto w-fit rounded-full px-2 py-0.5 text-xs">
                {admin.role}
              </p>
            </div>
            <ul className="space-y-2.5 font-medium">
              {/* Dashboard */}

              <li>
                <NavLink className="sideMenu" to="dashboard">
                  <div className="text-dark group hover:bg-secondary flex w-full items-center rounded-lg p-2">
                    <svg
                      className="text-dark group-hover:text-accent h-5 w-5 transition duration-75"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 21"
                    >
                      <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                      <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                    </svg>
                    <span className="group-hover:text-primary ms-3">
                      Dashboard
                    </span>
                  </div>
                </NavLink>
              </li>
              {/* Post */}
              <li>
                <button
                  type="button"
                  onClick={() => navigate("postBlog")}
                  className="sideMenu text-dark group hover:bg-secondary flex w-full items-center rounded-lg p-2 text-base transition duration-75"
                  aria-controls="dropdown-example"
                  data-collapse-toggle="dropdown-example"
                >
                  <svg
                    className="text-dark group-hover:text-accent h-5 w-5 shrink-0 transition duration-75"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 21"
                  >
                    <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
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
                <ul id="dropdown-example" className="hidden space-y-2 py-2">
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
              </li>
              {/* Delete */}
              <li>
                <NavLink className="sideMenu" to="delete">
                  <div className="text-dark group hover:bg-secondary flex w-full items-center rounded-lg p-2">
                    <svg
                      className="text-dark group-hover:text-accent h-5 w-5 shrink-0 transition duration-75"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 18 18"
                    >
                      <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                    </svg>
                    <span className="group-hover:text-primary ms-3">
                      Delete
                    </span>
                  </div>
                </NavLink>
              </li>
            </ul>

            {/* SuperAdmin */}
            <div className="mt-16">
              <h2 className="text-dark mb-4 font-medium">SUPER ADMIN</h2>
              <ul className="space-y-2.5 font-medium">
                {/* Manage Admin */}
                <li>
                  <NavLink className="sideMenu" to="manageAdmin">
                    <div className="text-dark group hover:bg-secondary flex w-full items-center rounded-lg p-2">
                      <svg
                        className="text-dark group-hover:text-accent h-5 w-5 shrink-0 transition duration-75"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
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
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 18"
                      >
                        <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                      </svg>
                      <span className="group-hover:text-primary ms-3">
                        Update Landing Page
                      </span>
                    </div>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
