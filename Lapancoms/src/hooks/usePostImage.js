import { useState } from "react";
import galleryApi from "../api/galleryApi";
import { Navigate, useNavigate } from "react-router-dom";

export default function usePostImage() {
  const [judulGambar, setJudulGambar] = useState("");
  const [namaGambar, setNamaGambar] = useState(null);
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setJudulGambar(e.target.value);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
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
    setNamaGambar(file);
    setPreview(URL.createObjectURL(file));

    console.log("Selected:", file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!namaGambar) {
      alert("please add an image");
      return;
    }

    const formData = new FormData();
    formData.append("judulGambar", judulGambar);
    formData.append("namaGambar", namaGambar);

    try {
      const response = await galleryApi.add(formData);
      console.log("Uploaded:", response.data);
      navigate("/admin/dashboard", { replace: true });
    } catch (err) {
      console.log("FAILED:", err.response?.data);
    }
  };

  return {
    judulGambar,
    preview,
    namaGambar,
    handleChange,
    handleFileChange,
    handleSubmit,
  };
}
