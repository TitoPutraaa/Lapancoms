import { BsCloudUpload } from "react-icons/bs";
import { MdAddPhotoAlternate } from "react-icons/md";

export default function DropImg({ id }) {
  return (
    <label
      htmlFor={id}
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
  );
}
