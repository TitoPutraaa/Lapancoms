import { useState } from "react";
import galleryApi from "../api/galleryApi";

export default function usePostImage() {
  const [judulGambar, setJudulGambar] = useState("");
  const [namaGambar, setNamaGambar] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    setJudulGambar(e.target.value);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // VALIDATE using "file" — NOT namaGambar state
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
      alert("Pilih gambar dulu");
      return;
    }

    const formData = new FormData();
    formData.append("judulGambar", judulGambar);
    formData.append("namaGambar", namaGambar);

    try {
      const response = await galleryApi.add(formData);
      console.log("Uploaded:", response.data);
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
