import { useNavigate } from "react-router-dom";
import adminApi from "../../api/adminApi";

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
        className="text-dark group hover:bg-danger flex w-full items-center rounded-lg p-2"
      >
        <svg
          className="text-dark group-hover:text-dark h-5 w-5 shrink-0 transition duration-75"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 18"
        >
          <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
        </svg>
        <span className="group-hover:text-dark ms-3">Logout</span>
      </div>
    </>
  );
}
