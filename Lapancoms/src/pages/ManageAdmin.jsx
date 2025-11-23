import { useEffect, useState } from "react";
import AddAdmin from "../components/common/AddAdmin";
import adminApi from "../api/adminApi";
import DeletedAdmin from "../components/common/DeletedAdmin";

function ManageAdmin() {
  const [amount, setAmount] = useState("10");
  const [viewAdd, setViewAdd] = useState(false);
  const [viewDelate, setViewDelate] = useState(false);
  const [idDel, setIdDel] = useState(null);
  const [admins, setAdmins] = useState([]);

  const loadAdmins = async () => {
    try {
      const fetchAdmins = await adminApi.getAll();
      setAdmins(fetchAdmins.data.data);
    } catch (error) {
      console.error("Error loading admins:", error);
    }
  };

  async function handleDelete(idAdmin) {
    try {
      await adminApi.destroy(idAdmin);
      loadAdmins();
      setViewDelate(false);
    } catch (error) {
      console.error("Error deleting admin:", error);
    }
  }

  useEffect(() => {
    loadAdmins();
  }, []); // just load the server once

  return (
    <div className="p-4">
      <h2 className="text-dark mb-2 text-2xl font-medium">ManageAdmin</h2>
      <p className="text-sm text-slate-400">Admin List</p>
      <div className="mb-6 flex justify-end">
        <button
          type="button"
          onClick={() => setViewAdd(true)}
          className="bg-secondary text-primary hover:bg-secondary/90 cursor-pointer rounded-sm px-4 py-2 text-sm font-semibold hover:shadow-lg"
        >
          Add new Admin
        </button>
      </div>
      <h2 className="mb-2 ml-1"> total admins : {admins.length}</h2>
      <div className="relative mb-10 overflow-x-auto">
        <table className="text-primary w-full text-left text-sm rtl:text-right">
          <thead className="text-dark bg-gray-50 text-xs uppercase">
            <tr>
              <th scope="col" className="px-6 py-3 font-semibold">
                No
              </th>
              <th scope="col" className="px-6 py-3 font-semibold">
                Username
              </th>
              <th scope="col" className="px-6 py-3 font-semibold">
                Password
              </th>
              <th scope="col" className="px-6 py-3 font-semibold">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {admins.slice(0, amount).map((data, index) => (
              <tr
                key={data.idAdmin}
                className="border-b border-gray-200 bg-white"
              >
                <td scope="row" className="px-6 py-4">
                  {index + 1}
                </td>
                <td className="px-6 py-4 font-medium whitespace-nowrap">
                  {data.username}
                </td>
                <td className="px-6 py-4">{data.password}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => {
                      setIdDel(data);
                      setViewDelate(true);
                    }}
                    className="text-danger hover:text-danger/80 cursor-pointer"
                    aria-label={`Delete admin ${data.username}`}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-sm text-slate-600">
        <span className="mr-1">Items per page: </span>
        <select
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-16 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="999">All</option>
        </select>
        <span className="ml-4">
          1 - {amount === "999" ? admins.length : amount}
        </span>
      </div>
      <AddAdmin view={viewAdd} setView={setViewAdd} loadAdmins={loadAdmins} />
      <DeletedAdmin
        handleDelete={handleDelete}
        view={viewDelate}
        setView={setViewDelate}
        idDel={idDel}
      />
    </div>
  );
}

export default ManageAdmin;
