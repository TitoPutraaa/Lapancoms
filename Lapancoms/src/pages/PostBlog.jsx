import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { tmpltImage } from "../assets/assets";
import TempleSlider from "../components/common/TempleteSlider";

export default function PostBlog() {
  const navigate = useNavigate();
  const [formPostBlog, setFormPostBlog] = useState({
    title: "",
    template: "",
  });
  const [errTmplt, setErrTmplt] = useState(false);

  const handleChange = (e) => {
    setFormPostBlog({
      ...formPostBlog,
      [e.target.name]: e.target.value,
    });
    setErrTmplt(false);
  };

  const handleSelect = (e) => {
    setFormPostBlog({
      ...formPostBlog,
      template: e,
    });
    setErrTmplt(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // untuk mencegah refresh

    if (!formPostBlog.template) {
      setErrTmplt(true);
      return;
    }
    localStorage.setItem("formPostBlog", JSON.stringify(formPostBlog));
    navigate("/admin/template");
  };

  return (
    <div className="mt-10">
      <h1 className="text-dark mb-5 text-2xl font-medium">Post Blog</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-6 w-full md:w-sm">
          <label
            htmlFor="title"
            className="mb-2 block font-medium text-slate-700"
          >
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            required
            className="text-dark focus:border-primary focus:ring-primary block w-full rounded-lg border border-slate-300 bg-white p-2.5 text-sm"
            placeholder="Input your title"
            onChange={handleChange}
          />
        </div>
        <div className="relative mr-8 mb-10 px-1 sm:mr-9 lg:mr-11">
          <TempleSlider
            images={tmpltImage}
            onSelect={handleSelect}
            errTmplt={errTmplt}
          />
        </div>
        <div className="mr-2 flex w-full gap-4 sm:w-lg">
          <Link
            to="../dashboard"
            className="text-primary hover:border-primary w-full rounded-lg border-2 border-slate-300 bg-white py-3 text-center font-medium transition-colors duration-500"
          >
            Cancel
          </Link>

          <button
            type="submit"
            className="bg-primary hover:bg-primary/90 w-full cursor-pointer rounded-lg border-2 py-3 font-medium text-white transition-colors duration-500"
          >
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
}
