import { useEffect, useState } from "react";
import { base64ToBlob } from "../utils/converters";

export default function useImagePreview(key = "Image1") {
  const [preview, setPreview] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem(key);
    if (data) {
      setPreview(data);
      setImage(base64ToBlob(data));
    }
  }, [key]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log(e);
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

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
      localStorage.setItem(key, reader.result);
    };
    reader.readAsDataURL(file);
  };

  return { image, preview, handleFileChange };
}
