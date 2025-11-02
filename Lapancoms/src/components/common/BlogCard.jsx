import { assets } from "../../assets/assets.js";

export default function BlogCard({ title, date, author }) {

  
  return (
    <div>
      <div className=" max-w-3xs bg-white border border-gray-200 rounded-3xl shadow-xl/20">
        <div className="relative">
          <img className="rounded-3xl" src={assets.blogCardImg} alt="" />

          <div className="">
            <div className="flex px-1.5 py-1 bg-white font-normal absolute bottom-2.5 left-2.5  rounded-lg ">
              <svg class="w-4 h-4 text-black my-auto " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm14-7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm-5-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm-5-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4Z"/>
              </svg>
              <div className="ml-2 pl-2 border-l-2 border-gray-500">
              {date}
              </div>
            </div>
          </div>
        </div>

        <div className="p-5">
          <h5 className="flex items-start mb-2 text-2xl tracking-tight text-gray-900">
            {title}
          </h5>

          <div className="flex justify-between">
            <p className=" font-normal text-gray-900">{author}</p>

            <a
              href="#"
              className="inline-flex items-center text-sm text-center py-1 px-5 rounded-4xl  bg-secondary  transition duration-700 ease-in-out"
            >
              View
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
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

            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
