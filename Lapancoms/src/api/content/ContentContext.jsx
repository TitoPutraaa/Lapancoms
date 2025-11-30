import { createContext } from "react";

export const GalleryContext = createContext({
  gallerys: null,
  setGallerys: () => {},
});

export const BlogContext = createContext({
  blogs: null,
  setBlogs: () => {},
});
