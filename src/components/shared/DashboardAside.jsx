import React, { useContext } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../../provider/AuthContext";
import ThemeToggle from "../darkMode/ThemeToggle";

const DashboardAside = () => {
  const { logOutUser } = useContext(AuthContext);
  return (
    <div className="space-y-5  ">
      <NavLink
        to="/dashboard"
        className="block border  py-3 px-3 rounded-md  "
      >
        ➕ Add Package
      </NavLink>
      <NavLink
        to="/dashboard/managePackage"
        className="block border py-3 px-3 rounded-md"
      >
        📦 Manage My Packages
      </NavLink>
      <div
        onClick={logOutUser}
        className="btn-block bg-red-500 py-3 px-3 rounded-md cursor-pointer"
      >
        Log out
      </div>

      <div className="btn-block bg-red-500  rounded-md cursor-pointer">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default DashboardAside;
