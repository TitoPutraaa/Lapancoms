import { apiHandler } from "../utils/helper";
import axiosAdmin from "./axiosAdmin";

const blogApi = {
  getAll: () => apiHandler(axiosAdmin.get("/blog")),
  getById: (idBlog) => apiHandler(axiosAdmin.get(`/blog/${idBlog}`)),
  delete: (idBlog) => apiHandler(axiosAdmin.get(`/blog/${idBlog}`)),
  add: (data) =>
    apiHandler(
      axiosAdmin.post("/blog", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }),
    ),
};

export default blogApi;
