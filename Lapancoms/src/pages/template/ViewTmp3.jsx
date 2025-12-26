import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.bubble.css";

export default function ViewTmp3({ data }) {
  const img1 = `http://127.0.0.1:8000/storage/template/${data?.img1}`;
  const img2 = `http://127.0.0.1:8000/storage/template/${data?.img2}`;
  const img3 = `http://127.0.0.1:8000/storage/template/${data?.img3}`;

  return (
    <div className="bg-gray-100">
      <div className="mx-auto w-full rounded-xl bg-white px-4 transition-all duration-500 sm:w-xl sm:shadow lg:w-3xl">
        <h1 className="text-primary mb-5 pt-5 text-xl font-semibold capitalize sm:text-2xl lg:text-3xl">
          {data?.judul}
        </h1>
        <div className="mb-8 h-75 w-full overflow-hidden rounded-xl sm:h-80 lg:h-95">
          <img
            src={img1}
            alt="viewBlog"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="text-primary flex flex-wrap gap-6 pb-6 text-sm sm:text-base">
          <ReactQuill value={data?.text1?.ops} theme="bubble" readOnly />
        </div>
        <div className="flex items-center gap-5">
          <div className="mb-8 size-90 shrink-0 overflow-hidden">
            <img
              src={img2}
              alt="viewBlog"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <div className="text-primary flex flex-wrap gap-6 pb-6 text-sm sm:text-base">
            <ReactQuill value={data?.text2?.ops} theme="bubble" readOnly />
          </div>
        </div>
        <div className="flex flex-row-reverse items-center gap-5">
          <div className="mb-8 size-90 shrink-0 overflow-hidden">
            <img
              src={img3}
              alt="viewBlog"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <div className="text-primary flex w-full flex-wrap gap-6 pb-6 text-sm sm:text-base">
            <ReactQuill value={data?.text3?.ops} theme="bubble" readOnly />
          </div>
        </div>
      </div>
    </div>
  );
}
