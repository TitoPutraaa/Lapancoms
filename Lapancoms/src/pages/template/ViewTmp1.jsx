import { QuillDeltaToHtmlConverter } from "quill-delta-to-html";

export default function ViewTmp1({ data }) {
  const urlImage = `http://127.0.0.1:8000/storage/template/${data?.img1}`;
  const converter = new QuillDeltaToHtmlConverter(data?.text1?.ops);
  const text1 = converter.convert();
  console.log("is obj?", typeof data.text1); // should be "object"
  console.log("is array?", data.text1.ops); // should be array

  return (
    <div className="bg-gray-100">
      <div className="mx-auto w-full rounded-xl bg-white px-4 transition-all duration-500 sm:w-xl sm:shadow lg:w-3xl">
        <h1 className="text-primary mb-5 pt-5 text-xl font-semibold capitalize sm:text-2xl lg:text-3xl">
          {data?.judul}
        </h1>
        <div className="mb-8 h-75 w-full overflow-hidden rounded-xl sm:h-80 lg:h-95">
          <img
            src={urlImage}
            alt="viewBlog"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="text-primary flex w-28 flex-wrap gap-6 pb-6 text-sm sm:text-base">
          <div className="" dangerouslySetInnerHTML={{ __html: text1 }} />
        </div>
      </div>
    </div>
  );
}
