import { useEffect, useState } from "react";
import galleryApi from "../api/galleryApi";
import BackBtn from "../components/common/BackBtn";
import GalleryCard from "../components/common/GalleryCard";
import { Link } from "react-router-dom";

export default function AllGallery() {
  const [gallerys, setGallerys] = useState([]);
  const [gallery, setGallery] = useState({});

  async function loadGallery() {
    const { data } = await galleryApi.getAll();
    setGallerys(data);
  }

  useEffect(() => {
    loadGallery();
  }, []);

  return (
    <div className="mx-5 mb-12">
      <div className="mb-4 flex justify-between">
        <h2 className="text-3xl">All Gallery</h2>
        <Link to="/admin/dashboard" replace>
          <div className="mr-12">
            <BackBtn />
          </div>
        </Link>
      </div>
      <div className="card-container">
        {gallerys.map((data, index) => (
          <div onClick={() => setGallery(data)}>
            <GalleryCard
              key={index}
              gambar={`${data.image_url}`}
              title={data.judulGambar}
              author={data.admin.username}
              data={gallery}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
