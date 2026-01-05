import "../index.css";
import { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { replace, useNavigate } from "react-router-dom";
import { AdminContext } from "../auth/AdminContext";
import { useImmer } from "use-immer";
import adminApi from "../api/adminApi";
import {
  FiEye,
  FiEyeOff,
} from "react-icons/fi";

export default function Login() {
  const navigate = useNavigate();
  const [invisible, setInvisible] = useState(true);
  const [error, setError] = useState(null);
  const { setToken } = useContext(AdminContext);
  const [isLoad, setIsLoad] = useState(false);

  const [form, setForm] = useImmer({ username: "", password: "" });

  function handleUsername(e) {
    setForm((draft) => {
      draft.username = e.target.value;
    });
  }
  function handlePassword(e) {
    setForm((draft) => {
      draft.password = e.target.value;
    });
  }

  const toggleInvisible = () => {
    setInvisible(!invisible);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setIsLoad(true);
      const res = await adminApi.login({
        username: form.username,
        password: form.password,
      });
      // store token first so axios interceptor can read it when AdminProvider fetches /me
      const token = res.data?.token;
      const username = res.data.user.username;
      const role = res.data.user.role;

      if (token) {
        try {
          localStorage.setItem("token", token);
          localStorage.setItem("username", username);
          localStorage.setItem("role", role);
        } catch (e) {
          console.log(e.error || "failed set token");
        }
        setToken(token);
      }

      navigate("/admin/dashboard", replace);
    } catch (error) {
      setError(error.response?.data);
      console.log("login error", error.response?.data);
    } finally{
      setIsLoad(false);
    }
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
            <form onSubmit={handleLogin}>
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
                  value={form.username}
                  onChange={handleUsername}
                  className="text-dark block w-full rounded-lg border border-slate-300 bg-slate-100 p-2.5 text-sm focus:border-slate-500 focus:ring-slate-500"
                  placeholder="Enter username"
                  required
                />
                {error && (
                  <div className="text-danger text-end text-[1rem]">
                    {error.username}
                  </div>
                )}{" "}
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
                    value={form.password}
                    onChange={handlePassword}
                    className="text-dark block w-full rounded-lg border border-slate-300 bg-slate-100 p-2.5 pr-10 text-sm focus:border-slate-500 focus:ring-slate-500"
                    placeholder="Enter password"
                    required
                  />
                  <span
                    className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer select-none"
                    onClick={toggleInvisible}
                  >
                    {invisible ? <FiEyeOff className="text-gray-600" /> : <FiEye className="text-gray-600" />}
                  </span>
                </div>
                {error && (
                  <div className="text-danger mt-1 text-end text-[1rem]">
                    {error.password}
                  </div>
                )}
              </div>
              <button
                type="submit"
                className="bg-primary hover:bg-primary/95 relative h-10 w-full rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white transition-colors focus:ring-2 focus:ring-sky-600 focus:outline-none"
              >
                {isLoad ? (
                  <span className="absolute inset-0 flex items-center justify-center bg-white">
                    <span className="text-dark mr-5">Loading </span>
                    <span className="relative h-6 w-6 overflow-hidden rounded-full">
                      <span className="absolute inset-0 border-[#eee6dd]" />
                      <span className="border-dark absolute inset-0 animate-[spin_1.2s_linear_infinite] rounded-b-md border" />
                    </span>
                  </span>
                ) : (
                  "Login"
                )}
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
