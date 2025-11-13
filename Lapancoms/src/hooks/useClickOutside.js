import { useEffect } from "react";
export default function useClickOutside(ref, setValue) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setValue();
      }
    }

    // for read all the document
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside); //for mobile

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, setValue]);
}
