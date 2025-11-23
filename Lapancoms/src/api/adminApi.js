import axiosAdmin from "./axiosAdmin";

const adminApi = {
  getAll: () => axiosAdmin.get("/admins"),
  add: (data) => axiosAdmin.post("/admins", data),
  destroy: (idAdmin) => axiosAdmin.delete(`/admins/${idAdmin}`),
  login: (data) => axiosAdmin.post("/login", data),
  logout: () => axiosAdmin.post("/logout"),
  me: () => axiosAdmin.get("/me"),
};

export default adminApi;
