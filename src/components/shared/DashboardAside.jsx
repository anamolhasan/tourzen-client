import React from "react";
import { NavLink } from "react-router";

const DashboardAside = () => {
  return (
    <div className="space-y-5  ">
      
      <NavLink to="/dashboard" className="block bg-gray-700 py-3 px-3 rounded-md">
        ➕ Add Package
      </NavLink>
      <NavLink to="/dashboard/managePackage" className="block bg-gray-700 py-3 px-3 rounded-md">
        📦 Manage My Packages
      </NavLink>
      <button className="btn-block bg-red-500 py-3 px-3 rounded-md">Log out</button>
      <button className="btn-block bg-red-500 py-3 px-3 rounded-md">
        dark mode
      </button>
    </div>
  );
};

export default DashboardAside;
