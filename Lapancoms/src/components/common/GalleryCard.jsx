import { useState } from "react";
import { assets } from "../../assets/assets.js";
import ViewGallery from "./viewGallery.jsx";

export default function BlogCard({ title, author }) {
  const [view, setView] = useState(false);
  return (
    <div>
      <div className="max-w-3xs rounded-3xl border border-gray-200 bg-white shadow-xl/20">
        <div className="relative">
          <img className="rounded-3xl" src={assets.blogCardImg} alt="" />
        </div>

        <div className="p-5">
          <h5 className="mb-2 flex items-start text-2xl tracking-tight text-gray-900">
            {title}
          </h5>

          <div className="flex justify-between">
            <p className="font-normal text-gray-900">{author}</p>

            <div
              onClick={() => setView(true)}
              // href="#"
              className="bg-secondary inline-flex cursor-pointer items-center rounded-4xl px-5 py-1 text-center text-sm transition duration-700 ease-in-out"
            >
              View
              <svg
                className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <ViewGallery view={view} setView={setView} />
    </div>
  );
}
