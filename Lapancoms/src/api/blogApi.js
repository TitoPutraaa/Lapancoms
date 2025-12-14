import axiosAdmin from "./axiosAdmin";

const blogApi = {
  getAll: () => axiosAdmin.get("/blog"),
  getById: (idBlog) => axiosAdmin.get(`/blog/${idBlog}`),
  delete: (idBlog) => axiosAdmin.delete(`/blog/${idBlog}`),
  add: (data) =>
    axiosAdmin.post("/blog", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }),
};

export default blogApi;
