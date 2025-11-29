import BlogCard from "../components/common/BlogCard";
import GalleryCard from "../components/common/GalleryCard";
import BlogViewAll from "../components/common/BlogViewAll";
import GalleryViewAll from "../components/common/GalleryViewAll";
import { blogData } from "../assets/DataDummy.jsx";
import galleryApi from "../api/galleryApi.js";
import "../index.css";
import { useEffect, useState } from "react";

export default function Dashboard() {
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
    <div>
      <div className="mx-5 mb-12 h-full">
        <div className="mb-4 flex justify-between">
          <h2 className="text-3xl">Blog</h2>
          <BlogViewAll />
        </div>
        <div className="card-container">
          {blogData.slice(0, 4).map((data) => (
            <BlogCard
              key={data.title}
              title={data.title}
              date={data.date}
              author={data.author}
            />
          ))}
        </div>
      </div>
      <div className="mx-5 mb-12">
        <div className="mb-4 flex justify-between">
          <h2 className="text-3xl">Gallery</h2>
          <GalleryViewAll />
        </div>
        <div className="card-container">
          {gallerys.slice(0, 3).map((data, index) => (
            <div onClick={() => setGallery(data)}>
              <GalleryCard
                key={index}
                title={data.judulGambar}
                author={data.admin.username}
                data={gallery}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
