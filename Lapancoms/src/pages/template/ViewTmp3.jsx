import { QuillDeltaToHtmlConverter } from "quill-delta-to-html";

export default function ViewTmp3({ data }) {
  const img1 = `http://127.0.0.1:8000/storage/template/${data?.img1}`;
  const img2 = `http://127.0.0.1:8000/storage/template/${data?.img2}`;
  const img3 = `http://127.0.0.1:8000/storage/template/${data?.img3}`;
  const converter = new QuillDeltaToHtmlConverter(data?.text1?.ops);
  const text1 = converter.convert();
  const text2 = converter.convert();
  const text3 = converter.convert();
  return (
    <>
      <h1 className="text-primary mb-5 pt-5 text-xl font-semibold capitalize sm:text-2xl lg:text-3xl">
        {data?.judul}
      </h1>
      <div className="mb-8 h-75 w-full overflow-hidden rounded-xl sm:h-80 lg:h-95">
        <img src={img1} alt="viewBlog" className="h-full w-full object-cover" />
      </div>
      <div className="text-primary flex flex-wrap gap-6 pb-6 text-sm sm:text-base">
        <div dangerouslySetInnerHTML={{ __html: text1 }} />
      </div>
      <div className="flex gap-5">
        <div className="mb-8 h-75 w-full overflow-hidden rounded-full sm:h-80 lg:h-95">
          <img
            src={img2}
            alt="viewBlog"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="text-primary flex flex-wrap gap-6 pb-6 text-sm sm:text-base">
          <div dangerouslySetInnerHTML={{ __html: text2 }} />
        </div>
      </div>
      <div className="flex flex-row-reverse gap-5">
        <div className="mb-8 h-75 w-full overflow-hidden rounded-full sm:h-80 lg:h-95">
          <img
            src={img3}
            alt="viewBlog"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="text-primary flex flex-wrap gap-6 pb-6 text-sm sm:text-base">
          <div dangerouslySetInnerHTML={{ __html: text3 }} />
        </div>
      </div>
    </>
  );
}
