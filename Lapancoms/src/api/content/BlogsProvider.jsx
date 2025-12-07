import { useEffect, useState } from "react";
import { BlogContext } from "./ContentContext";
import blogApi from "../blogApi";

export default function BlogProvider({ children }) {
  const [blogs, setBlogs] = useState(null);

  async function loadBlogs() {
    const { data } = await blogApi.getAll();
    setBlogs(data);
  }
  useEffect(() => {
    loadBlogs();
  }, []);

  return (
    <BlogContext.Provider value={{ setBlogs, blogs, loadBlogs }}>
      {children}
    </BlogContext.Provider>
  );
}
