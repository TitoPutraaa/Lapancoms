import { useEffect, useState } from "react";

export default function useEditorContent(key = "EdContent1") {
  const [content, setContent] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem(key);
    if (data) setContent(data);
  }, [key]);

  useEffect(() => {
    if (content !== null) localStorage.setItem(key, content);
  }, [key, content]);

  return { content, setContent };
}
