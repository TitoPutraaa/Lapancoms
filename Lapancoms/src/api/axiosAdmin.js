import axios from "axios";

// Use Vite env variable in production or fall back to relative '/api' for dev proxy
const BASE = import.meta.env.VITE_API_BASE_URL || "/api";

const axiosAdmin = axios.create({
  baseURL: BASE,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    withCredentials: true,
  },
});

axiosAdmin.interceptors.request.use(
  (config) => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers = config.headers || {};
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (e) {
      console.log(e.error);
    }
    return config;
  },
  (error) => Promise.reject(error),
);

export default axiosAdmin;
