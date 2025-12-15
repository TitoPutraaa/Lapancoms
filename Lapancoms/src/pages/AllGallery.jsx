import BackBtn from "../components/common/BackBtn";
import GalleryCard from "../components/common/GalleryCard";
import { Link, useLocation } from "react-router-dom";
import { GalleryContext } from "../api/content/ContentContext";
import { useEffect, useState } from "react";
import GalleryView from "../components/common/GalleryView.jsx";
import galleryApi from "../api/galleryApi.js";

export default function AllGallery() {
  const location = useLocation();
  const fromFeature = location.state?.fromFeature; //dapat dari state Link
  const [viewGallery, setViewGallery] = useState(false);
  const [gallery, setGallery] = useState({});

  const [gallerys, setGallerys] = useState([]);

  const loadGallery = async () => {
    try {
      const fetchGallerys = await galleryApi.getAll();
      setGallerys(fetchGallerys.data.data);
    } catch (error) {
      console.error("Error loading admins:", error);
    }
  };

  useEffect(() => {
    loadGallery();
  }, []);

  let url = "/admin";
  if (fromFeature === "view") {
    url = "../dashboard";
  } else if (fromFeature === "delete") {
    url = "../delete";
  } else {
    console.log("error");
  }

  return (
    <>
      <div className="mt-10">
        <div className="mb-5 flex justify-between">
          <h2 className="text-dark text-2xl font-medium">All Gallery</h2>
          <Link to={url} replace>
            <div className="">
              <BackBtn />
            </div>
          </Link>
        </div>
        <div className="flex flex-wrap gap-x-2 gap-y-4">
          {gallerys.map((data, index) => (
            <div
              onClick={() => {
                (setViewGallery(true), setGallery(data));
              }}
            >
              <GalleryCard
                key={index}
                title={data.judulGambar}
                image={data.namaGambar}
                author={data.username}
                fromFeature={fromFeature}
              />
            </div>
          ))}
        </div>
      </div>
      {viewGallery && (
        <GalleryView
          setViewGallery={setViewGallery}
          fromFeature={fromFeature}
          data={gallery}
        />
      )}
    </>
  );
}
