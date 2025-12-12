import axiosAdmin from "./axiosAdmin";

const adminApi = {
  getAll: () => axiosAdmin.get("/admin"),
  add: (data) => axiosAdmin.post("/admin", data),
  destroy: (idAdmin) => axiosAdmin.delete(`/admin/${idAdmin}`),
  login: (data) => axiosAdmin.post("/login", data),
  logout: () => axiosAdmin.post("/logout"),
};

export default adminApi;
