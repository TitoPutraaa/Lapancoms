// import "../../index.css";
import { useState } from "react";
// import imgWisata from "../assets/images/image.png";

export default function Sidebar({ content }) {
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="relative flex p-4">
        <button
          onClick={() => setIsOpen(true)}
          type="button"
          className={`z-10 items-center text-sm text-dark rounded-lg lg:hidden focus:outline-none focus:ring-2 focus:ring-secondary cursor-pointer ${
            isOpen ? "hidden" : "fixed"
          }`}
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-6 h-6 text-primary"
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
        {/* <div className="lg:block w-64 rounded-2xl hidden"></div> */}
        <aside
          className={`lg:static shrink-0  top-4 left-4 bottom-4 z-40 w-64 bg-white transition-transform lg:translate-x-0 rounded-2xl lg:overflow-visible mr-6 ${
            isOpen
              ? "fixed translate-x-0  "
              : "fixed -translate-x-full overflow-hidden"
          } `}
          aria-label="Sidebar"
        >
          <button
            onClick={() => setIsOpen(false)}
            type="button"
            class={`lg:hidden text-dark bg-transparent hover:text-primary text-sm w-8 h-8  inline-flex justify-center items-center top-2 right-3 absolute`}
          >
            <svg
              class="w-3 h-3"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
          <div className="h-full px-3 py-4 overflow-y-auto rounded-2xl shadow-soft w-full">
            <div className="mt-8 mb-10">
              <h1 className="text-dark text-center font-medium text-2xl mb-2">
                Leonard
              </h1>
              <p className=" bg-tertiary text-xs w-fit rounded-full px-2 py-0.5 mx-auto">
                Admin
              </p>
            </div>
            <ul className="space-y-2.5 font-medium">
              {/* Dashboard */}
              <li>
                <button
                  type="button"
                  onClick={() => setActiveMenu("dashboard")}
                  className={`sideMenu w-full flex items-center p-2 text-dark rounded-lg group hover:bg-secondary ${
                    activeMenu === "dashboard" ? "active" : ""
                  }`}
                >
                  <svg
                    className="w-5 h-5 text-dark transition duration-75  group-hover:text-tertiary "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 21"
                  >
                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                  </svg>
                  <span className="ms-3 group-hover:text-primary">
                    Dashboard
                  </span>
                </button>
              </li>
              {/* Post */}
              <li>
                <button
                  type="button"
                  onClick={() => setActiveMenu("post")}
                  className={`sideMenu flex items-center w-full p-2 text-base text-dark transition duration-75 rounded-lg group hover:bg-secondary  ${
                    activeMenu === "post" ? "active" : ""
                  }`}
                  aria-controls="dropdown-example"
                  data-collapse-toggle="dropdown-example"
                >
                  <svg
                    className="shrink-0 w-5 h-5 text-dark transition duration-75 group-hover:text-tertiary  "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 21"
                  >
                    <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                  </svg>
                  <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap group-hover:text-primary">
                    Post
                  </span>
                  <svg
                    className="w-3 h-3"
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
                <ul id="dropdown-example" className="hidden py-2 space-y-2 ">
                  <li>
                    <button
                      type="button"
                      onClick={() => setActiveMenu("subpost1")}
                      className={`sideMenu flex items-center w-full p-2 text-dark transition duration-75 rounded-lg pl-11 group hover:bg-secondary ${
                        activeMenu === "subpost1" ? "active" : ""
                      }`}
                    >
                      <span className="group-hover:text-primary ">
                        Post Blog
                      </span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => setActiveMenu("subpost2")}
                      className={`sideMenu flex items-center w-full p-2 text-dark transition duration-75 rounded-lg pl-11 group hover:bg-secondary ${
                        activeMenu === "subpost2" ? "active" : ""
                      }`}
                    >
                      <span className="group-hover:text-primary">
                        Post Image
                      </span>
                    </button>
                  </li>
                </ul>
              </li>
              {/* Delete */}
              <li>
                <button
                  type="button"
                  onClick={() => setActiveMenu("delete")}
                  className={`w-full sideMenu flex items-center p-2 text-dark rounded-lg group hover:bg-secondary ${
                    activeMenu === "delete" ? "active" : ""
                  }`}
                >
                  <svg
                    className="shrink-0 w-5 h-5 text-dark transition duration-75  group-hover:text-tertiary "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 18"
                  >
                    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                  </svg>
                  <span className="ms-3  group-hover:text-primary ">
                    Delete
                  </span>
                </button>
              </li>
            </ul>

            {/* SuperAdmin */}
            <div className="mt-16">
              <h2 className="mb-4 font-medium text-dark">SUPER ADMIN</h2>
              <ul className="space-y-2.5 font-medium">
                {/* Manage Admin */}
                <li>
                  <button
                    type="button"
                    onClick={() => setActiveMenu("manageAdmin")}
                    className={`sideMenu w-full flex items-center p-2 text-dark rounded-lg group hover:bg-secondary ${
                      activeMenu === "manageAdmin" ? "active" : ""
                    }`}
                  >
                    <svg
                      className="shrink-0 w-5 h-5 text-dark transition duration-75  group-hover:text-tertiary "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                    </svg>
                    <span className=" ms-3 group-hover:text-primary">
                      Manage Admin
                    </span>
                  </button>
                </li>
                {/* Update LPage */}
                <li>
                  <button
                    type="button"
                    onClick={() => setActiveMenu("updateLPage")}
                    className={`sideMenu w-full flex items-center p-2 text-dark rounded-lg group hover:bg-secondary ${
                      activeMenu === "updateLPage" ? "active" : ""
                    }`}
                  >
                    <svg
                      className="shrink-0 w-5 h-5 text-dark transition duration-75  group-hover:text-tertiary "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 18"
                    >
                      <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                    </svg>
                    <span className="ms-3  group-hover:text-primary">
                      Update Landing Page
                    </span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </aside>

        <div className="w-full mt-7">{content}</div>
      </div>
    </>
  );
}
