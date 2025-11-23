import { useEffect, useState } from "react";

export default function useDataFormPB(key = "dataFormPostB") {
  const [dataForm, setDataForm] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem(key);
    if (data) setDataForm(JSON.parse(data));
  }, [key]);

  return { dataForm };
}
