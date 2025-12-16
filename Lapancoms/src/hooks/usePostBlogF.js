import { useImmer } from "use-immer";

export default function usePostBlogF() {
  const [form, setForm] = useImmer({ judul: "", template: "" });

  const handleChange = (e) => {
    setForm((draft) => {
      draft.judul = e.target.value;
    });
  };

  const handleSelect = (e) => {
    setForm((draft) => {
      draft.template = e;
      console.log("usePost", e);
    });
  };

  const validateTmplt = () => {
    if (!form) {
      return false;
    }
    return true;
  };

  return {
    form,
    handleChange,
    handleSelect,
    validateTmplt,
  };
}
