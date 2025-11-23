import { useEffect, useState } from "react";
import { AdminContext } from "./AdminContext";
import adminApi from "../api/adminApi";

export default function AdminProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [admin, setAdmin] = useState(null);

  async function getAdmin() {
    try {
      const res = await adminApi.me();
      setAdmin(res.data);
    } catch (error) {
      console.log("provider get admin failed", error);
    }
  }

  useEffect(() => {
    if (token) getAdmin();
  }, [token]);

  return (
    <AdminContext.Provider value={{ token, setToken, admin, setAdmin }}>
      {children}
    </AdminContext.Provider>
  );
}
