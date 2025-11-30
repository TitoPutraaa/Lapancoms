import BlogCard from "../components/common/BlogCard";
import GalleryCard from "../components/common/GalleryCard";
import BlogViewAll from "../components/common/BlogViewAll";
import GalleryViewAll from "../components/common/GalleryViewAll";
import { blogData } from "../assets/DataDummy.jsx";
import "../index.css";
import { useContext, useState } from "react";
import { GalleryContext } from "../api/content/ContentContext.jsx";

export default function Dashboard() {
  const { gallerys } = useContext(GalleryContext);
  const [gallery, setGallery] = useState({});

  return (
    <div>
      <div className="mx-5 mb-12 h-full">
        <div className="mb-4 flex justify-between">
          <h2 className="text-3xl">Blog</h2>
          <BlogViewAll />
        </div>
        <div className="card-container">
          {blogData.slice(0, 4).map((data, index) => (
            <BlogCard
              key={index}
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
          {gallerys.slice(0, 3).map((data) => (
            <div onClick={() => setGallery(data)}>
              <GalleryCard
                key={data.idGambar}
                title={data.judulGambar}
                gambar={`${data.image_url}`}
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
