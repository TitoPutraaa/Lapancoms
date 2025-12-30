import { Link } from "react-router-dom";
import usePostImage from "../hooks/usePostImage";
import DropImg from "../components/common/DropImg";

export default function PostImage() {
  const { judulGambar, preview, handleChange, handleFileChange, handleSubmit } =
    usePostImage();
  return (
    <div className="mt-10 mr-4">
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
          {!preview && <DropImg id={"dropzone-file"} />}

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
        <div className="mr-2 mb-10 flex w-full gap-4 sm:w-lg">
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
