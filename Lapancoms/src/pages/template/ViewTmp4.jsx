import { QuillDeltaToHtmlConverter } from "quill-delta-to-html";
import ReactQuill from "react-quill-new";

import "react-quill-new/dist/quill.bubble.css";

export default function ViewTmp4({ data }) {
  const img1 = `http://127.0.0.1:8000/storage/template/${data?.img1}`;
  const img2 = `http://127.0.0.1:8000/storage/template/${data?.img2}`;
  const img3 = `http://127.0.0.1:8000/storage/template/${data?.img3}`;
  const img4 = `http://127.0.0.1:8000/storage/template/${data?.img4}`;

  return (
    <div className="w-full bg-white px-4 sm:px-6">
      <h1 className="text-dark mb-5 pt-8 text-2xl font-semibold capitalize sm:pt-10 sm:text-2xl lg:text-4xl">
        {data?.judul}
      </h1>
      <div className="pb-10">
        <div className="float-right mb-1 ml-3 h-45 w-35 overflow-hidden rounded-xl sm:h-50 sm:w-40">
          <img
            src={img1}
            alt="viewBlog"
            className="h-full w-full object-cover"
          />
        </div>
        <ReactQuill
          className="editorTxtBlog clearPdEditorBlog viewEditorBlogF"
          value={data?.text1?.ops}
          theme="bubble"
          readOnly
        />
        <div className="clear-both"></div>
      </div>

      <div className="pb-10">
        <div className="mb-8 h-75 w-full overflow-hidden rounded-xl sm:h-80 lg:h-95">
          <img
            src={img2}
            alt="viewBlog"
            className="h-full w-full object-cover"
          />
        </div>
        <ReactQuill
          className="editorTxtBlog clearPdEditorBlog"
          value={data?.text2?.ops}
          theme="bubble"
          readOnly
        />
      </div>

      <div className="pb-10">
        <div className="mb-8 h-75 w-full overflow-hidden rounded-xl sm:h-80 lg:h-95">
          <img
            src={img3}
            alt="viewBlog"
            className="h-full w-full object-cover"
          />
        </div>
        <ReactQuill
          className="editorTxtBlog clearPdEditorBlog"
          value={data?.text3?.ops}
          theme="bubble"
          readOnly
        />
      </div>

      <div className="pb-10">
        <div className="h-75 w-full overflow-hidden rounded-xl sm:h-80 lg:h-95">
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
