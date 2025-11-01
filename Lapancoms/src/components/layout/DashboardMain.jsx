import BlogCard from "../common/BlogCard";
import ImgCard from "../common/ImgCard";
import "../../index.css";

export default function DashboardMain() {
  const blogData = [
    {
      title: "Judul 1",
      date: "13/06/2022",
      author: "Tito",
    },
    {
      title: "Judul 2",
      date: "24/11/2024",
      author: "Ari",
    },
    {
      title: "Judul 3",
      date: "11/06/2025",
      author: "Rizki",
    },
    {
      title: "Judul 4",
      date: "25/06/2023",
      author: "Widi",
    },
  ];

  const imgData = [
    {
      title: "Judul 1",
      author: "Tito",
    },
    {
      title: "Judul 2",
      author: "Ari",
    },
    {
      title: "Judul 3",
      author: "Rizki",
    },
  ];

  return (
    <div className="">
      <div className="mb-12 mx-5">
        <h2 className="text-3xl mb-4">Blog</h2>
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
      <div className="mb-12 mx-5">
        <h2 className="text-3xl mb-4">Gallery</h2>
        <div className="card-container">
          {imgData.map((data) => (
            <ImgCard key={data.title} title={data.title} author={data.author} />
          ))}
        </div>
      </div>
    </div>
  );
}
