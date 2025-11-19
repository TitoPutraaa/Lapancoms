import { useEffect, useState } from "react";

export default function useFormPostBlog(key = "FormPostBlog") {
  const [dataForm, setDataForm] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem(key);
    if (data) setDataForm(JSON.parse(data));
  }, [key]);

  return { dataForm };
}
