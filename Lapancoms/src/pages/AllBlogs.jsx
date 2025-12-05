import { blogData } from "../assets/DataDummy";
import BackBtn from "../components/common/BackBtn";
import { Link, useLocation } from "react-router-dom";
import BlogCardV2 from "../components/common/BlogCardV2";

export default function AllBlogs() {
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
      <div className="flex flex-wrap justify-center gap-x-3 gap-y-5">
        {blogData.map((data) => (
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
  );
}
