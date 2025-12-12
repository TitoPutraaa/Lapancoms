import BackBtn from "../components/common/BackBtn";
import GalleryCard from "../components/common/GalleryCard";
import { Link, useLocation } from "react-router-dom";
import { GalleryContext } from "../api/content/ContentContext";
import { useContext, useState } from "react";
import GalleryView from "../components/common/GalleryView.jsx";

export default function AllGallery() {
  const location = useLocation();
  const fromFeature = location.state?.fromFeature; //dapat dari state Link
  const [viewGallery, setViewGallery] = useState(false);
  const { gallerys } = useContext(GalleryContext);
  const [gallery, setGallery] = useState({});

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
          {gallerys.slice(0, 8).map((data, index) => (
            <div
              onClick={() => {
                (setViewGallery(true), setGallery(data));
              }}
            >
              <GalleryCard
                key={index}
                title={data.judulGambar}
                gambar={`http://localhost:8000/storage/${data.namaGambar}`}
                author={data.admin.username}
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
