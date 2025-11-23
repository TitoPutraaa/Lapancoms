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

export default axiosClient;
