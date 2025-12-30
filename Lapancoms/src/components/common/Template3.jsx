import useTemplate3 from "../../hooks/useTemplate/useTemplate3";
import { BsArrowLeft } from "react-icons/bs";
import { FaReply } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill-new";
import DropImg from "./DropImg";
import "react-quill-new/dist/quill.snow.css";

export default function Template3() {
  const navigate = useNavigate();
  const {
    text1,
    text2,
    text3,
    preview1,
    preview2,
    preview3,
    handleFileChange1,
    handleFileChange2,
    handleFileChange3,
    handleChangeText1,
    handleChangeText2,
    handleChangeText3,
    handleSubmit,
  } = useTemplate3();

  const judul = localStorage.getItem("judul");

  return (
    <div className="bg-secondary w-full pb-8">
      <div className="mx-auto mb-6 flex justify-between pt-6 sm:w-xl lg:w-3xl">
        <div
          onClick={() => {
            localStorage.removeItem("judul");
            localStorage.removeItem("template");
            localStorage.removeItem("prev_img1");
            localStorage.removeItem("prev_img2");
            localStorage.removeItem("prev_img3");
            localStorage.removeItem("prev_text1");
            localStorage.removeItem("prev_text2");
            localStorage.removeItem("prev_text3");
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

      <div className="mx-auto w-full rounded-xl bg-white px-4 sm:w-xl sm:px-6 sm:shadow lg:w-3xl">
        <h1 className="mb-5 pt-8 text-2xl font-semibold capitalize sm:pt-10 sm:text-3xl lg:text-4xl">
          {judul}
        </h1>

        {/* IMAGE 1*/}
        <div className="relative mb-6 h-75 w-full overflow-hidden rounded-xl sm:h-80 lg:h-95">
          {!preview1 && <DropImg id={"dropImg1"} />}
          <input
            id="dropImg1"
            type="file"
            className="hidden"
            onChange={handleFileChange1}
          />

          {preview1 && (
            <img
              src={preview1}
              alt="preview1"
              className="h-full w-full object-cover"
            />
          )}
          {preview1 && (
            <label
              htmlFor="dropImg1"
              className="group text-dang absolute inset-0 cursor-pointer bg-transparent"
            ></label>
          )}
        </div>

        <div className="w-full pb-10">
          <ReactQuill
            className="editorTxtBlog"
            theme="snow"
            value={text1}
            onChange={handleChangeText1}
          />
        </div>
        {/* IMAGE 2*/}
        <div className="mb-8 flex gap-2 pb-10 sm:gap-4">
          <div className="xs:size-50 relative size-40 shrink-0 overflow-hidden rounded-full bg-gray-50 hover:bg-gray-200 sm:size-60 lg:size-80">
            {!preview2 && <DropImg id={"dropImg2"} size={"minimize"} />}
            <input
              id="dropImg2"
              type="file"
              className="hidden"
              onChange={handleFileChange2}
            />

            {preview2 && (
              <img
                src={preview2}
                alt="preview"
                className="h-full w-full object-cover"
              />
            )}
            {preview2 && (
              <label
                htmlFor="dropImg2"
                className="group text-dang absolute inset-0 cursor-pointer bg-transparent"
              ></label>
            )}
          </div>

          <div className="w-full min-w-0">
            <ReactQuill
              className="editorTxtBlog"
              theme="snow"
              value={text2}
              onChange={handleChangeText2}
            />
          </div>
        </div>

        {/* IMAGE 3 */}
        <div className="flex flex-row-reverse gap-2 pb-10 sm:gap-4">
          <div className="xs:size-50 relative size-40 shrink-0 overflow-hidden rounded-full bg-gray-50 hover:bg-gray-200 sm:size-60 lg:size-80">
            {!preview3 && <DropImg id={"dropImg3"} size={"minimize"} />}
            <input
              id="dropImg3"
              type="file"
              className="hidden"
              onChange={handleFileChange3}
            />

            {preview3 && (
              <img
                src={preview3}
                alt="preview"
                className="h-full w-full object-cover"
              />
            )}
            {preview3 && (
              <label
                htmlFor="dropImg3"
                className="group text-dang absolute inset-0 cursor-pointer bg-transparent"
              ></label>
            )}
          </div>

          <div className="w-full min-w-0">
            <ReactQuill
              className="editorTxtBlog"
              theme="snow"
              value={text3}
              onChange={handleChangeText3}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
