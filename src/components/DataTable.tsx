"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";
import {
  setCurrentPage,
  setSort,
  setFilter,
  fetchUsers,
} from "@/store/slices/tableSlice";
import { useEffect } from "react";
import LoadingSpinner from "./LoadingSpinner";

export default function DataTable() {
  const dispatch = useDispatch<AppDispatch>();
  const {
    filteredData,
    currentPage,
    pageItems,
    sort,
    filter,
    loading,
    error,
  } = useSelector((state: RootState) => state.table);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const totalPages = Math.ceil(filteredData.length / pageItems);
  const firstItem = (currentPage - 1) * pageItems;
  const currentData = filteredData.slice(firstItem, firstItem + pageItems);

  // handleSort && handleFilter
  const handleSort = (field: string) => {
    const order = sort.field === field && sort.order === "asc" ? "desc" : "asc";
    dispatch(setSort({ field, order }));
  };

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter(e.target.value));
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="text-center text-red-500">Error: {error}</div>;
  if (filteredData.length === 0)
    return <div className="text-center text-gray-700 dark:text-gray-300">No data to display.</div>;

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
      {/* Search Filter */}
      <input
        type="text"
        placeholder="Search users..."
        value={filter}
        onChange={handleFilter}
        className="w-full mb-4 p-2 border rounded-md text-gray-800 dark:text-white dark:bg-gray-700 dark:border-gray-600"
      />

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px] text-sm text-center text-gray-900 dark:text-gray-100">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-700">
              <th className="p-2 cursor-pointer" onClick={() => handleSort("id")}>ID</th>
              <th className="p-2 cursor-pointer" onClick={() => handleSort("name")}>Name</th>
              <th className="p-2 cursor-pointer" onClick={() => handleSort("email")}>Email</th>
              <th className="p-2 cursor-pointer" onClick={() => handleSort("role")}>Role</th>
              <th className="p-2 cursor-pointer" onClick={() => handleSort("activity")}>Activity</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((user) => (
              <tr key={user.id} className="border-b dark:border-gray-700">
                <td className="p-2">{user.id}</td>
                <td className="p-2">{user.name}</td>
                <td className="p-2">{user.email}</td>
                <td className="p-2">{user.role}</td>
                <td className="p-2">{user.activity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex flex-col sm:flex-row justify-between items-center text-gray-800 dark:text-white">
        <button
          onClick={() => dispatch(setCurrentPage(currentPage - 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
        >
          Previous
        </button>
        <span className="my-2 sm:my-0">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => dispatch(setCurrentPage(currentPage + 1))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
        >
          Next
        </button>
      </div>
    </div>
  );
}
