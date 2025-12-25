import UpdateLP from "../pages/UpdateLP";
import LandingPageApi from "../api/LandingPageApi";
import { useState } from "react";

export default function useUpdateLP() {
  const [upd, setUpd] = useState(false);
  const handleQuillChange = (content, delta, source, editor) => {
    if (source !== "user") return;

    const deltaValue = editor.getContents();
    localStorage.setItem("content", JSON.stringify(deltaValue));
  };

  const handleSubmit = async (target) => {
    const toSend = localStorage.getItem("content");
    const formData = new FormData();
    formData.append(target, toSend);

    try {
      switch (target) {
        case "home_h1":
          console.log(formData);
          await LandingPageApi.s1h1(formData);
          setUpd(upd ? false : true);
          localStorage.removeItem("content");

          break;
        case "home_p1":
          console.log(formData);
          await LandingPageApi.s1p1(formData);
          setUpd(upd ? false : true);
          localStorage.removeItem("content");
          break;

        default:
          break;
      }
    } catch (error) {
      console.log("sub", error);
    }
  };

  return {
    handleQuillChange,
    handleSubmit,
    upd,
  };
}
