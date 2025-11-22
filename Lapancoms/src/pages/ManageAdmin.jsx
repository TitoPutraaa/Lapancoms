// import { useEffect, useState } from "react";
import AddAdmin from "../components/common/AddAdmin";
// import adminApi from "../api/adminApi";
import useManageAdmin from "../hooks/useManageAdmin";

function ManageAdmin() {
  const {
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
  } = useManageAdmin();

  return (
    <div className="p-4">
      <h2 className="text-dark mb-2 text-2xl font-medium">ManageAdmin</h2>
      <p className="text-sm text-slate-400">Admin List</p>
      <div className="mb-6 flex justify-end">
        <button
          type="button"
          onClick={() => setView(true)}
          className="bg-secondary text-primary hover:bg-secondary/90 cursor-pointer rounded-sm px-4 py-2 text-sm font-semibold hover:shadow-lg"
        >
          Add new Admin
        </button>
      </div>
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
                    onClick={() => handleDelete(data.idAdmin)}
                    className="text-danger hover:text-danger/80 cursor-pointer"
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
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
        <span className="ml-4">1 - {amount} of 100 items</span>
      </div>
      <AddAdmin
        view={view}
        setView={setView}
        username={username}
        password={password}
        setUsername={setUsername}
        setPassword={setPassword}
        handleAdd={handleAdd}
      />
    </div>
  );
}

export default ManageAdmin;
