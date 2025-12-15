import BackBtn from "../components/common/BackBtn";
import { Link, useLocation, useNavigate } from "react-router-dom";
import BlogCardV2 from "../components/common/BlogCardV2";
import { useEffect, useState } from "react";
import blogApi from "../api/blogApi";
import { SwiperSlide } from "swiper/react";

export default function AllBlogs() {
  const [Blogs, setBlogs] = useState([]);

  const navigate = useNavigate();

  const loadBlogs = async () => {
    try {
      const res = await blogApi.getAll();
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

  let urlBack = `/admin/${fromFeature}`;
  return (
    <div className="mt-10">
      <div className="mb-5 flex justify-between">
        <h2 className="text-dark text-2xl font-medium">All Blog</h2>
        <Link to={urlBack} replace>
          <div className="">
            <BackBtn />
          </div>
        </Link>
      </div>
      <div className="flex flex-wrap gap-x-2 gap-y-4">
        {Blogs.map((data) => (
          <SwiperSlide className="w-auto!">
            <div
              onClick={() =>
                navigate(`/admin/${fromFeature}/blog/${data.idBlog}`)
              }
            >
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
