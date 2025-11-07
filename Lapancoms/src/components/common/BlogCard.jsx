import { assets } from "../../assets/assets.js";
import { useNavigate } from "react-router-dom";

export default function BlogCard({ title, date, author }) {
  const navigate = useNavigate();
  return (
    <div>
      <div className="max-w-3xs rounded-3xl border border-gray-200 bg-white shadow-xl/20">
        <div className="relative">
          <img className="rounded-3xl" src={assets.blogCardImg} alt="" />

          <div className="">
            <div className="absolute bottom-2.5 left-2.5 flex rounded-lg bg-white px-1.5 py-1 font-normal">
              <svg
                className="my-auto h-4 w-4 text-black"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm14-7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm-5-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm-5-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4Z" />
              </svg>
              <div className="ml-2 border-l-2 border-gray-500 pl-2">{date}</div>
            </div>
          </div>
        </div>

        <div className="p-5">
          <h5 className="mb-2 flex items-start text-2xl tracking-tight text-gray-900">
            {title}
          </h5>

          <div className="flex justify-between">
            <p className="font-normal text-gray-900">{author}</p>

            <div
              onClick={() => navigate("/admin/blogview")}
              // href="#"
              className="bg-secondary text-primary inline-flex cursor-pointer items-center rounded-4xl px-5 py-1 text-center text-sm transition duration-700 ease-in-out"
            >
              View
              <svg
                className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
