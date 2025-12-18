import { useEffect, useState } from "react";
import AddAdmin from "../components/common/AddAdmin";
import adminApi from "../api/adminApi";
import DeletedAdmin from "../components/common/DeletedAdmin";
import { BsPlusCircle } from "react-icons/bs";
import { HiOutlineUserPlus } from "react-icons/hi2";

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
      console.log("all min", fetchAdmins.data.data);
    } catch (error) {
      console.error("Error loading admins:", error);
    }
  };

  console.log("del", idDel);

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
    <div className="mt-10 mr-4 mb-4">
      <h2 className="text-dark mb-2 text-2xl font-medium">ManageAdmin</h2>
      <p className="text-sm text-slate-400">Admin List</p>
      <div className="mb-6 flex justify-end">
        <button
          type="button"
          onClick={() => setViewAdd(true)}
          className="bg-secondary border-primary/20 text-primary group relative h-9.5 w-40 cursor-pointer overflow-hidden rounded-xl border text-sm font-semibold hover:border-transparent"
        >
          <BsPlusCircle className="absolute top-1/2 left-3 z-1 -translate-y-1/2 text-base transition-all duration-500 group-hover:-left-4 group-hover:opacity-0" />
          <HiOutlineUserPlus className="text-accent absolute top-1/2 right-1 -translate-y-1/2 text-xl opacity-0 transition-all duration-500 group-hover:right-2 group-hover:opacity-100" />
          <span className="bg-accent absolute top-0 bottom-0 left-0 w-full rounded-xl opacity-0 transition-all duration-500 group-hover:w-32 group-hover:opacity-100"></span>
          <span className="absolute top-1/2 right-2 -translate-y-1/2 text-nowrap transition-all duration-500 group-hover:right-10 group-hover:text-white">
            Add new Admin
          </span>
        </button>
      </div>
      {/* <h2 className="mb-2 ml-1"> total admins : {admins.length}</h2> */}
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
              <th scope="col" className="px-6 py-3 font-semibold text-nowrap">
                Post Blog
              </th>
              <th scope="col" className="px-6 py-3 font-semibold">
                Gallery
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
                {/* Ini untuk Post Blog */}
                <td className="px-6 py-4">{data.blogPost}</td>

                {/* Ini untuk Gallery */}
                <td className="px-6 py-4">{data.galleryPost}</td>
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
          className="focus:accent-accent focus:ring-accent w-16 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
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
