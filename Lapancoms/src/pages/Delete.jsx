import BlogCardV2 from "../components/common/BlogCardV2";
import { blogData, imgData } from "../assets/DataDummy.jsx";
import BtnViewAll from "../components/common/BtnViewAll.jsx";
import { Link, Outlet, useLocation } from "react-router-dom";
import GalleryCard from "../components/common/GalleryCard.jsx";
// import { useState } from "react";
export default function Delete() {
  const location = useLocation();
  const hideContent = location.pathname.startsWith("/admin/delete/deleteBlog/"); // if open blog
  const fromFeature = "delete";
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
            {imgData.slice(0, 8).map((data) => (
              <GalleryCard
                key={data.idGambar}
                idGambar={data.idGambar}
                title={data.title}
                author={data.author}
                image={data.namaGambar}
              />
            ))}
          </div>
        </div>
      )}
      <Outlet />
    </>
  );
}
