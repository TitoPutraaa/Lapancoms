import { BsArrowLeft } from "react-icons/bs";

export default function BackBtn() {
  return (
    <div className="bg-primary inline-flex items-center rounded-4xl px-5 py-1 text-center text-sm text-white transition duration-700 ease-in-out">
      <BsArrowLeft className="mr-2 stroke-1" />
      Back
    </div>
  );
}
