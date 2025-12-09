import { useState } from "react";
import { useImmer } from "use-immer";
import adminApi from "../../api/adminApi";
import {
  FiCheck,
  FiEye,
  FiEyeOff,
  FiLogIn,
  FiX,
  FiXCircle,
} from "react-icons/fi";
import { MdCheckCircle, MdDoneAll } from "react-icons/md";
import {
  Bs2CircleFill,
  BsCheck2Square,
  BsCheckCircle,
  BsCheckCircleFill,
  BsCheckLg,
  BsCheckSquareFill,
} from "react-icons/bs";
import { HiCheckCircle } from "react-icons/hi2";

export default function AddAdmin({ view, setView, loadAdmins }) {
  const [invisible, setInvisible] = useState(true);
  const [form, setForm] = useImmer({ username: "", password: "" });

  if (!view) return null;

  const toggleInvisible = () => {
    setInvisible(!invisible);
  };

  function handleUsernameChange(e) {
    setForm((draft) => {
      draft.username = e.target.value;
    });
  }

  function handlePasswordChange(e) {
    setForm((draft) => {
      draft.password = e.target.value;
    });
  }
  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      await adminApi.add({ username: form.username, password: form.password });
      loadAdmins();
      setForm((draft) => {
        draft.username = "";
        draft.password = "";
      });
    } catch (error) {
      console.error("Error adding admin:", error, error.response?.data || null);
    }
    setView(false);
  };

  return (
    <div className="bg-dark/80 fixed inset-0 z-110 flex items-center justify-center">
      <div className="relative z-50 w-4/5 overflow-hidden rounded-2xl bg-white px-5 py-6 sm:w-md">
        <div className="mb-8 flex w-full flex-col items-center gap-4 text-center">
          <div className="w-fit">
            <FiLogIn className="text-dark stroke-3 text-xl md:text-2xl" />
          </div>
          <h2 className="text-dark text-xl font-semibold sm:text-2xl">
            Sign Up new Admin
          </h2>
        </div>
        <div className="w-full">
          <form onSubmit={handleAdd}>
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
                onChange={handleUsernameChange}
                className="text-dark block w-full rounded-lg border border-slate-300 bg-slate-100 p-2.5 text-sm focus:border-slate-500 focus:ring-slate-500"
                placeholder="Enter new Username"
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
                  value={form.password}
                  onChange={handlePasswordChange}
                  className="text-dark block w-full rounded-lg border border-slate-300 bg-slate-100 p-2.5 pr-10 text-sm focus:border-slate-500 focus:ring-slate-500"
                  placeholder="••••••"
                  required
                />
                <span
                  className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer select-none"
                  onClick={toggleInvisible}
                >
                  {invisible ? (
                    <FiEye className="text-gray-600" />
                  ) : (
                    <FiEyeOff className="text-gray-600" />
                  )}
                </span>
              </div>
            </div>
            <button
              type="submit"
              className="bg-primary group focus:ring-accent relative mb-3 w-full cursor-pointer overflow-hidden rounded-xl px-5 py-2.5 text-center text-sm font-medium transition-colors focus:ring-2 focus:outline-none"
            >
              <span className="bg-secondary absolute -top-5 -left-10 h-20 w-5 rotate-45 transition-all duration-500 group-hover:left-full group-hover:translate-x-full"></span>
              <span className="bg-accent absolute top-full -left-8 h-15 w-15 rounded-full transition-all duration-500 group-hover:top-3 group-hover:-left-3"></span>
              <span className="bg-accent absolute -right-8 bottom-full h-15 w-15 rounded-full transition-all duration-500 group-hover:-right-3 group-hover:bottom-3"></span>
              <span className="relative z-1 text-white">Confirm</span>
            </button>

            <button
              onClick={() => setView(false)}
              type="button"
              className="text-primary group focus:ring-accent relative w-full cursor-pointer overflow-hidden rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-center text-sm font-medium transition-colors focus:ring-2 focus:outline-none"
            >
              <span className="bg-accent absolute -top-5 -left-10 h-20 w-5 rotate-45 transition-all duration-500 group-hover:left-full"></span>
              <span className="bg-accent absolute -top-5 -right-10 h-20 w-5 rotate-45 transition-all duration-500 group-hover:right-full"></span>
              <span className="group-hover:text-accent relative z-1 transition-all duration-500">
                Cancel
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
