import { useNavigate } from "react-router-dom";
import adminApi from "../../api/adminApi";
import { BsBoxArrowRight } from "react-icons/bs";
import { useState } from "react";
import ComfirmLogout from "./ConfirmLogout";

export default function Logout() {
  const [isVisible, setIsVisible] = useState(false);
  const handleClick = async (e) => {
    setIsVisible(true)

    e.preventDefault();


  };
  return (
    <>
      <div
        onClick={handleClick}
        className="text-dark group hover:bg-danger flex w-full items-center overflow-hidden rounded-md py-2"
      >
        <BsBoxArrowRight className="text-dark mx-3 shrink-0 transition duration-75 group-hover:text-white" />
        <span className="ml-0.5 text-nowrap group-hover:text-white">
          Logout
        </span>
      </div>
      {isVisible && (
        <ComfirmLogout setIsVisible={setIsVisible}/>
      )}
    </>
  );
}
