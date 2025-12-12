import { Link } from "react-router-dom";
import usePostImage from "../hooks/usePostImage";

export default function PostImage() {
  const { judulGambar, preview, handleChange, handleFileChange, handleSubmit } =
    usePostImage();
  return (
    <div className="mt-10">
      <h1 className="text-dark text-2xl font-medium">Post Image</h1>

      <div className="my-8">
        <h2 className="text-dark mb-1 text-lg font-semibold sm:mb-1.5">
          Upload and attach files
        </h2>
        <p className="text-xs text-gray-500 sm:text-sm">
          Upload and attach files to this project.
        </p>
      </div>
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
            name="judulGambar"
            id="title"
            value={judulGambar}
            required
            className="text-dark focus:border-primary focus:ring-primary block w-full rounded-lg border border-slate-300 bg-white p-2.5 text-sm"
            placeholder="Input your title"
            onChange={handleChange}
          />
        </div>
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
            name="namaGambar"
            onChange={handleFileChange}
            accept="image/*"
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
