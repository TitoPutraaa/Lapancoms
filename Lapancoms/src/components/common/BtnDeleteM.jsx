import { BsTrash } from "react-icons/bs";
import galleryApi from "../../api/galleryApi";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { GalleryContext } from "../../api/content/ContentContext";

export default function BtnDeleteM({ content, view, setView, targetId }) {
  const { loadGallerys } = useContext(GalleryContext);
  const navigate = useNavigate();
  if (!view) return null;
  const handleDelete = async (id) => {
    await galleryApi.delete(id);
    await loadGallerys();
    navigate("/admin/dashboard");
    console.log("id tar", id);
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
        <div className="w-full max-w-lg rounded-xl bg-white p-6 shadow-xl">
          <div className="flex gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-100">
              <BsTrash className="h-6 w-6 text-red-600" />
            </div>

            <div className="">
              <h3 className="text-dark text-lg font-semibold">
                Delete <span className="first-letter:uppercase">{content}</span>
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Are you sure you want to remove this {content}? You won't be
                able to undo this.
              </p>
            </div>
          </div>

          <div className="mt-8 flex justify-end gap-3">
            <button
              onClick={() => setView(false)}
              type="button"
              className="group hover:border-accent relative w-19 overflow-hidden rounded-xl border-2 border-slate-300 bg-white py-1 text-center font-medium transition-colors duration-500 md:w-26"
            >
              <span className="bg-accent absolute -top-5 -left-12 h-20 w-5 rotate-45 transition-all duration-500 group-hover:left-full group-hover:translate-x-2"></span>
              <span className="bg-accent absolute -top-5 -right-12 h-20 w-5 rotate-45 transition-all duration-500 group-hover:right-full group-hover:-translate-x-4"></span>
              <span className="group-hover:text-accent text-dark relative z-1 text-sm transition-all duration-500">
                Cancel
              </span>
            </button>

            <button
              onClick={() => handleDelete(targetId)}
              type="button"
              className="bg-secondary group relative w-19 cursor-pointer overflow-hidden rounded-xl py-1 text-left md:w-26 md:py-1.5"
            >
              <span className="bg-danger absolute top-0 bottom-0 left-0 w-19 rounded-xl transition duration-600 group-hover:translate-x-6 md:w-26 md:group-hover:translate-x-8"></span>
              <span className="text-danger absolute top-1/2 left-1.5 -translate-y-1/2 scale-110 text-sm opacity-0 transition duration-500 group-hover:opacity-100 md:text-lg">
                <BsTrash />
              </span>
              <span className="group-hover:text-secondary relative z-1 block w-19 text-center text-xs text-white transition duration-600 group-hover:translate-x-3 md:w-26 md:group-hover:translate-x-4">
                Delete
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
