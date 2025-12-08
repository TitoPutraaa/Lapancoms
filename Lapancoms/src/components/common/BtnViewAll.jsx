import { BsArrowRight, BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function BtnViewAll() {
  return (
    <div className="bg-secondary border-primary/20 group relative w-26 cursor-pointer overflow-hidden rounded-full border md:w-29">
      <div className="bg-primary absolute inset-0 -translate-x-7 rounded-full transition duration-500 group-hover:translate-x-0">
        <BsArrowRight className="absolute top-1/2 right-2 ml-2 h-4 w-4 -translate-y-1/2 stroke-1 text-white opacity-0 transition duration-500 group-hover:opacity-100" />
      </div>

      <div className="text-secondary relative z-1 w-fit px-2.5 py-1.5 text-sm group-hover:w-full md:px-3 md:text-base">
        View All
      </div>

      <BsArrowUpRight className="text-primary absolute top-1/2 right-2 ml-2 h-4 w-4 -translate-y-1/2 stroke-1 transition duration-500 group-hover:translate-x-8 group-hover:-translate-y-8 group-hover:opacity-0" />
    </div>
  );
}
