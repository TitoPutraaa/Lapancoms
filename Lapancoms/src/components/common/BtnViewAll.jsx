import { BsArrowRight, BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function BtnViewAll() {
  return (
    <div className="bg-secondary group relative w-26 cursor-pointer overflow-hidden rounded-xl transition duration-500 md:w-29">
      <BsArrowRight className="text-accent absolute top-1/2 left-0 -translate-y-1/2 stroke-1 opacity-0 transition duration-500 group-hover:translate-x-2 group-hover:opacity-100" />
      <div className="text-secondary bg-primary group-hover:bg-accent relative z-1 w-fit rounded-xl px-2.5 py-1.5 text-sm transition-all duration-500 group-hover:translate-x-7 md:px-3 md:text-base">
        View All
      </div>
      <BsArrowUpRight className="text-primary absolute top-1/2 right-2 ml-2 h-4 w-4 -translate-y-1/2 stroke-1 transition duration-500 group-hover:translate-x-4 group-hover:-translate-y-4 group-hover:opacity-0" />
    </div>
  );
}
