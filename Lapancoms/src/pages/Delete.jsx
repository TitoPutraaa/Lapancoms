import { blogData } from "../assets/DataDummy.jsx";
import BtnViewAll from "../components/common/BtnViewAll.jsx";
import { Link, Outlet, useLocation } from "react-router-dom";
import BlogSlider from "../components/common/BlogSlider.jsx";
import GallerySlider from "../components/common/GallerySlider.jsx";
import GalleryView from "../components/common/GalleryView.jsx";
import { GalleryContext } from "../api/content/ContentContext.jsx";
// import { useState } from "react";
export default function Delete() {
  const location = useLocation();
  const hideContent = location.pathname.startsWith("/admin/delete/deleteBlog/"); // if open blog
  const fromFeature = "delete";

  return (
    <>
      {!hideContent && (
        <div className="mt-10 mr-4">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-dark text-2xl font-medium">Blog</h2>
            <Link to={"../allBlogs"} state={{ fromFeature: fromFeature }}>
              <BtnViewAll />
            </Link>
          </div>
          <div className="relative">
            <BlogSlider blogData={blogData} fromFeature={fromFeature} />
          </div>
        </div>
      )}

      {!hideContent && (
        <div className="mt-10 mr-4 mb-4">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-dark text-2xl font-medium">Gallery</h2>
            <Link to={"../allGallery"} state={{ fromFeature: fromFeature }}>
              <BtnViewAll />
            </Link>
          </div>
          <div className="relative">
            <GallerySlider fromFeature={fromFeature} />
          </div>
        </div>
      )}

      <Outlet />
    </>
  );
}
