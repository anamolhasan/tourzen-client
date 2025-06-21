import { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router'; // ✅ Corrected import


import { AuthContext } from '../../provider/AuthContext';
import { FaUser } from 'react-icons/fa6';
import ThemeToggle from '../darkMode/ThemeToggle';



const ProfileDropdown = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();
  // console.log(user)

 



  // Click outside to close
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
        className="flex items-center gap-2"
      >
        
        {
  user?.photoURL ? (
    <img
      src={user.photoURL}
      alt={user.displayName || "Profile"}
      className="w-10 h-10 rounded-full object-cover border"
    />
  ) : (
    <FaUser className="w-10 h-10 p-2 rounded-full bg-gray-200 border text-white" />

  )
}


      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 shadow-lg rounded-lg py-2 z-50">
          <Link
            to="/dashboard"
            className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
            onClick={() => setIsOpen(false)}
          >
            ➕ Add Package
          </Link>
          <Link
            to="/dashboard/managePackage"
            className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
            onClick={() => setIsOpen(false)}
          >
            📦 Manage My Packages
          </Link>
          <button
            onClick={() => {
              logOutUser();
              setIsOpen(false);
            }}
            className="w-full text-left px-4 py-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900"
          >
            🔓 Logout
          </button>
          <button
           
           
          >
            <ThemeToggle />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
