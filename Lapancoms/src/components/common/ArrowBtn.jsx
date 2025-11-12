import { BsArrowRightCircleFill } from "react-icons/bs";

export default function ArrowBtn() {
    return(
        <button type="button">
        <BsArrowRightCircleFill 
        className="w-[38px] h-[38px] text-primary hover:opacity-90 transition-colors duration-200" />
        </button>
    );
}