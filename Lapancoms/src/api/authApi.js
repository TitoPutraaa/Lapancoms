import axiosClient from "./axiosClient";

export async function login(credentials) {
  // credentials: { username, password }
  const res = await axiosClient.post("/login", credentials);
  return res.data;
}

export async function logout() {
  return axiosClient.post("/logout");
}

export async function me() {
  return axiosClient.get("/me");
}

export default { login, logout, me };
