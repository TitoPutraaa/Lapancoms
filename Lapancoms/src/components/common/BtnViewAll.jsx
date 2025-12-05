import { Link } from "react-router-dom";

export default function BtnViewAll() {
  return (
    <div className="bg-secondary border-primary/20 group relative w-26 cursor-pointer overflow-hidden rounded-full border md:w-29">
      <div className="bg-primary absolute inset-0 -translate-x-7 rounded-full transition duration-500 group-hover:translate-x-0">
        <svg
          className="absolute top-1/2 right-2 ml-2 h-4 w-4 -translate-y-1/2 text-white opacity-0 transition duration-500 group-hover:opacity-100"
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
      <div className="text-secondary relative z-1 w-fit px-2.5 py-1.5 text-sm group-hover:w-full md:px-3 md:text-base">
        View All
      </div>
      <svg
        className="text-primary absolute top-1/2 right-2 ml-2 h-4 w-4 -translate-y-1/2 -rotate-45 transition duration-500 group-hover:translate-x-8 group-hover:-translate-y-8 group-hover:opacity-0"
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
  );
}
