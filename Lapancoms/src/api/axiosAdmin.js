import axios from "axios";

const axiosAdmin = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  headers: {
    // "Content-Type": "application/json",
    // Accept: "application/json",
    // withCredentials: true,
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
