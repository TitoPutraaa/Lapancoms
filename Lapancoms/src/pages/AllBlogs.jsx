import { blogData } from "../assets/DataDummy";
import BackBtn from "../components/common/BackBtn";
import BlogCard from "../components/common/BlogCard";
import { useNavigate } from "react-router-dom";

export default function AllBlogs() {
  const navigate = useNavigate();
  return (
    <div className="mx-5 mb-12">
      <div className="mb-4 flex justify-between">
        <h2 className="text-3xl">All Blog</h2>
        <button onClick={() => navigate("/admin")} className="mr-12">
          <BackBtn />
        </button>
      </div>
      <div className="card-container">
        {blogData.map((data) => (
          <BlogCard
            key={data.title}
            title={data.title}
            date={data.date}
            author={data.author}
          />
        ))}
      </div>
    </div>
  );
}
