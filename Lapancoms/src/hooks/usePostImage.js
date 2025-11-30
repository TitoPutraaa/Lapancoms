import { useState } from "react";
import galleryApi from "../api/galleryApi";
import { useImmer } from "use-immer";

export default function usePostImage() {
  const [form, setForm] = useImmer({ judulGambar: "", namaGambar: "" });
  const [preview, setPreview] = useState(null); // only for preview

  const handleChange = (e) => {
    setForm((draft) => {
      draft.judulGambar = e.target.value;
    });
  };

  const handleFileChange = (e) => {
    e.preventDefault();
    console.log("hFile", e.target.files[0]);

    const file = e.target.files[0];
    if (!file) return;

    // validate type
    if (!file.type.startsWith("image/")) {
      alert("File harus gambar");
      return;
    }

    // validate size
    if (file.size > 5 * 1024 * 1024) {
      alert("Image maximal 5MB");
      return;
    }

    setForm((draft) => {
      draft.namaGambar = file;
    });
    setPreview(URL.createObjectURL(file));
    console.log(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.namaGambar) {
      alert("Pilih Gambar terlebih dahulu");
      return;
    }

    try {
      const submit = await galleryApi.add({
        judulGambar: form.judulGambar,
        namaGambar: form.namaGambar,
      });
      console.log("sub", submit);
    } catch (error) {
      console.log(error);
    }

    setForm((draft) => {
      draft.judulGambar = "";
      draft.namaGambar = "";
    });
    setPreview("");
  };

  return {
    form,
    preview,
    handleChange,
    handleFileChange,
    handleSubmit,
  };
}

// Note : namaGambar field masih belum bisa masuk, antar pemanggilan nama file salah, atau di page nya belum ada value
