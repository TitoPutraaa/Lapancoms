import { Link } from "react-router-dom";

export default function BlogCardV2({
  idBlog,
  title,
  date,
  author,
  image,
  fromFeature,
}) {
  let url = `/admin`;
  if (fromFeature === "view") {
    url = `../dashboard/blog/${idBlog}`;
  } else if (fromFeature === "delete") {
    url = `../delete/deleteBlog/${idBlog}`;
  } else {
    console.log("error");
  }
  return (
    <div className="shadow-soft max-w-40 overflow-hidden rounded-xl sm:max-w-52 lg:max-w-56">
      <div className="group relative h-36 overflow-hidden rounded-b-xl sm:h-46">
        <img
          src={image}
          alt="ImgBlog"
          className="h-full w-full object-cover transition duration-600 group-hover:scale-105"
        />
        <div className="absolute bottom-2 left-2 flex items-center rounded-md bg-white px-2.5 py-1.5">
          <svg
            className="h-3.5 w-3.5 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0.5"
              d="M0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm14-7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm-5-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm-5-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4Z"
            />
          </svg>
          <div className="text-dark ml-2 border-l border-dashed pl-2 text-[10px] md:text-xs">
            <span>{date}</span>
          </div>
        </div>
      </div>
      <div className="p-2 sm:p-3">
        <h3 className="text mb-2 truncate font-medium sm:text-lg lg:mb-2.5 lg:text-xl">
          {title}
        </h3>
        <div className="flex items-center justify-between">
          <p className="text-xs font-normal md:text-sm">{author}</p>
          <Link to={url} state={{ fromFeature: fromFeature }}>
            <button className="bg-secondary border-primary/20 group relative w-19 cursor-pointer overflow-hidden rounded-2xl border py-0.5 text-left leading-none md:w-20">
              <span className="bg-primary absolute top-0 bottom-0 left-0 w-13 -translate-x-full rounded-r-2xl transition duration-600 group-hover:translate-x-0 md:w-14"></span>
              <span className="text-primary group-hover:text-secondary relative z-1 ml-2 w-fit text-xs transition duration-500 md:text-sm">
                {fromFeature === "delete" ? "Select" : "View"}
              </span>
              <svg
                className="text-primary absolute top-1/2 right-2 ml-2 h-3 w-3 -translate-y-1/2 transition duration-500 group-hover:-rotate-45"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
