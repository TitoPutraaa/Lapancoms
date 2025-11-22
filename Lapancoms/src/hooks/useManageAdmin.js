import { useState, useEffect } from "react";
import adminApi from "../api/adminApi";

export default function useManageAdmin() {
  const [amount, setAmount] = useState("5");
  const [view, setView] = useState(false);

  const [admins, setAdmins] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loadAdmins = async () => {
    try {
      const fetchAdmins = await adminApi.getAll();
      console.log("Response from API:", fetchAdmins.data);
      // check whether .data or .data.data is needed
      setAdmins(fetchAdmins.data.data);
    } catch (error) {
      console.error("Error loading admins:", error);
    }
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      await adminApi.add({ username, password });
      setUsername("");
      setPassword("");
      loadAdmins(); // reload admins list after adding
    } catch (error) {
      console.error("Error adding admin:", error);
    }
    setView(false);
  };

  const handleDelete = async (idAdmin) => {
    try {
      await adminApi.destroy(idAdmin);
      loadAdmins();
    } catch (error) {
      console.error("Error deleting admin:", error);
    }
  };

  useEffect(() => {
    loadAdmins();
  }, []); // just load the server once

  return {
    amount,
    setAmount,

    view,
    setView,

    admins,
    username,
    setUsername,

    password,
    setPassword,

    handleAdd,
    handleDelete,
  };
}
