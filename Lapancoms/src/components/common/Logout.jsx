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
        className="text-dark group hover:bg-danger flex w-full rounded-lg p-2 px-12"
      >
        <BsBoxArrowRight className="text-dark group-hover:text-dark h-5 w-5 shrink-0 transition duration-75" />
        <span className="group-hover:text-dark ms-3">Logout</span>
      </div>
    </>
  );
}
