import React from "react";

export default function DashboardLayout() {
  return (
    <div className="p-4 w-full sm:ml-64">
      <div className="p-4 rounded-lg mt-14">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center justify-center bg-white">
            <p className="text-2xl text-gray-400 dark:text-gray-500">box 1</p>
          </div>
          <div className="flex items-center justify-center bg-white">
            <p className="text-2xl text-gray-400 dark:text-gray-500">box 1</p>
          </div>
          <div className="flex items-center justify-center bg-white">
            <p className="text-2xl text-gray-400 dark:text-gray-500">box 1</p>
          </div>
          <div className="flex items-center justify-center bg-white">
            <p className="text-2xl text-gray-400 dark:text-gray-500">box 1</p>
          </div>
        </div>
      </div>
    </div>
  );
}
