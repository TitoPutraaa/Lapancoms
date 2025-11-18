import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

export default function TextEditor({ value, onChange, className }) {
  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={onChange}
      className={`w-full ${className}`}
    />
  );
}
