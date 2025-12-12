import { useState } from "react";
import { AdminContext } from "./AdminContext";

export default function AdminProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token"));

  return (
    <AdminContext.Provider value={{ token, setToken }}>
      {children}
    </AdminContext.Provider>
  );
}
