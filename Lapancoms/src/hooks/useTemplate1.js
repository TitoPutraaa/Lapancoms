import { useNavigate } from "react-router-dom";
import { useState } from "react";
import blogApi from "../api/blogApi";

export default function useTemplate1() {
  const navigate = useNavigate();
  const [preview, setPreview] = useState(() =>
    localStorage.getItem("prev_img1"),
  );
  const [text1, setText1] = useState(() => {
    const saved = localStorage.getItem("prev_text1");
    return saved ? JSON.parse(saved) : null;
  });
  const [img1, setImg1] = useState(null);

  const handleQuillChange = (content, delta, source, editor) => {
    if (source !== "user") return;

    const deltaValue = editor.getContents();
    setText1(deltaValue);
    localStorage.setItem("prev_text1", JSON.stringify(deltaValue));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log("e target", e.target.files);

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("File harus gambar");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("Max file size 5MB");
      return;
    }

    // Set state
    setImg1(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
      localStorage.setItem("prev_img1", reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!img1) {
      alert("please add an image");
      return;
    }

    const formData = new FormData();
    formData.append("judul", localStorage.getItem("judul"));
    formData.append("kdTemplate", localStorage.getItem("template"));
    formData.append("text1", JSON.stringify(text1));
    formData.append("img1", img1);

    try {
      const response = await blogApi.add(formData);
      console.log("Uploaded:", response.data);
      localStorage.removeItem("judul");
      localStorage.removeItem("template");
      localStorage.removeItem("prev_text1");
      localStorage.removeItem("prev_img1");
      navigate("/admin/dashboard", { replace: true });
    } catch (err) {
      console.log("FAILED:", err.response?.data);
    }

    navigate("/admin/dashboard", { replace: true });
  };

  return {
    text1,
    preview,
    handleFileChange,
    handleQuillChange,
    handleSubmit,
  };
}
