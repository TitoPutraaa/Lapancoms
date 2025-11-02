import { blogData}  from "../assets/DataDummy"
import BackBtn from "../components/common/BackBtn";
import BlogCard from "../components/common/BlogCard"

export default function AllBlogs() {
    return (
      <div className="mb-12 mx-5">
        <div className="flex justify-between mb-4">
          <h2 className="text-3xl">Blog</h2> 
          <a href="/admin" className="mr-12">
          <BackBtn/>
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
    )
}