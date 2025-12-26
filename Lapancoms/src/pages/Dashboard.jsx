import { Link, Outlet, useLocation } from "react-router-dom";
import BtnViewAll from "../components/common/BtnViewAll.jsx";
import BlogSlider from "../components/common/BlogSlider.jsx";
import GallerySlider from "../components/common/GallerySlider.jsx";

export default function Dashboard() {
  const location = useLocation();
  const hideContent = location.pathname.startsWith("/admin/dashboard/blog/"); // if open blog
  const fromFeature = "dashboard";

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
          <div className="relative h-56 sm:h-70">
            <BlogSlider fromFeature={fromFeature} />
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
          <div className="relative h-56 sm:h-70">
            <GallerySlider fromFeature={fromFeature} />
          </div>
        </div>
      )}
      <Outlet />
    </>
  );
}
