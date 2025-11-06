import "../index.css";
import { useState } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [invisible, setInvisible] = useState(true);

  const toggleInvisible = () => {
    setInvisible(!invisible);
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // untuk mencegah refresh

    navigate("/admin/dashboard");
  };

  return (
    <>
      <div className="flex h-screen w-full items-center justify-center">
        <div className="fixed inset-0 z-0 bg-black">
          <img
            src={assets.loginIMG}
            alt=""
            className="h-full w-full object-cover opacity-63 blur-3xl"
          />
        </div>
        <div className="relative flex h-fit w-fit overflow-hidden rounded-2xl bg-white">
          <div className="max-w-lg px-16 py-20">
            <h1 className="text-dark mb-8 text-3xl font-semibold">
              Nice to see you again
            </h1>
            <form>
              <div className="mb-5">
                <label
                  htmlFor="username"
                  className="text-dark mb-2 block text-sm"
                >
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="text-dark block w-full rounded-lg border border-slate-300 bg-slate-100 p-2.5 text-sm focus:border-slate-500 focus:ring-slate-500"
                  placeholder="Enter username"
                  required
                />
              </div>
              <div className="mb-8">
                <label
                  htmlFor="password"
                  className="text-dark mb-2 block text-sm"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={invisible ? "password" : "text"}
                    name="password"
                    id="password"
                    className="text-dark block w-full rounded-lg border border-slate-300 bg-slate-100 p-2.5 pr-10 text-sm focus:border-slate-500 focus:ring-slate-500"
                    placeholder="Enter password"
                    required
                  />
                  <span
                    className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer select-none"
                    onClick={toggleInvisible}
                  >
                    {invisible ? "👁" : "😫"}
                  </span>
                </div>
              </div>
              <button
                type="submit"
                className="bg-primary hover:bg-primary/95 w-full rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white transition-colors focus:ring-2 focus:ring-sky-600 focus:outline-none"
                onClick={() => navigate("/admin")}
              >
                Login
              </button>
            </form>
          </div>
          <div className="hidden max-w-md lg:block">
            <img
              src={assets.loginIMG}
              alt=""
              className="bg-dark/80 h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}
