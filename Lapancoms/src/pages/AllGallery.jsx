import BackBtn from "../components/common/BackBtn";
import GalleryCard from "../components/common/GalleryCard";
import { Link, useLocation } from "react-router-dom";
import { GalleryContext } from "../api/content/ContentContext";
import { useContext, useState } from "react";

export default function AllGallery() {
  const location = useLocation();
  const fromFeature = location.state?.fromFeature; //dapat dari state Link
  let url = "/admin";
  if (fromFeature === "view") {
    url = "../dashboard";
  } else if (fromFeature === "delete") {
    url = "../delete";
  } else {
    console.log("error");
  }

  const { gallerys } = useContext(GalleryContext);
  const [gallery, setGallery] = useState({});
  return (
    <div className="mt-10">
      <div className="mb-5 flex justify-between">
        <h2 className="text-dark text-2xl font-medium">All Gallery</h2>
        <Link to={url} replace>
          <div className="">
            <BackBtn />
          </div>
        </Link>
      </div>
      <div className="flex flex-wrap justify-center gap-x-3 gap-y-5">
        {gallerys.slice(0, 8).map((data, index) => (
          <div onClick={() => setGallery(data)}>
            <GalleryCard
              key={index}
              gambar={`http://localhost:8000/storage/${data.namaGambar}`}
              title={data.judulGambar}
              author={data.admin.username}
              data={gallery}
              fromFeature={fromFeature}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
