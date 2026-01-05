import { FiLogOut } from "react-icons/fi";
import adminApi from "../../api/adminApi";
import { useNavigate } from "react-router-dom";

export default function ComfirmLogout({setIsVisible}) {
  
  const navigate = useNavigate();
  
  const handleClick = async (e) => {
    e.preventDefault();
        try {
          const res = await adminApi.logout();
          localStorage.removeItem("token");
          localStorage.removeItem("username");
          localStorage.removeItem("role");
          console.log(res.data.data);
          if (res.status === 200) {
            navigate("/admin/login");
            setIsVisible(false)
          }
        } catch (error) {
          {
            console.log(error);
          }
        }
  }
  

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-3xl shadow-xl w-full max-w-md p-8 flex flex-col items-center text-center animate-fade-in-up font-poppins">
        <div className="bg-gray-50 p-4 rounded-full mb-6">
          <FiLogOut size={32} className="text-black" /> 
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Are you sure you want to logout?
        </h2>

        <p className="text-gray-500 text-base mb-8 px-4 leading-relaxed">
          You will be returned to the login screen and need to sign in again to access your account.
        </p>
        
        <div className="flex gap-3 w-full">
          <button onClick={handleClick} className="flex-1 bg-danger text-white font-bold py-3.5 px-6 rounded-xl hover:bg-red-700 transition-all shadow-lg shadow-red-600/20">
            Logout
          </button>
  
          <button onClick={() => setIsVisible(false)} className="flex-1 bg-gray-100 text-black font-bold py-3.5 px-6 rounded-xl hover:bg-gray-200 transition-all">
            Cancel
          </button>
        </div>

      </div>
    </div>
  );
}