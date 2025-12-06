import BlogCardV2 from "../components/common/BlogCardV2";
import { blogData } from "../assets/DataDummy.jsx";
import BtnViewAll from "../components/common/BtnViewAll.jsx";
import { Link, Outlet, useLocation } from "react-router-dom";
import GalleryCard from "../components/common/GalleryCard.jsx";
import { useContext, useState } from "react";
import { GalleryContext } from "../api/content/ContentContext.jsx";
import GalleryView from "../components/common/GalleryView.jsx";
// import { useState } from "react";
export default function Delete() {
  const location = useLocation();
  const hideContent = location.pathname.startsWith("/admin/delete/deleteBlog/"); // if open blog
  const fromFeature = "delete";

  const { gallerys } = useContext(GalleryContext);
  const [gallery, setGallery] = useState({});
  const [viewGallery, setViewGallery] = useState(false);
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
            {gallerys.slice(0, 4).map((data, index) => (
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
      )}
      {viewGallery && (
        <GalleryView
          setViewGallery={setViewGallery}
          fromFeature={fromFeature}
          data={gallery}
        />
      )}
      <Outlet />
    </>
  );
}
