import { useState } from "react";
import { useImmer } from "use-immer";
import adminApi from "../../api/adminApi";

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
    <div className="bg-dark/40 fixed inset-0 z-50 flex items-center justify-center">
      <div className="relative z-50 w-xs overflow-hidden rounded-2xl bg-white px-8 py-10 sm:w-md md:h-[422px] md:w-3xl lg:h-[550px] lg:w-4xl">
        <div className="mb-8 w-full text-center">
          <div className="text-dark mb-4 text-2xl">
            <i className="fa-solid fa-arrow-right-to-bracket"></i>
          </div>
          <h2 className="text-dark text-2xl font-semibold">
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
                  {invisible ? "👁" : "😫"}
                </span>
              </div>
            </div>
            <button
              type="submit"
              className="bg-primary hover:bg-primary/95 mb-3 w-full cursor-pointer rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white transition-colors focus:ring-2 focus:ring-sky-600 focus:outline-none"
            >
              Confirm
            </button>
            <button
              onClick={() => setView(false)}
              type="button"
              className="text-primary w-full cursor-pointer rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-center text-sm font-medium transition-colors focus:ring-2 focus:ring-sky-600 focus:outline-none"
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
