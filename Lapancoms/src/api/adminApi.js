import axiosClient from "./axiosClient";

const adminApi = {
  getAll: () => axiosClient.get("/admins"),
  add: (data) => axiosClient.post("/admins", data),
  destroy: (idAdmin) => axiosClient.delete(`/admins/${idAdmin}`),
  login: (data) => axiosClient.post("/login", data),
};

export default adminApi;
