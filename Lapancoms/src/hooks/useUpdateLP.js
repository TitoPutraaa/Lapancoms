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
        case "about_h1":
          console.log(formData);
          await LandingPageApi.s2h1(formData);
          setUpd(upd ? false : true);
          localStorage.removeItem("content");

          break;
        case "about_p1":
          console.log(formData);
          await LandingPageApi.s2p1(formData);
          setUpd(upd ? false : true);
          localStorage.removeItem("content");
          break;
        case "map_h1":
          console.log(formData);
          await LandingPageApi.s3h1(formData);
          setUpd(upd ? false : true);
          localStorage.removeItem("content");

          break;
        case "map_p1":
          console.log(formData);
          await LandingPageApi.s3p1(formData);
          setUpd(upd ? false : true);
          localStorage.removeItem("content");
          break;
        case "footer_p1":
          console.log(formData);
          await LandingPageApi.fp1(formData);
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

  const handleSubmitLink = async (target) => {
    const formData = new FormData();

    try {
      switch (target) {
        case "instagram":
          formData.append(target, localStorage.getItem("ig"));
          formData.append("facebook", localStorage.getItem("fb"));
          formData.append("youtube", localStorage.getItem("yt"));
          console.log("form link", formData);
          await LandingPageApi.link(formData);
          setUpd(upd ? false : true);

          break;
        case "facebook":
          formData.append("instagram", localStorage.getItem("ig"));
          formData.append(target, localStorage.getItem("fb"));
          formData.append("youtube", localStorage.getItem("yt"));
          console.log("form link", formData);
          await LandingPageApi.link(formData);
          setUpd(upd ? false : true);

          break;
        case "youtube":
          formData.append("instagram", localStorage.getItem("ig"));
          formData.append("facebook", localStorage.getItem("fb"));
          formData.append(target, localStorage.getItem("yt"));
          console.log("form link", formData);
          await LandingPageApi.link(formData);
          setUpd(upd ? false : true);

          break;
        default:
          break;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    handleQuillChange,
    handleSubmit,
    handleSubmitLink,
    upd,
  };
}
