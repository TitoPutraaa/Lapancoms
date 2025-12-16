import { Link, Navigate, useNavigate } from "react-router-dom";
import { tmpltImage } from "../assets/assets";
import TempleSlider from "../components/common/TempleteSlider";
import usePostBlogF from "../hooks/usePostBlogF";

export default function PostBlog() {
  const navigate = useNavigate();
  const { form, handleChange, handleSelect, validateTmplt } = usePostBlogF();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form", form);
    if (form.judul == "" || form.template == "") {
      return alert("pleas pick the template");
    }

    if (!validateTmplt()) return console.log("not validate");
    console.log("form", form);

    localStorage.setItem("judul", form.judul);
    localStorage.setItem("template", form.template);
    navigate("/admin/template");
  };

  return (
    <div className="mt-10 mr-4">
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
            className="text-dark focus:border-primary focus:ring-primary block w-full rounded-xl border border-slate-300 bg-white p-2.5 text-sm"
            placeholder="Input your title"
            onChange={handleChange}
          />
        </div>
        <div className="relative mr-8 mb-10 px-1 sm:mr-9 lg:mr-11">
          <TempleSlider images={tmpltImage} onSelect={handleSelect} />
        </div>
        <div className="mr-2 flex w-full gap-4 sm:w-lg">
          <Link
            to="../dashboard"
            className="text-primary group hover:border-accent relative w-full overflow-hidden rounded-xl border-2 border-slate-300 bg-white py-2 text-center font-medium transition-colors duration-500"
          >
            <span className="bg-accent absolute -top-5 -left-10 h-20 w-5 rotate-45 transition-all duration-500 group-hover:left-full"></span>
            <span className="bg-accent absolute -top-5 -right-10 h-20 w-5 rotate-45 transition-all duration-500 group-hover:right-full"></span>
            <span className="group-hover:text-accent relative z-1 text-sm transition-all duration-500 sm:text-base">
              Cancel
            </span>
          </Link>

          <button
            type="submit"
            className="group bg-primary relative w-full cursor-pointer overflow-hidden rounded-xl border-2 py-2 font-medium text-white transition-colors duration-500"
          >
            <span className="bg-secondary absolute -top-5 -left-10 h-20 w-5 rotate-45 transition-all duration-500 group-hover:left-full group-hover:translate-x-full"></span>
            <span className="bg-accent absolute top-full -left-8 h-15 w-15 rounded-full transition-all duration-500 group-hover:top-3 group-hover:-left-3"></span>
            <span className="bg-accent absolute -right-8 bottom-full h-15 w-15 rounded-full transition-all duration-500 group-hover:-right-3 group-hover:bottom-3"></span>
            <span className="relative z-1 text-sm text-white sm:text-base">
              Confirm
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}
