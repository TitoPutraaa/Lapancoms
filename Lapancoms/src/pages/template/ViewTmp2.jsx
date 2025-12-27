import ReactQuill from "react-quill-new";

import "react-quill-new/dist/quill.bubble.css";

export default function ViewTmp2({ data }) {
  const img1 = `http://127.0.0.1:8000/storage/template/${data?.img1}`;
  const img2 = `http://127.0.0.1:8000/storage/template/${data?.img2}`;

  return (
    <div className="bg-gray-100">
      <div className="rounded-xlpx-4 mx-auto w-full transition-all duration-500 sm:w-xl sm:shadow lg:w-3xl">
        <h1 className="text-primary mb-5 pt-5 text-xl font-semibold capitalize sm:text-2xl lg:text-3xl">
          {data?.judul}
        </h1>
        <div className="flex gap-5">
          <div className="float-left mb-8 h-100 w-1/2 shrink-0 overflow-hidden rounded-xl">
            <img
              src={img1}
              alt="viewBlog"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="text-primary w-1/2 gap-6 pb-6 text-sm sm:text-base">
            <div className="ql-editor wrap-anywhere">
              <ReactQuill value={data?.text1?.ops} theme="bubble" readOnly />
            </div>
          </div>
        </div>
        <div className="mt-7 flex gap-5">
          <div className="mb-8 h-100 w-1/2 shrink-0 overflow-hidden rounded-xl">
            <img
              src={img2}
              alt="viewBlog"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="text-primary flex flex-wrap gap-6 pb-6 text-sm sm:text-base">
            <ReactQuill value={data?.text2?.ops} theme="bubble" readOnly />
          </div>
        </div>
      </div>
    </div>
  );
}
