import { blogData } from "../assets/DataDummy";
import BackBtn from "../components/common/BackBtn";
import BlogCard from "../components/common/BlogCard";

export default function AllBlogs() {
  return (
    <div className="mx-5 mb-12">
      <div className="mb-4 flex justify-between">
        <h2 className="text-3xl">All Blog</h2>
        <a href="/admin" className="mr-12">
          <BackBtn />
        </a>
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
