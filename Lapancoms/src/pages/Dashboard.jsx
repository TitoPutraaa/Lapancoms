import BlogCard from "../components/common/BlogCard";
import GalleryCard from "../components/common/GalleryCard";
import BlogViewAll from "../components/common/BlogViewAll";
import GalleryViewAll from "../components/common/GalleryViewAll";
import { blogData, imgData } from "../assets/DataDummy.jsx";
import "../index.css";

export default function Dashboard() {

  return (
    <>
      <div className="mb-12 mx-5">
        <div className="flex justify-between mb-4">
          <h2 className="text-3xl">Blog</h2> 
          <BlogViewAll />
        </div>
        <div className="card-container">
          {blogData.slice(0, 4).map((data) => (
            <BlogCard
              key={data.title}
              title={data.title}
              date={data.date}
              author={data.author}
            />
          ))}
        </div>
      </div>
      <div className="mb-12 mx-5">
        <div className="flex justify-between mb-4">
        <h2 className="text-3xl">Gallery</h2>
        <GalleryViewAll/>
        </div>
        <div className="card-container">
          {imgData.slice(0, 3).map((data) => (
            <GalleryCard key={data.title} title={data.title} author={data.author} />
          ))}
        </div>
      </div>
    </>
  );
}
