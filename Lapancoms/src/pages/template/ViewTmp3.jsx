import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.bubble.css";

export default function ViewTmp3({ data }) {
  const img1 = `http://127.0.0.1:8000/storage/template/${data?.img1}`;
  const img2 = `http://127.0.0.1:8000/storage/template/${data?.img2}`;
  const img3 = `http://127.0.0.1:8000/storage/template/${data?.img3}`;

  return (
    <div className="w-full bg-white px-4 sm:px-6">
      <h1 className="text-dark mb-5 pt-8 text-2xl font-semibold capitalize sm:pt-10 sm:text-2xl lg:text-4xl">
        {data?.judul}
      </h1>
      <div className="mb-8 h-75 w-full overflow-hidden rounded-xl sm:h-80 lg:h-95">
        <img src={img1} alt="viewBlog" className="h-full w-full object-cover" />
      </div>
      <div className="pb-10">
        <ReactQuill
          className="editorTxtBlog clearPdEditorBlog"
          value={data?.text1?.ops}
          theme="bubble"
          readOnly
        />
      </div>
      <div className="pb-6">
        <div className="xs:size-50 float-left mr-3 mb-1 size-40 overflow-hidden rounded-full sm:size-60 lg:size-80">
          <img
            src={img2}
            alt="viewBlog"
            className="h-full w-full rounded-full object-cover"
          />
        </div>
        <ReactQuill
          className="editorTxtBlog clearPdEditorBlog viewEditorBlogF"
          value={data?.text2?.ops}
          theme="bubble"
          readOnly
        />
        <div className="clear-both"></div>
      </div>
      <div className="pb-10">
        <div className="xs:size-50 float-right mb-1 ml-3 size-40 overflow-hidden rounded-full sm:size-60 lg:size-80">
          <img
            src={img3}
            alt="viewBlog"
            className="h-full w-full rounded-full object-cover"
          />
        </div>

        <ReactQuill
          className="editorTxtBlog clearPdEditorBlog viewEditorBlogF"
          value={data?.text3?.ops}
          theme="bubble"
          readOnly
        />
      </div>
    </div>
  );
}
