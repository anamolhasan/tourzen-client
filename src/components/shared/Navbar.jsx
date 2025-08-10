import React, { useContext, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../provider/AuthContext";
import ProfileDropdown from "../ui/ProfileDropdown";
 
const Navbar = () => {
  const { user } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="p-4 border-b bg-gradient-to-r from-gray-500 via-gray-700 to-gray-400 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto flex justify-between items-center ">
        {/* Logo */}
        <Link
          to={"/"}
          aria-label="Back to homepage"
          className="flex items-center p-2 text-2xl font-bold"
          onClick={() => setIsMenuOpen(false)} // close menu on nav link click
        >
          TOURZEN
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex space-x-6">
          <NavLink to={"/"} className="hover:text-blue-600" end>
            Home
          </NavLink>
          <NavLink to={"/all-package"} className="hover:text-blue-600">
            All Package
          </NavLink>
          {user && (
            <NavLink to={"/MyBookingsAllTours"} className="hover:text-blue-600">
              My Tour
            </NavLink>
          )}
          <NavLink to={"/about"} className="hover:text-blue-600">
            About
          </NavLink>
          <NavLink to={"/tour-gide"} className="hover:text-blue-600">
            Tour Guide
          </NavLink>
        </nav>

        {/* Desktop Auth Links */}
        <div className="hidden lg:flex items-center gap-5">
          {user ? (
            <ProfileDropdown />

          ) : (
            <>
              {user ? <ProfileDropdown /> : <ProfileDropdown />}
            <Link
              to={"/login"}
              className="px-6 py-2 border rounded hover:bg-blue-600 hover:text-white transition"
            >
              Sign in
            </Link>
            </>
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="lg:hidden p-2 text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="lg:hidden  border-t ">
          <ul className="flex flex-col space-y-2 p-4">
            <li>
              <NavLink
                to={"/"}
                className="block"
                onClick={() => setIsMenuOpen(false)}
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/all-package"}
                className="block"
                onClick={() => setIsMenuOpen(false)}
              >
                All Package
              </NavLink>
            </li>


            {user && (
              <li>
                <NavLink
                  to={"/MyBookingsAllTours"}
                  className="block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  My Tour
                </NavLink>
              </li>
            )}
            <li>
              <NavLink
                to={"/about"}
                className="block"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/tour-gide"}
                className="block"
                onClick={() => setIsMenuOpen(false)}
              >
                Tour Guide
              </NavLink>
            </li>

            {/* Auth */}
            <li>
              {user ? (
                <ProfileDropdown />
              ) : (
                <Link
                  to={"/login"}
                  className="block border rounded px-4 py-2 text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign in
                </Link>
              )}
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
