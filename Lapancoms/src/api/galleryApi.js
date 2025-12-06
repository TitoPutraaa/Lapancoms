import { apiHandler } from "../utils/helper";
import axiosAdmin from "./axiosAdmin";

const galleryApi = {
  getAll: () => apiHandler(axiosAdmin.get("/gallery")),
  getById: (idGambar) => apiHandler(axiosAdmin.get(`/gallery/${idGambar}`)),
  add: (data) =>
    apiHandler(
      axiosAdmin.post("/gallery", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }),
    ),
  delete: (idGambar) => apiHandler(axiosAdmin.put(`/gallery/${idGambar}`)),
};

export default galleryApi;
