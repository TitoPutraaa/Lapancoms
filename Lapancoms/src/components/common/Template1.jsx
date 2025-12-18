import TextEditor from "./TextEditor";
import useTemplate1 from "../../hooks/useTemplate1";
import { BsArrowLeft, BsCloudUpload } from "react-icons/bs";
import { FaReply } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { MdAddPhotoAlternate } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill-new";

export default function Template1() {
  const navigate = useNavigate();
  const { text1, preview, handleFileChange, handleQuillChange, handleSubmit } =
    useTemplate1();

  const judul = localStorage.getItem("judul");

  return (
    <div className="bg-secondary w-full pb-8">
      <div className="mx-auto mb-6 flex justify-between pt-6 transition-all duration-500 sm:w-xl lg:w-3xl">
        <div
          onClick={() => {
            localStorage.removeItem("judul");
            localStorage.removeItem("template");
            localStorage.removeItem("prev_img1");
            localStorage.removeItem("prev_text1");
            navigate("/admin/postBlog", { replace: true });
          }}
          className="group relative w-25 cursor-pointer overflow-hidden rounded-xl bg-white transition duration-500 ease-in-out md:w-29"
        >
          <BsArrowLeft className="text-primary absolute top-1/2 left-6 z-1 -translate-y-1/2 stroke-1 text-sm opacity-100 transition-all duration-500 group-hover:-left-4 group-hover:opacity-0" />
          <FaReply className="text-accent absolute top-1/2 right-0 z-1 -translate-y-1/2 scale-50 text-xs opacity-0 transition-all duration-500 group-hover:right-2.5 group-hover:scale-100 group-hover:opacity-100 md:text-sm" />
          <div className="text-primary group-hover:bg-accent w-full rounded-xl bg-white py-1.5 pr-4.5 text-right text-sm transition-all duration-500 group-hover:w-18 group-hover:text-white md:pr-6 md:text-base md:group-hover:w-21">
            Back
          </div>
        </div>
        <button
          onClick={handleSubmit}
          className="group relative w-19 cursor-pointer overflow-hidden rounded-xl bg-white py-1 text-left md:w-26 md:py-1.5"
        >
          <span className="bg-success absolute top-0 bottom-0 left-0 w-19 rounded-xl transition duration-600 group-hover:translate-x-6 group-hover:bg-emerald-600 md:w-26 md:group-hover:translate-x-8"></span>
          <span className="absolute top-1/2 left-0 -translate-y-1/2 scale-50 text-sm text-emerald-600 opacity-0 transition-all duration-500 group-hover:left-1.5 group-hover:scale-110 group-hover:opacity-100 md:text-lg">
            <FiSend />
          </span>
          <span className="relative z-1 block w-19 text-center text-xs text-white transition duration-600 group-hover:translate-x-3 md:w-26 md:text-base md:group-hover:translate-x-4">
            Post
          </span>
        </button>
      </div>
      <div>
        <div className="mx-auto w-full rounded-xl bg-white px-4 transition-all duration-500 sm:w-xl sm:shadow lg:w-3xl">
          <h1 className="text-primary mb-5 pt-5 text-xl font-semibold capitalize sm:text-2xl lg:text-3xl">
            {judul}
          </h1>
          <div className="relative mb-8 h-75 w-full overflow-hidden rounded-xl sm:h-80 lg:h-95">
            {!preview && (
              <label
                htmlFor="dropzone-file"
                className="flex h-full w-full cursor-pointer flex-col items-center justify-center border-2 border-slate-200 bg-gray-50 hover:bg-gray-200"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <BsCloudUpload className="text-primary mb-2 h-8 w-8 text-sm md:mb-4 md:text-base" />
                  <p className="text-primary mb-1 text-xs font-medium md:mb-1.5 md:text-sm">
                    Drop file or browse
                  </p>
                  <p className="mb-2 text-xs text-slate-500 md:text-sm">
                    Format: .jpeg, .png & Max file size: 2 MB
                  </p>
                  <label
                    htmlFor="dropzone-file"
                    type="button"
                    className="group relative cursor-pointer overflow-hidden rounded-lg bg-white px-5 py-1.5 font-medium text-white"
                  >
                    <MdAddPhotoAlternate className="text-primary absolute top-1/2 -right-2 -translate-y-1/2 scale-50 text-xl transition-all duration-500 group-hover:right-1 group-hover:scale-100" />
                    <span className="bg-primary absolute top-0 bottom-0 left-0 w-full rounded-lg transition-all duration-500 group-hover:w-22 md:group-hover:w-25"></span>
                    <span className="relative z-1 block text-xs transition-all duration-500 group-hover:-translate-x-3 md:text-sm">
                      Browse Files
                    </span>
                  </label>
                </div>
              </label>
            )}
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              onChange={handleFileChange}
            />

            {preview && (
              <img
                src={preview}
                alt="preview"
                className="h-full w-full object-cover"
              />
            )}
            {preview && (
              <label
                htmlFor="dropzone-file"
                className="group text-dang absolute inset-0 cursor-pointer bg-transparent"
              ></label>
            )}
          </div>

          <div className="w-full pb-6">
            <ReactQuill
              theme="snow"
              value={text1}
              onChange={handleQuillChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
