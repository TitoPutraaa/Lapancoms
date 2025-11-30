import { apiHandler } from "../utils/helper";
import axiosAdmin from "./axiosAdmin";

const galleryApi = {
  getAll: () => apiHandler(axiosAdmin.get("/gallery")),
  getById: (idGambar) => apiHandler(axiosAdmin.get(`/gallery/${idGambar}`)),
  add: (data) => apiHandler(axiosAdmin.post("/gallery", data)),
  delete: (idGambar) => apiHandler(axiosAdmin.delete(`/gallery/${idGambar}`)), //not update end?
};

export default galleryApi;
