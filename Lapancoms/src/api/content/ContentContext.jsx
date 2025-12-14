import { createContext } from "react";

export const GalleryContext = createContext({
  gallerys: null,
  setGallerys: () => {},
  loadGallerys: () => {},
});

export const BlogContext = createContext({
  blogs: null,
  setBlogs: () => {},
  loadBlogs: () => {},
});
