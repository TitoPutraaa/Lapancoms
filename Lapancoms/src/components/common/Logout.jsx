import { useNavigate } from "react-router-dom";
import adminApi from "../../api/adminApi";
import { BsBoxArrowRight } from "react-icons/bs";

export default function Logout() {
  const navigate = useNavigate();
  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const res = await adminApi.logout();
      localStorage.removeItem("token");
      console.log(res);
      if (res.status === 200) {
        navigate("/admin/login");
      }
    } catch (error) {
      {
        console.log(error);
      }
    }
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
    </>
  );
}
