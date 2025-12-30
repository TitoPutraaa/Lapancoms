import ReactQuill from "react-quill-new";

import "react-quill-new/dist/quill.bubble.css";

export default function ViewTmp2({ data }) {
  const img1 = `http://127.0.0.1:8000/storage/template/${data?.img1}`;
  const img2 = `http://127.0.0.1:8000/storage/template/${data?.img2}`;

  return (
    <div className="w-full bg-white px-4 sm:px-6">
      <h1 className="text-dark mb-5 pt-8 text-2xl font-semibold capitalize sm:pt-10 sm:text-2xl lg:text-4xl">
        {data?.judul}
      </h1>
      <div className="w-full pb-10">
        <div className="xs:h-75 relative float-left mr-3 mb-1 h-60 w-1/2 overflow-hidden rounded-xl sm:h-80 lg:h-110 lg:w-5/12">
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
        <div className="xs:h-75 relative float-left mr-3 mb-1 h-60 w-1/2 overflow-hidden rounded-xl sm:h-80 lg:h-110 lg:w-5/12">
          <img
            src={img2}
            alt="viewBlog"
            className="h-full w-full object-cover"
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
    </div>
  );
}
