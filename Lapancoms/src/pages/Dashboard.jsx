import GalleryCard from "../components/common/GalleryCard";
import { blogData } from "../assets/DataDummy.jsx";
import { Link, Outlet, useLocation } from "react-router-dom";
import BlogCardV2 from "../components/common/BlogCardV2.jsx";
import BtnViewAll from "../components/common/BtnViewAll.jsx";
import { useContext, useState } from "react";
import { GalleryContext } from "../api/content/ContentContext.jsx";

export default function Dashboard() {
  const location = useLocation();
  const hideContent = location.pathname.startsWith("/admin/dashboard/blog/"); // if open blog
  const fromFeature = "view";

  const { gallerys } = useContext(GalleryContext);

  return (
    <>
      {!hideContent && (
        <div className="mt-10">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-dark text-2xl font-medium">Blog</h2>
            <Link to={"../allBlogs"} state={{ fromFeature: fromFeature }}>
              <BtnViewAll />
            </Link>
          </div>
          <div className="flex flex-row gap-2">
            {blogData.slice(0, 4).map((data) => (
              <BlogCardV2
                key={data.idBlog}
                idBlog={data.idBlog}
                title={data.title}
                date={data.date}
                author={data.author}
                image={data.tamnel}
                fromFeature={fromFeature}
              />
            ))}
          </div>
        </div>
      )}

      {!hideContent && (
        <div className="mt-10">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-dark text-2xl font-medium">Gallery</h2>
            <Link to={"../allGallery"} state={{ fromFeature: fromFeature }}>
              <BtnViewAll />
            </Link>
          </div>
          <div className="flex flex-wrap gap-x-2 gap-y-4">
            {gallerys.slice(0, 8).map((data, index) => (
              <GalleryCard
                key={index}
                title={data.judulGambar}
                gambar={`http://localhost:8000/storage/${data.namaGambar}`}
                author={data.admin.username}
                fromFeature={fromFeature}
              />
            ))}
          </div>
        </div>
      )}
      <Outlet />
    </>
  );
}
