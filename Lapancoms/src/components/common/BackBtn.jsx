import { BsArrowLeft } from "react-icons/bs";
import { FaReply } from "react-icons/fa";

export default function BackBtn() {
  return (
    <div className="bg-secondary group relative w-25 cursor-pointer overflow-hidden rounded-xl transition duration-500 ease-in-out md:w-29">
      <BsArrowLeft className="absolute top-1/2 left-6 z-1 -translate-y-1/2 stroke-1 text-white opacity-100 transition-all duration-500 group-hover:-left-4 group-hover:opacity-0" />
      <FaReply className="text-accent absolute top-1/2 right-0 z-1 -translate-y-1/2 scale-50 text-xs opacity-0 transition-all duration-500 group-hover:right-2.5 group-hover:scale-100 group-hover:opacity-100 md:text-sm" />
      <div className="text-secondary bg-primary group-hover:bg-accent w-full rounded-xl py-1.5 pr-4.5 text-right text-sm transition-all duration-500 group-hover:w-18 md:pr-6 md:text-base md:group-hover:w-21">
        Back
      </div>
    </div>
  );
}
