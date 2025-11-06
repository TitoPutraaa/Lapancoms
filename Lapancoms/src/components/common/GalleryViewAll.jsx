import { Link } from "react-router-dom";
export default function BlogViewAll() {
  return (
    <>
      <Link to="../allGallery">
        <div className="border-primary hover:bg-primary text-primary mr-5 flex rounded-3xl border-2 transition duration-1000 ease-in-out hover:text-white">
          <div className="bg-primary rounded-3xl px-3 py-1 text-white">
            View All
          </div>
          <div className="mt-1.5 mr-2">
            <svg
              className=""
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </div>
        </div>
      </Link>
    </>
  );
}
