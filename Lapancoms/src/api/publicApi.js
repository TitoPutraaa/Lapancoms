import axiosPublic from "./axiosPublic";

export const publicGalleryApi = {
  getAll: () => axiosPublic.get("/publicgallery"),
  getById: (idGambar) => axiosPublic.get(`/publicgallery/${idGambar}`),
};

export const publicBlogApi = {
  getAll: () => axiosPublic.get("/publicblog"),
  getById: (idBlog) => axiosPublic.get(`/publicblog/${idBlog}`),
};
export const publicLP = {
  getAll: () => axiosPublic.get("/publiclp"),
};
