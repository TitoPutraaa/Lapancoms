import Quill from "quill";

export default function QuillEditor() {
  const toolbarOptions1 = [
    ["bold", "italic", "underline"],
    [{ align: [] }],
    ["clean"],
  ];
  const toolbarOptions2 = [
    [{ header: [1, 2, 3, false] }],
    ["bold", "italic", "underline"],
    [{ align: [] }],
    ["clean"],
  ];
  const quill = new Quill("#editor", {
    modules: {
      toolbar: toolbarOptions2,
    },
  });
  return <>{quill}</>;
}
