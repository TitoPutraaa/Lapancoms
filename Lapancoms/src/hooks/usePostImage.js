import { useState } from "react";

export default function usePostImage() {
  const [titleImg, setTitleImg] = useState("");
  const [image, setImage] = useState(null); // berisi file asli
  const [preview, setPreview] = useState(null); // only for preview

  const handleChange = (e) => {
    setTitleImg(e.target.value);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // validate type
    if (!file.type.startsWith("image/")) {
      alert("File harus gambar");
      return;
    }

    // validate size
    if (file.size > 2 * 1024 * 1024) {
      alert("Image maximal 2MB");
      return;
    }

    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!image) {
      alert("Pilih Gambar terlebih dahulu");
      return;
    }

    setTitleImg("");
    setImage("");
    setPreview("");
  };

  return {
    titleImg,
    preview,
    handleChange,
    handleFileChange,
    handleSubmit,
  };
}
