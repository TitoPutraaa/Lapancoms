import { useEffect, useState } from "react";
import { AdminContext } from "./AdminContext";
import axiosClient from "../api/adminApi";

export default function AdminProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [admin, setAdmin] = useState({});

  async function getAdmin() {
    try {
      const res = await axiosClient.me();
      const data = res.data;
      setAdmin(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (token) {
      getAdmin();
    }
  }, [token]);

  return (
    <AdminContext.Provider value={{ token, setToken, admin }}>
      {children}
    </AdminContext.Provider>
  );
}
