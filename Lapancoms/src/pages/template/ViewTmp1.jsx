import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.bubble.css";

export default function ViewTmp1({ data }) {
  const urlImage = `http://127.0.0.1:8000/storage/template/${data?.img1}`;

  console.log("is obj?", typeof data.text1); // should be "object"
  console.log("is array?", data.text1.ops); // should be array

  return (
    <div className="w-full bg-white px-4 sm:px-6">
      <h1 className="text-dark mb-5 pt-8 text-2xl font-semibold capitalize sm:pt-10 sm:text-2xl lg:text-4xl">
        {data?.judul}
      </h1>
      <div className="mb-8 h-75 w-full overflow-hidden rounded-xl sm:h-80 lg:h-95">
        <img
          src={urlImage}
          alt="viewBlog"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="pb-10">
        <ReactQuill
          className="editorTxtBlog clearPdEditorBlog"
          value={data?.text1?.ops}
          theme="bubble"
          readOnly
        />
      </div>
    </div>
  );
}
