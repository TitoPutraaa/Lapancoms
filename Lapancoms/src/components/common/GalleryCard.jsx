import { useState } from "react";
import { Link } from "react-router-dom";
import GalleryView from "./GalleryView";

export default function GalleryCard({
  idGambar,
  title,
  author,
  image,
  fromFeature,
}) {
  const [viewGallery, setViewGallery] = useState(false);

  return (
    <>
      <div className="shadow-soft max-w-40 shrink-0 overflow-hidden rounded-xl sm:max-w-52 lg:max-w-56">
        <div className="group relative h-36 overflow-hidden rounded-b-xl sm:h-46">
          <img
            src={image}
            alt="ImgBlog"
            className="h-full w-full object-cover transition duration-600 group-hover:scale-105"
          />
        </div>
        <div className="p-2 sm:p-3">
          <h3 className="text mb-2 truncate font-medium sm:text-lg lg:mb-2.5 lg:text-xl">
            {title}
          </h3>
          <div className="flex items-center justify-between">
            <p className="text-xs font-normal md:text-sm">{author}</p>

            <button
              onClick={() => setViewGallery(true)}
              className="bg-secondary border-primary/20 group relative w-19 cursor-pointer overflow-hidden rounded-2xl border py-0.5 text-left leading-none md:w-20"
            >
              <span className="bg-primary absolute top-0 bottom-0 left-0 w-13 -translate-x-full rounded-r-2xl transition duration-600 group-hover:translate-x-0 md:w-14"></span>
              <span className="text-primary group-hover:text-secondary relative z-1 ml-2 w-fit text-xs transition duration-500 md:text-sm">
                {fromFeature === "delete" ? "Select" : "View"}
              </span>
              <svg
                className="text-primary absolute top-1/2 right-2 ml-2 h-3 w-3 -translate-y-1/2 transition duration-500 group-hover:-rotate-45"
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
            </button>
          </div>
        </div>
        {viewGallery && (
          <GalleryView
            setViewGallery={setViewGallery}
            fromFeature={fromFeature}
            idGambar={idGambar}
          />
        )}
      </div>
    </>
  );
}
