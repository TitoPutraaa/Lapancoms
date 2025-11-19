import Template1 from "../common/Template1";
import Template2 from "../common/Template2";
import Template3 from "../common/Template3";
import Template4 from "../common/Template4";
import Template5 from "../common/Template5";
import { useState, useEffect } from "react";

export default function Temple() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const dataFormPost = localStorage.getItem("formPostBlog");
    if (dataFormPost) {
      setData(JSON.parse(dataFormPost));
    }
  }, []);

  if (!data) return <p>Loading</p>;

  switch (data.template) {
    case "1":
      return <Template1 />;
    case "2":
      return <Template2 />;
    case "3":
      return <Template3 />;
    case "4":
      return <Template4 />;
    case "5":
      return <Template5 />;
    default:
      return <p>Not Found</p>;
  }
}
