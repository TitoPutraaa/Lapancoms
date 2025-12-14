import BackBtn from "../components/common/BackBtn";
import { Link, useLocation, useNavigate } from "react-router-dom";
import BlogCardV2 from "../components/common/BlogCardV2";
import { useEffect, useState } from "react";
import blogApi from "../api/blogApi";

export default function AllBlogs() {
  const [Blogs, setBlogs] = useState();
  const [navigate] = useNavigate();

  const loadBlogs = async () => {
    try {
      const res = await blogApi.getAll();
      setBlogs(res.data.data);
      console.log("all blog", res.data.data);
    } catch (error) {
      console.error("Error loading admins:", error);
    }
  };

  useEffect(() => {
    loadBlogs();
  }, []);

  const location = useLocation();
  const fromFeature = location.state?.fromFeature; //dapat dari state Link
  let url = "/admin";
  if (fromFeature === "dashboard") {
    url = "../dashboard";
  } else if (fromFeature === "delete") {
    url = "../delete";
  } else {
    console.log("error");
  }
  return (
    <div className="mt-10">
      <div className="mb-5 flex justify-between">
        <h2 className="text-dark text-2xl font-medium">All Blog</h2>
        <Link to={url} replace>
          <div className="">
            <BackBtn />
          </div>
        </Link>
      </div>
      <div className="flex flex-wrap gap-x-2 gap-y-4">
        {Blogs.map((data) => (
          <SwiperSlide className="w-auto!">
            <div
              onClick={() => navigate(`/admin/dashboard/blog/${data.idBlog}`)}
            >
              <BlogCardV2
                key={data.idBlog}
                idBlog={data.idBlog}
                title={data.title}
                date={data.date}
                author={data.author}
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
