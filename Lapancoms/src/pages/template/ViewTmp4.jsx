import { QuillDeltaToHtmlConverter } from "quill-delta-to-html";

import "react-quill-new/dist/quill.bubble.css";

export default function ViewTmp4({ data }) {
  const img1 = `http://127.0.0.1:8000/storage/template/${data?.img1}`;
  const img2 = `http://127.0.0.1:8000/storage/template/${data?.img2}`;
  const img3 = `http://127.0.0.1:8000/storage/template/${data?.img3}`;
  const img4 = `http://127.0.0.1:8000/storage/template/${data?.img4}`;
  const convt1 = new QuillDeltaToHtmlConverter(data?.text1?.ops);
  const convt2 = new QuillDeltaToHtmlConverter(data?.text2?.ops);
  const convt3 = new QuillDeltaToHtmlConverter(data?.text3?.ops);
  const text1 = convt1.convert();
  const text2 = convt2.convert();
  const text3 = convt3.convert();
  return (
    <div className="bg-gray-100">
      <div className="mx-auto w-full rounded-xl bg-white px-4 transition-all duration-500 sm:w-xl sm:shadow lg:w-3xl">
        <h1 className="text-primary mb-5 pt-5 text-xl font-semibold capitalize sm:text-2xl lg:text-3xl">
          {data?.judul}
        </h1>
        <div className="flex flex-row-reverse gap-5">
          <div className="mb-8 h-30 w-30 shrink-0 overflow-hidden rounded-xl">
            <img
              src={img1}
              alt="viewBlog"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="text-primary flex w-full flex-wrap gap-6 pb-6 text-sm sm:text-base">
            <ReactQuill value={text1} theme="bubble" readOnly />
          </div>
        </div>

        <div className="mb-7 h-75 w-full overflow-hidden rounded-xl sm:h-80 lg:h-95">
          <img
            src={img2}
            alt="viewBlog"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="text-primary flex flex-wrap gap-6 pb-6 text-sm sm:text-base">
          <ReactQuill value={text2} theme="bubble" readOnly />
        </div>
        <div className="mb-8 h-75 w-full overflow-hidden rounded-xl sm:h-80 lg:h-95">
          <img
            src={img3}
            alt="viewBlog"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="text-primary flex flex-wrap gap-6 pb-6 text-sm sm:text-base">
          <ReactQuill value={text3} theme="bubble" readOnly />
        </div>
        <div className="mb-8 h-75 w-full overflow-hidden rounded-xl sm:h-80 lg:h-95">
          <img
            src={img4}
            alt="viewBlog"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
