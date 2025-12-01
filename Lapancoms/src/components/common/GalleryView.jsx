import { useEffect, useState } from "react";
import { imgData } from "../../assets/DataDummy";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { BsTrash } from "react-icons/bs";

export default function GalleryView() {
  const { id } = useParams();
  const [gallery, setGallery] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const galleryData = imgData.find((b) => b.idGambar === Number(id));
    setGallery(galleryData);
  }, [id]);

  const location = useLocation();
  const fromFeature = location.state?.fromFeature;
  let url = "/admin";
  if (fromFeature === "dashboard") {
    url = "../dashboard";
  } else if (fromFeature === "delete") {
    url = "../delete";
  } else {
    console.log("error");
  }

  if (!gallery) return <div>Loading...</div>;
  return (
    <div className="bg-dark/40 fixed inset-0 z-50 flex items-center justify-center">
      <div className="relative z-50 w-xs overflow-hidden rounded-2xl sm:w-md md:h-[422px] md:w-3xl lg:h-[550px] lg:w-4xl">
        <button
          onClick={() => navigate(url)}
          type="button"
          className="md:text-primary hover:text-tertiary hover:text-danger absolute top-2 right-3 z-50 inline-flex h-8 w-8 cursor-pointer items-center justify-center bg-transparent text-sm text-white transition duration-500 hover:scale-110"
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
        <div className="group flex">
          <div className="bg-dark w-full">
            <img
              src={gallery.namaGambar}
              className="h-full w-full object-cover opacity-60 transition duration-600 group-hover:scale-105"
              alt="viewGallery"
            />
          </div>
          <div className="bg-dark/80 group-hover:bg-dark/20 absolute bottom-0 left-0 w-full px-10 py-4 transition duration-500 group-hover:translate-y-2 md:w-1/2 md:bg-white md:p-10">
            <h1 className="md:text-primary mb-2 text-xl font-bold text-white sm:text-2xl md:mb-5 md:text-4xl">
              {gallery.title}
            </h1>
            <p className="md:text-primary text-xs font-medium text-white md:text-base">
              {gallery.author}
            </p>
          </div>
        </div>
        <button className="bg-secondary border-danger/20 group absolute right-4 bottom-4 w-19 cursor-pointer overflow-hidden rounded-2xl border py-0.5 text-left leading-none md:w-20">
          <span className="bg-danger absolute top-0 bottom-0 left-0 w-19 rounded-2xl transition duration-600 group-hover:translate-x-6 md:w-20"></span>
          <span className="text-danger absolute top-1/2 left-1.5 -translate-y-1/2 scale-110 text-sm opacity-0 transition duration-500 group-hover:opacity-100 md:text-base">
            <BsTrash />
          </span>
          <span className="group-hover:text-secondary relative z-1 block w-19 text-center text-xs text-white transition duration-600 group-hover:translate-x-3 md:text-sm">
            Delete
          </span>
        </button>
      </div>
    </div>
  );
}
