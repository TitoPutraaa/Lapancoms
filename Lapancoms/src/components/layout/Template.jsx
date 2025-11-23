import Template1 from "../common/Template1";
import Template2 from "../common/Template2";
import { useState, useEffect } from "react";

function Temple() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const dataFormPost = localStorage.getItem("formPostBlog");
    if (dataFormPost) {
      setData(JSON.parse(dataFormPost));
    }
  }, []);

  if (!data) return <p>Loading</p>;

  if (data.template === "1") {
    return <Template1 />;
  } else if (data.template === "2") {
    return <Template2 />;
  }
  return <p>Not Found</p>;
}

export default Temple;
