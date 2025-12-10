import GalleryCard from "../components/common/GalleryCard";
import { Link, Outlet, useLocation } from "react-router-dom";
import BlogCardV2 from "../components/common/BlogCardV2.jsx";
import BtnViewAll from "../components/common/BtnViewAll.jsx";
import { useContext, useState } from "react";
import { BlogContext, GalleryContext } from "../api/content/ContentContext.jsx";
import GalleryView from "../components/common/GalleryView.jsx";

export default function Dashboard() {
  const location = useLocation();
  const hideContent = location.pathname.startsWith("/admin/dashboard/blog/"); // if open blog
  const fromFeature = "view";

  const { gallerys } = useContext(GalleryContext);
  const { blogs } = useContext(BlogContext);
  const [gallery, setGallery] = useState({});
  const [viewGallery, setViewGallery] = useState(false);
  console.log("blogs", blogs);

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
          <div className="flex flex-wrap gap-x-2 gap-y-4">
            {blogs.slice(0, 4).map((data, index) => (
              <BlogCardV2
                key={index}
                title={data.judul}
                image={`http://localhost:8000/storage/${data.namaGambar}`}
                author={data.admin.username}
                date={data.tglBlog}
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
