import { apiHandler } from "../utils/helper";
import axiosAdmin from "./axiosAdmin";

const blogApi = {
  getAll: () => apiHandler(axiosAdmin.get("/blog")),
  getById: (idGambar) => apiHandler(axiosAdmin.get(`/blog/${idGambar}`)),
  add: (data) =>
    apiHandler(
      axiosAdmin.post("/blog", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }),
    ),
  delete: (idGambar) => apiHandler(axiosAdmin.put(`/blog/${idGambar}`)),
};

export default blogApi;
