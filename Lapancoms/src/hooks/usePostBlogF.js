import { useState } from "react";

export default function usePostBlogF() {
  const [errTmplt, setErrTmplt] = useState(false);
  const [dataFormPostB, setDataFormPostB] = useState({
    title: "",
    template: "",
  });

  const handleChange = (e) => {
    setDataFormPostB({
      ...dataFormPostB,
      [e.target.name]: e.target.value,
    });
    setErrTmplt(false);
  };

  const handleSelect = (e) => {
    setDataFormPostB({
      ...dataFormPostB,
      template: e,
    });
    setErrTmplt(false);
  };

  const validateTmplt = () => {
    if (!dataFormPostB.template) {
      setErrTmplt(true);
      return false;
    }
    return true;
  };

  return {
    dataFormPostB,
    errTmplt,
    handleChange,
    handleSelect,
    validateTmplt,
  };
}
