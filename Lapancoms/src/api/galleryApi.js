import axiosAdmin from "./axiosAdmin";

const galleryApi = {
  getAll: () => axiosAdmin.get("/gallery"),
  getById: (idGambar) => axiosAdmin.get(`/gallery/${idGambar}`),
  add: (data) => axiosAdmin.post("/gallery", data),
  delete: () => axiosAdmin.delete("/gallery"),
};

export default galleryApi;
