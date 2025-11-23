import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import TextEditor from "./TextEditor";

export default function Template1() {
  const navigate = useNavigate();
  const [dataForm, setDataForm] = useState(null); // for
  const [preview, setPreview] = useState(null);
  const [content, setContent] = useState(null);

  useEffect(() => {
    const dataFormPost = localStorage.getItem("formPostBlog");
    if (dataFormPost) {
      setDataForm(JSON.parse(dataFormPost));
    }
  }, []);

  // const handleSubmitAPI = async () => {
  //   const response = await fetch("http://localhost:8000/api", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(data),
  //   });
  //   console.log("response: ", await response.json());

  //   localStorage.removeItem("fromData");
  //   navigate("/admin", { replace: true });
  // };
  const handleSubmitAPI = async () => {
    localStorage.removeItem("formPostBlog");
    navigate("/admin/dashboard", { replace: true });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setPreview(reader.result);
      localStorage.setItem("Image1", reader.result);
    };
    reader.readAsDataURL(file); // convert ke base64
  };

  useEffect(() => {
    const dataImage = localStorage.getItem("Image1");
    if (dataImage) {
      setPreview(dataImage);
    }
  }, []);
  useEffect(() => {
    const dataEditor = localStorage.getItem("EditorContent");
    if (dataEditor) setContent(dataEditor);
  }, []);

  useEffect(() => {
    if (content !== null) {
      localStorage.setItem("EditorContent", content);
    }
  }, [content]);

  if (!dataForm) return <p>Loading ... </p>;

  return (
    <div className="w-full p-0 md:p-6">
      <div className="mb-8 flex justify-between">
        <button
          onClick={() => {
            localStorage.removeItem("formPostBlog");
            localStorage.removeItem("Image1");
            localStorage.removeItem("EditorContent");
            navigate("/admin/postBlog");
          }}
          className="text-primary shadow-soft w-fit cursor-pointer rounded-lg bg-white px-10 py-3 text-sm font-medium"
        >
          Back
        </button>

        <button
          onClick={handleSubmitAPI}
          className="text-dark/60 shadow-soft bg-success w-fit cursor-pointer rounded-lg px-10 py-3 text-sm font-medium"
        >
          Post
        </button>
      </div>
      <div>
        <div className="md:shadow-soft mx-auto w-full overflow-hidden rounded-xl px-5 py-4 md:px-8 lg:w-4xl lg:px-10 xl:w-5xl">
          <h1 className="text-primary mt-6 mb-10 w-2xl text-3xl font-semibold md:text-4xl lg:text-5xl">
            {dataForm.title}
          </h1>
          <div className="relative mb-10 h-[274px] w-full overflow-hidden rounded-xl sm:h-[374px] lg:h-[474px]">
            {!preview && (
              <label
                htmlFor="dropzone-file"
                className="group flex h-full w-full cursor-pointer flex-col items-center justify-center border-2 border-slate-200 bg-gray-50 hover:bg-gray-200"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="text-primary mb-2 h-8 w-8 text-sm md:mb-4 md:text-base"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="text-primary mb-1 text-xs font-medium md:mb-1.5 md:text-sm">
                    Drop file or browse
                  </p>
                  <p className="mb-2 text-xs text-slate-500 md:text-sm">
                    Format: .jpeg, .png & Max file size: 25 MB
                  </p>
                  <label
                    htmlFor="dropzone-file"
                    type="button"
                    className="bg-primary hover:bg-primary/90 cursor-pointer rounded-lg px-5 py-1.5 text-xs font-medium text-white md:text-sm"
                  >
                    Browse Files
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
                alt="viewBlog"
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

          <div className="min-h-auto w-full">
            <TextEditor
              value={content}
              onChange={setContent}
              className={"h-full"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
