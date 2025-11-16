import axios from "axios";

// Use Vite env variable in production or fall back to relative '/api' for dev proxy
const BASE = import.meta.env.VITE_API_BASE_URL || "/api";

const axiosClient = axios.create({
  baseURL: BASE,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Attach bearer token from localStorage when present
axiosClient.interceptors.request.use(
  (config) => {
    try {
      const token = localStorage.getItem("access_token");
      if (token) {
        config.headers = config.headers || {};
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (e) {
      // ignore storage errors in dev
    }
    return config;
  },
  (error) => Promise.reject(error),
);

export default axiosClient;
