import axiosAdmin from "./axiosAdmin";

const galleryApi = {
  getAll: () => axiosAdmin.get("/gallery"),
  getById: (idGambar) => axiosAdmin.get(`/gallery/${idGambar}`),
  add: (data) =>
    axiosAdmin.post("/gallery", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }),
  delete: (idGambar) => axiosAdmin.delete(`/gallery/${idGambar}`),
};

export default galleryApi;
