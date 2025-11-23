import { BsArrowRightCircleFill } from "react-icons/bs";

export default function ArrowBtn() {
  return (
    <button type="button">
      <BsArrowRightCircleFill className="text-primary h-[38px] w-[38px] transition-colors duration-200 hover:opacity-90" />
    </button>
  );
}
