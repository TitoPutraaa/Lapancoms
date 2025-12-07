import BackBtn from "../components/common/BackBtn";
import { Link, useLocation } from "react-router-dom";
import BlogCardV2 from "../components/common/BlogCardV2";
import { BlogContext } from "../api/content/ContentContext";
import { useContext } from "react";

export default function AllBlogs() {
  const { blogs } = useContext(BlogContext);

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
  );
}
