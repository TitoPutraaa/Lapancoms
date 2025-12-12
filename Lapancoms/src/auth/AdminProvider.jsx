import { useState } from "react";
import { AdminContext } from "./AdminContext";

export default function AdminProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [admin, setAdmin] = useState(null);

  console.log("admin pro", admin);

  return (
    <AdminContext.Provider value={{ token, setToken, admin, setAdmin }}>
      {children}
    </AdminContext.Provider>
  );
}
