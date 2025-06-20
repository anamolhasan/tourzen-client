import React, { useContext } from "react";
import { FaBars, FaUser } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../provider/AuthContext";
import ProfileDropdown from "../ui/ProfileDropdown";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  // console.log(user)
  // console.log(user?.displayName)

  return (
    <header className="p-4 border-b">
      <div className="container flex justify-between h-16 mx-auto">
        <Link
          to={"/"}
          aria-label="Back to homepage"
          className="flex items-center p-2 text-2xl font-bold"
        >
          TOURZEN
        </Link>
        <ul className="items-stretch hidden  lg:flex">
          <li className="flex">
            <NavLink to={"/"} className="flex items-center px-4 -mb-1  ">
              Home
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              to={"/all-package"}
              className="flex items-center px-4 -mb-1 "
            >
              All Package
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              to={"/MyBookingsAllTours"}
              className="flex items-center px-4 -mb-1 "
            >
              My Tour
            </NavLink>
          </li>
          <li className="flex">
            <NavLink to={"/about"} className="flex items-center px-4 -mb-1 ">
              About
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              to={"/tour-gide"}
              className="flex items-center px-4 -mb-1 "
            >
              Tour Gide
            </NavLink>
          </li>
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex gap-5">
          {
			user ?  <ProfileDropdown /> 
			 : 
			 <>
			  {user ? <ProfileDropdown /> : <ProfileDropdown />}

          <Link
            to={"/login"}
            className="self-center px-8 py-3 rounded bg-gray-500"
          >
            Sign in
          </Link>
			 </>
		  }
        </div>

        <button className="p-4 lg:hidden">
          <FaBars />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
