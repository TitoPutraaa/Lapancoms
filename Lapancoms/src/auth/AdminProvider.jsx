import { useEffect, useState } from "react";
import { AdminContext } from "./AdminContext";

export default function AdminProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [admin, setAdmin] = useState({});

  async function getAdmin() {
    const res = await fetch("/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();
    setAdmin(data);
    console.log(data);
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
