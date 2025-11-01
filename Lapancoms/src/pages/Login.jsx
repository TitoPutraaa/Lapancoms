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

  return (
    <>
      <div className="flex w-full h-dvh items-center justify-center">
        <div className="inset-0 fixed z-0 bg-black">
          <img
            src={assets.loginIMG}
            alt=""
            className="w-full h-full object-cover blur-3xl opacity-63"
          />
        </div>
        <div className="bg-white w-fit flex h-fit relative rounded-2xl overflow-hidden">
          <div className="max-w-lg px-16 py-20">
            <h1 className="font-semibold text-3xl text-dark mb-8">
              Nice to see you again
            </h1>
            <form>
              <div className="mb-5">
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm text-dark"
                >
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="bg-slate-100 border border-slate-300 text-dark text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 "
                  placeholder="Enter username"
                  required
                />
              </div>
              <div className="mb-8">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm text-dark"
                >
                  Password
                </label>
                <div className="relative ">
                  <input
                    type={invisible ? "password" : "text"}
                    name="password"
                    id="password"
                    className="bg-slate-100 border border-slate-300 text-dark text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 pr-10"
                    placeholder="Enter password"
                    required
                  />
                  <span
                    className="absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer select-none"
                    onClick={toggleInvisible}
                  >
                    {invisible ? "👁" : "😫"}
                  </span>
                </div>
              </div>
              <button
                type="submit"
                className="text-white bg-sky-700 hover:bg-sky-800 focus:ring-2 focus:outline-none focus:ring-sky-600 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center "
                onClick={() => navigate("/admin")}
              >
                Login
              </button>
            </form>
          </div>
          <div className="hidden lg:block max-w-md">
            <img
              src={assets.loginIMG}
              alt=""
              className="object-cover w-full h-full bg-dark/80"
            />
          </div>
        </div>
      </div>
    </>
  );
}
