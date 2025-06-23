import { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../provider/AuthContext';
import { FaUser } from 'react-icons/fa6';
import ThemeToggle from '../darkMode/ThemeToggle';

const ProfileDropdown = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="true"
        aria-expanded={isOpen}
        className="btn btn-ghost btn-circle avatar"
      >
        {user?.photoURL ? (
          <div className="w-10 rounded-full">
            <img src={user.photoURL} alt={user.displayName || 'Profile'} />
          </div>
        ) : (
          <FaUser className="w-10 h-10 p-2 rounded-full bg-base-200 text-base-content" />
        )}
      </button>

      {isOpen && (
        <ul
          tabIndex={0}
          className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 right-0 absolute z-50"
        >
          <li>
            <Link to="/dashboard" onClick={() => setIsOpen(false)}>
              ➕ Add Package
            </Link>
          </li>
          <li>
            <Link to="/dashboard/managePackage" onClick={() => setIsOpen(false)}>
              📦 Manage My Packages
            </Link>
          </li>
          <li>
            <button
              onClick={() => {
                logOutUser();
                setIsOpen(false);
              }}
              className="text-error"
            >
              🔓 Logout
            </button>
          </li>
          <li className="pt-2 border-t border-base-300">
            <ThemeToggle />
          </li>
        </ul>
      )}
    </div>
  );
};

export default ProfileDropdown;
