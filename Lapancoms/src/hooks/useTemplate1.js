import useDataFormPB from "./useDataFormPB";
import useImagePreview from "./useImagePreview";
import useEditorContent from "./useEditorContent";
import { useNavigate } from "react-router-dom";

export default function useTemplate1() {
  const navigate = useNavigate();
  const { dataForm } = useDataFormPB("dataFormPostB");
  const { image, preview, handleFileChange } = useImagePreview("Image1");
  const { content, setContent } = useEditorContent("EdContent1");

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.removeItem("dataFormPostB");
    localStorage.removeItem("Image1");
    localStorage.removeItem("EdContent1");

    navigate("/admin/dashboard", { replace: true });
  };

  return {
    dataForm,
    preview,
    handleFileChange,
    content,
    setContent,
    handleSubmit,
    navigate,
  };
}
