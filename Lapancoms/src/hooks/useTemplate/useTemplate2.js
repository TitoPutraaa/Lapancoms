import { useNavigate } from "react-router-dom";
import { useState } from "react";
import blogApi from "../../api/blogApi";

export default function useTemplate1() {
  const navigate = useNavigate();
  const [img1, setImg1] = useState(null);
  const [img2, setImg2] = useState(null);
  const [preview1, setPreview1] = useState(() =>
    localStorage.getItem("prev_img1"),
  );
  const [preview2, setPreview2] = useState(() =>
    localStorage.getItem("prev_img2"),
  );

  const [text1, setText1] = useState(() => {
    const saved = localStorage.getItem("prev_text1");
    return saved ? JSON.parse(saved) : null;
  });
  const [text2, setText2] = useState(() => {
    const saved = localStorage.getItem("prev_text2");
    return saved ? JSON.parse(saved) : null;
  });

  const handleChangeText1 = (content, delta, source, editor) => {
    if (source !== "user") return;

    const deltaValue = editor.getContents();
    setText1(deltaValue);
    localStorage.setItem("prev_text1", JSON.stringify(deltaValue));
  };

  const handleChangeText2 = (content, delta, source, editor) => {
    if (source !== "user") return;

    const deltaValue = editor.getContents();
    setText2(deltaValue);
    localStorage.setItem("prev_text2", JSON.stringify(deltaValue));
  };

  const handleFileChange1 = (e) => {
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
      setPreview1(reader.result);
      localStorage.setItem("prev_img1", reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange2 = (e) => {
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
    setImg2(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview2(reader.result);
      localStorage.setItem("prev_img2", reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!img1) {
      alert("please add an image");
      return;
    }
    if (!img2) {
      alert("please add an image");
      return;
    }

    const formData = new FormData();
    formData.append("judul", localStorage.getItem("judul"));
    formData.append("kdTemplate", localStorage.getItem("template"));
    formData.append("text1", JSON.stringify(text1));
    formData.append("text2", JSON.stringify(text2));
    formData.append("img1", img1);
    formData.append("img2", img2);

    try {
      const response = await blogApi.add(formData);
      console.log("Uploaded:", response.data);
      localStorage.removeItem("judul");
      localStorage.removeItem("template");
      localStorage.removeItem("prev_text1");
      localStorage.removeItem("prev_img1");
      localStorage.removeItem("prev_text2");
      localStorage.removeItem("prev_img2");
      navigate("/admin/dashboard", { replace: true });
    } catch (err) {
      console.log("FAILED:", err.response?.data);
    }

    navigate("/admin/dashboard", { replace: true });
  };

  return {
    text1,
    text2,
    preview1,
    preview2,
    handleFileChange1,
    handleFileChange2,
    handleChangeText1,
    handleChangeText2,
    handleSubmit,
  };
}
