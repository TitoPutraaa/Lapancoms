import { useEffect, useState } from "react";

export default function useImagePreview(key = "Image1") {
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem(key);
    if (data) setPreview(data);
  }, [key]);

  const handleFileChange = (e) => {
    const file = e.target.file[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
      localStorage.setItem(key, reader.result);
    };
    reader.readAsDataURL(file);
  };

  return { preview, handleFileChange };
}
