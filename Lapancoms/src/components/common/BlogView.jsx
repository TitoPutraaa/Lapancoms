import { Link, useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import BtnDeleteM from "./BtnDeleteM";
import { BsArrowLeft, BsTrash } from "react-icons/bs";
import { FaReply } from "react-icons/fa";
import blogApi from "../../api/blogApi";

export default function BlogView() {
  const { id } = useParams();
  const location = useLocation();
  const fromFeature = location.state?.fromFeature; //dapat dari state Link
  const [viewDelate, setViewDelate] = useState(false);
  const [blog, setBlog] = useState(null);
  console.log("id View", id);

  const loadBlosId = async (id) => {
    try {
      const res = await blogApi.getById(id);
      setBlog(res.data.data);
      console.log("blog", res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadBlosId(id);
  }, [id]);

  let url = "/admin/dashboard";
  if (fromFeature === "view") {
    url = "/admin/dashboard";
  } else if (fromFeature === "delete") {
    url = "/admin/delete";
  } else {
    console.log("error");
  }
  return (
    <div className="bg-secondary w-full pb-8">
      <div className="mx-auto mb-6 flex justify-between pt-6 transition-all duration-500 sm:w-xl lg:w-3xl">
        <Link to={url} replace>
          <div className="group relative w-25 cursor-pointer overflow-hidden rounded-xl bg-white transition duration-500 ease-in-out md:w-29">
            <BsArrowLeft className="text-primary absolute top-1/2 left-6 z-1 -translate-y-1/2 stroke-1 text-sm opacity-100 transition-all duration-500 group-hover:-left-4 group-hover:opacity-0" />
            <FaReply className="text-accent absolute top-1/2 right-0 z-1 -translate-y-1/2 scale-50 text-xs opacity-0 transition-all duration-500 group-hover:right-2.5 group-hover:scale-100 group-hover:opacity-100 md:text-sm" />
            <div className="text-primary group-hover:bg-accent w-full rounded-xl bg-white py-1.5 pr-4.5 text-right text-sm transition-all duration-500 group-hover:w-18 group-hover:text-white md:pr-6 md:text-base md:group-hover:w-21">
              Back
            </div>
          </div>
        </Link>
        {fromFeature === "delete" && (
          <button
            onClick={() => {
              setViewDelate(true);
            }}
            className="bg-secondary group relative w-19 cursor-pointer overflow-hidden rounded-xl py-1 text-left md:w-26 md:py-1.5"
          >
            <span className="bg-danger absolute top-0 bottom-0 left-0 w-19 rounded-xl transition duration-600 group-hover:translate-x-6 md:w-26 md:group-hover:translate-x-8"></span>
            <span className="text-danger absolute top-1/2 left-1.5 -translate-y-1/2 scale-110 text-sm opacity-0 transition duration-500 group-hover:opacity-100 md:text-lg">
              <BsTrash />
            </span>
            <span className="group-hover:text-secondary relative z-1 block w-19 text-center text-xs text-white transition duration-600 group-hover:translate-x-3 md:w-26 md:text-base md:group-hover:translate-x-4">
              Delete
            </span>
          </button>
        )}
      </div>

      <div className="mx-auto w-full rounded-xl bg-white px-4 transition-all duration-500 sm:w-xl sm:shadow lg:w-3xl">
        <h1 className="text-primary mb-5 pt-5 text-xl font-semibold capitalize sm:text-2xl lg:text-3xl">
          {blog.title}
        </h1>
        <div className="mb-8 h-75 w-full overflow-hidden rounded-xl sm:h-80 lg:h-95">
          <img
            src={blog.tamnel}
            alt="viewBlog"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="text-primary flex flex-wrap gap-6 pb-6 text-sm sm:text-base">
          {blog.text}
        </div>
      </div>

      <BtnDeleteM
        content={"blog"}
        view={viewDelate}
        setView={setViewDelate}
        targetId={id}
      />
    </div>
  );
}
