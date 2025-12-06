import { useState } from "react";
import { BsTrash } from "react-icons/bs";
import BtnDeleteM from "./BtnDeleteM";

export default function GalleryView({
  setViewGallery,
  fromFeature,
  data,
  target,
}) {
  const [viewDelate, setViewDelate] = useState(false);

  const handleDelete = () => {
    console.log("Hallo");
  };
  return (
    <div className="bg-dark/70 fixed inset-0 z-50 flex items-center justify-center">
      <div className="relative z-50 w-xs overflow-hidden rounded-2xl sm:w-md md:h-[422px] md:w-3xl lg:h-[550px] lg:w-4xl">
        <button
          onClick={() => setViewGallery(false)}
          type="button"
          className="md:text-primary hover:text-tertiary hover:text-danger md: absolute top-4 right-4 z-50 inline-flex size-3 cursor-pointer items-center justify-center bg-transparent text-sm text-white transition duration-500 hover:scale-110 md:size-4"
        >
          <svg
            className=""
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
        <div className="group flex h-full w-full">
          <div className="bg-dark h-full w-full transition duration-500 md:w-7/12">
            {/* <img
              src={url_img}
              className="h-full w-full object-cover opacity-60 transition-all duration-600 group-hover:scale-105"
              alt="viewGallery"
            /> */}
          </div>
          <div className="bg-dark/80 group-hover:bg-dark/20 absolute bottom-0 left-0 w-full px-10 py-4 transition duration-500 group-hover:translate-y-2 md:top-0 md:right-0 md:left-auto md:w-5/12 md:bg-white md:group-hover:translate-y-0 md:group-hover:bg-white">
            <h3 className="md:text-primary mb-2 truncate text-xl font-bold wrap-break-word text-white sm:text-2xl md:mt-7 md:mb-5 md:text-4xl">
              {target.role}
            </h3>
            <p className="md:text-primary text-xs font-medium text-white md:text-base">
              {target.username}
            </p>
          </div>
        </div>
        {fromFeature === "delete" && (
          <button
            onClick={() => {
              setViewDelate(true);
            }}
            className="bg-secondary border-danger/20 group absolute right-4 bottom-4 w-19 cursor-pointer overflow-hidden rounded-2xl border py-1 text-left md:w-26 md:py-1.5"
          >
            <span className="bg-danger absolute top-0 bottom-0 left-0 w-19 rounded-2xl transition duration-600 group-hover:translate-x-6 md:w-26 md:group-hover:translate-x-8"></span>
            <span className="text-danger absolute top-1/2 left-1.5 -translate-y-1/2 scale-110 text-sm opacity-0 transition duration-500 group-hover:opacity-100 md:text-lg">
              <BsTrash />
            </span>
            <span className="group-hover:text-secondary relative z-1 block w-19 text-center text-xs text-white transition duration-600 group-hover:translate-x-3 md:w-26 md:text-base md:group-hover:translate-x-4">
              Delete
            </span>
          </button>
        )}
      </div>
      <BtnDeleteM
        content={"gallery"}
        handleDelete={handleDelete}
        view={viewDelate}
        setView={setViewDelate}
      />
    </div>
  );
}
