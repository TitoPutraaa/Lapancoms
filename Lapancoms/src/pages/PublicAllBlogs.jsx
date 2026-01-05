import BackBtn from "../components/common/BackBtn";
import { Link, useLocation, useNavigate } from "react-router-dom";
import BlogCardV2 from "../components/common/BlogCardV2";
import { useEffect, useState } from "react";
import { SwiperSlide } from "swiper/react";
import { publicBlogApi } from "../api/publicApi";

export default function PublicAllBlogs() {
  const [Blogs, setBlogs] = useState([]);

  const navigate = useNavigate();

  const loadBlogs = async () => {
    try {
      const res = await publicBlogApi.getAll();
      setBlogs(res.data.data);
    } catch (error) {
      console.error("Error loading admins:", error);
    }
  };

  useEffect(() => {
    loadBlogs();
  }, []);

  const location = useLocation();
  const fromFeature = location.state?.fromFeature; //dapat dari state Link
  console.log("ff all", fromFeature);

  let url = `/admin/${fromFeature}/blog/`;
  let urlBack = `/admin/${fromFeature}`;

  if (fromFeature === "lp") {
    urlBack = "/";
    url = `/${fromFeature}/blog/`;
  }
  if (fromFeature === "updLP") {
    urlBack = "../admin/updateLandingPage";
    url = `/${fromFeature}/blog/`;
  }

  return (
    <div
      className={`pt-10 ${fromFeature === "lp" || fromFeature === "updLP"? "container mx-auto px-4 sm:px-6" : "mr-4"}`}
    >
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-dark text-2xl font-medium">All Blog</h2>
        <Link to={urlBack} replace>
          <BackBtn />
        </Link>
      </div>
      <div className="flex flex-wrap gap-x-2 gap-y-4">
        {Blogs.map((data) => (
          <SwiperSlide className="w-auto!">
            <div onClick={() => navigate(url + `${data.idBlog}`)}>
              <BlogCardV2
                key={data.idBlog}
                idBlog={data.idBlog}
                title={data.judul}
                date={data.tglBlog}
                author={data.username}
                image={data.tamnel}
                fromFeature={fromFeature}
              />
            </div>
          </SwiperSlide>
        ))}
      </div>
    </div>
  );
}
