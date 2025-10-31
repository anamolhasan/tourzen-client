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
    <header className="py-3 bg-gradient-to-r  sticky top-0 z-50 backdrop-blur-md ">
      <div className="container mx-auto flex justify-between items-center ">
        {/* Logo */}
        <Link
          to={"/"}
          aria-label="TourZen — Back to homepage"
          className="flex items-center gap-3 p-2 pr-4 rounded-full group hover:scale-105 transition-transform duration-200"
          onClick={() => setIsMenuOpen(false)}
        >
          {/* Logo circle with subtle float + gradient */}
          <span
            className="relative flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-tr from-pink-400 via-amber-300 to-indigo-400 shadow-md 
               ring-1 ring-white/20 overflow-hidden flex items-center justify-center transform transition-transform duration-300
               group-hover:-translate-y-1"
            aria-hidden="true"
          >
            {/* decorative sun/mountain SVG */}
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-sm"
              aria-hidden="true"
            >
              <path d="M3 17L9 9l4 6 3-4 5 6H3z" fill="white" opacity="0.92" />
              <circle cx="17.5" cy="6.5" r="2" fill="rgba(255,255,255,0.9)" />
            </svg>

            {/* subtle pulse glow */}
            <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 bg-white/20 animate-pulse"></span>
          </span>

          {/* Text block */}
          <span className="flex flex-col leading-tight">
            <span className="text-lg font-extrabold  tracking-wide">
              <span className="text-indigo-600">TOUR</span>
              <span className="">ZEN</span>
            </span>

            {/* small tagline */}
            <span className="text-xs  -mt-0.5 hidden md:inline">
              Explore. Book. Relax.
            </span>
          </span>

          {/* Visually-hidden description for screen readers (optional extra) */}
          <span className="sr-only">Go to homepage</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex space-x-16 font-bold bg-green-600/30 py-2 px-8 rounded-full">
          <NavLink to={"/"} className="hover:text-blue-600" end>
            Home
          </NavLink>
          <NavLink to={"/all-package"} className="hover:text-blue-600">
            All Package
          </NavLink>
          {user && (
            <>
              <NavLink
                to={"/MyBookingsAllTours"}
                className="hover:text-blue-600"
              >
                My Tour
              </NavLink>
              <NavLink to={"/tour-gide"} className="hover:text-blue-600">
                Tour Guide
              </NavLink>
            </>
          )}
          <NavLink to={"/about"} className="hover:text-blue-600">
            About
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
