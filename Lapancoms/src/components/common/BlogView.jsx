import { Link, useLocation, useParams } from "react-router-dom";
import { blogData, blogDataTemplate1 } from "../../assets/DataDummy";
import { useEffect, useState } from "react";
import BtnDeleteM from "./BtnDeleteM";

export default function BlogView() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const location = useLocation();
  const fromFeature = location.state?.fromFeature; //dapat dari state Link

  const [viewDelate, setViewDelate] = useState(false);
  const [targetId, setTargetId] = useState(null);

  useEffect(() => {
    // ini data dummy, ini diganti API
    const blogFromData = blogData.find((b) => b.idBlog === Number(id));
    const blogFromTemplate = blogDataTemplate1.find(
      (b) => b.idBlog === Number(id),
    );
    const blog = {
      ...blogFromData,
      ...blogFromTemplate,
    };
    setBlog(blog);
  }, [id]);

  let url = "/admin/dashboard";
  if (fromFeature === "view") {
    url = "/admin/dashboard";
  } else if (fromFeature === "delete") {
    url = "/admin/delete";
  } else {
    console.log("error");
  }

  const handleDelete = () => {
    console.log("Hallo");
  };

  if (!blog) return <div>Loading...</div>;
  return (
    <div className="w-full p-10">
      <div className="mb-8 flex justify-between">
        <Link to={url} replace>
          <div className="text-primary shadow-soft w-fit cursor-pointer rounded-lg px-10 py-3 text-sm">
            Back
          </div>
        </Link>
        {fromFeature === "delete" && (
          <button
            onClick={() => {
              setViewDelate(true);
            }}
            className="bg-danger shadow-soft w-fit cursor-pointer rounded-lg px-10 py-3 text-sm text-white"
          >
            Delete
          </button>
        )}
      </div>
      <div>
        <div className="shadow-soft mx-auto w-4xl overflow-hidden rounded-xl px-10 py-4 lg:w-5xl xl:w-6xl">
          <h1 className="text-primary mt-6 mb-10 w-2xl text-5xl font-semibold">
            {blog.title}
          </h1>
          <div className="mb-16 h-[474px] w-full overflow-hidden rounded-xl">
            <img
              src={blog.tamnel}
              alt="viewBlog"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-wrap gap-6">{blog.text}</div>
        </div>
      </div>

      <BtnDeleteM
        content={"blog"}
        handleDelete={handleDelete}
        view={viewDelate}
        setView={setViewDelate}
        targetId={targetId}
      />
    </div>
  );
}
