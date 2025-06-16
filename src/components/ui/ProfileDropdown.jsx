import { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router'; // ✅ Corrected import
import { AuthContext } from '../../provider/AuthContext';
import { FaUser } from 'react-icons/fa';
// Optional icon:
// import { FaChevronDown } from 'react-icons/fa';

const ProfileDropdown = () => {
  const { user, logout } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  const handleLogout = async () => {
   
  };

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
        
        <img
          src={user?.photoURL || <FaUser className='text-5xl self-center p-2 rounded-full bg-gray-500'/>}
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover border"
        />
        {/* Optional icon: <FaChevronDown className="text-gray-600 dark:text-white" /> */}
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
              handleLogout();
              setIsOpen(false);
            }}
            className="w-full text-left px-4 py-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900"
          >
            🔓 Logout
          </button>
          <button
           
           
          >
            🔓☀  Dark mode
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
