import { useRef, useState } from "react";
import { BsTrash, BsX } from "react-icons/bs";
import BtnDeleteM from "./BtnDeleteM";
// import useClickOutside from "../../hooks/useClickOutside";

export default function GalleryView({
  setViewGallery,
  fromFeature,
  onDel,
  data,
}) {
  const [viewDelate, setViewDelate] = useState(false);
  const modalImgRef = useRef(null);
  console.log("FF gal", fromFeature);

  // useClickOutside(modalImgRef, () => setViewGallery(false));
  const url = `http://127.0.0.1:8000/storage/galery/${data.namaGambar}`;

  return (
    <div className="bg-dark/90 fixed inset-0 z-110 flex items-center justify-center">
      <div
        ref={modalImgRef}
        className="relative z-50 w-xs overflow-hidden rounded-2xl sm:w-md md:h-[422px] md:w-3xl lg:h-[550px] lg:w-4xl"
      >
        <button
          onClick={() => setViewGallery(false)}
          type="button"
          className="md:text-primary hover:text-danger absolute top-3 right-3 z-50 cursor-pointer bg-transparent text-white transition duration-500 hover:scale-110"
        >
          <BsX className="text-2xl" />
        </button>
        <div className="group flex h-full w-full">
          <div className="bg-dark h-full w-full transition duration-500 md:w-7/12">
            <img
              src={url}
              className="h-full w-full object-cover opacity-60 transition-all duration-600 group-hover:scale-105"
              alt="viewGallery"
            />
          </div>
          <div className="bg-dark/80 group-hover:bg-dark/20 absolute bottom-0 left-0 w-full px-10 py-4 transition duration-500 group-hover:translate-y-2 md:top-0 md:right-0 md:left-auto md:w-5/12 md:bg-white md:group-hover:translate-y-0 md:group-hover:bg-white">
            <h3 className="md:text-primary mb-2 truncate text-xl font-bold wrap-break-word text-white sm:text-2xl md:mt-7 md:mb-5 md:text-4xl">
              {data.judulGambar}
            </h3>
            <p className="md:text-primary text-xs font-medium text-white md:text-base">
              {data.username}
            </p>
          </div>
        </div>
        {fromFeature === "delete" && (
          <button
            onClick={() => {
              {
                setViewDelate(true);
              }
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
        view={viewDelate}
        onDel={onDel}
        setView={setViewDelate}
        targetId={data.idGambar}
      />
    </div>
  );
}
