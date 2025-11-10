import axiosClient from "./axiosClient";

const adminApi = {
  getAll: () => axiosClient.get("/admins"),
  add: (data) => axiosClient.post("/admins", data),
  destroy: (idAdmin) => axiosClient.delete(`/admins/${idAdmin}`),
};

export default adminApi;
