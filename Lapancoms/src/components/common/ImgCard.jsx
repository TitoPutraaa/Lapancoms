<<<<<<< HEAD
=======
import { assets } from "../../assets/assets.js";

export default function ImgCard({ title, author }) {
  return (
    <div className="">
      <div className=" max-w-3xs bg-white border border-gray-200 rounded-3xl shadow-xl/20">
        <div className="relative">
          <img className="rounded-3xl" src={assets.blogCardImg} alt="" />
          <div className=""></div>
        </div>
        <div className="p-5">
          <h5 className="flex items-start mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {title}
          </h5>

          <div className="flex justify-between">
            <p className=" font-normal text-gray-900">{author}</p>
            <a
              href="#"
              className="inline-flex items-center text-sm font-medium text-center text-white"
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
>>>>>>> f5eee04 (add css variable dan componen di index.css dan selesai dashboard main)
