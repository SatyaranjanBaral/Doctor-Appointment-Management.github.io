import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { assets } from "../assets/assets";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [token, setToken] = useState(true); // Simulated logged-in state

  const toggleMenu = () => {
    setShowMenu(prev => !prev);
    setShowProfileDropdown(false);
  };

  const toggleProfileDropdown = () => {
    setShowProfileDropdown(prev => !prev);
    setShowMenu(false);
  };

  const handleLogout = () => {
    setToken(false);
    setShowProfileDropdown(false);
    setShowMenu(false);
  };

  const navLinks = [
    { label: "HOME", to: "/" },
    { label: "ALL DOCTORS", to: "/doctors" },
    { label: "ABOUT", to: "/about" },
    { label: "CONTACT", to: "/contact" }
  ];

  return (
    <header className="w-full bg-white shadow-md border-b border-gray-200 px-4 md:px-10 py-4 z-50 relative">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <img
          src={assets.logo}
          alt="Logo"
          className="w-40 cursor-pointer"
          onClick={() => navigate("/")}
        />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          {navLinks.map((link, i) => (
            <NavLink
              key={i}
              to={link.to}
              className={({ isActive }) =>
                `hover:text-blue-600 ${
                  isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : ""
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Profile / Mobile Menu */}
        <div className="relative flex items-center gap-4">
          {token ? (
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={toggleProfileDropdown}
            >
              <img src={assets.profile_pic} alt="Profile" className="w-8 h-8 rounded-full" />
              <img src={assets.dropdown_icon} alt="Dropdown" className="w-4 h-4" />
            </div>
          ) : (
            <button
              onClick={() => navigate('/login')}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-sm"
            >
              Create account
            </button>
          )}

          {/* Mobile Menu Toggle */}
          <button onClick={toggleMenu} className="md:hidden">
            {showMenu ? <X size={26} /> : <Menu size={26} />}
          </button>

          {/* Desktop Profile Dropdown */}
          {showProfileDropdown && token && (
            <div className="absolute right-0 top-14 bg-white shadow-lg rounded-md w-44 text-sm z-50">
              <div
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  navigate('/my-profile');
                  setShowProfileDropdown(false);
                }}
              >
                My Profile
              </div>
              <div
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  navigate('/my-appointments');
                  setShowProfileDropdown(false);
                }}
              >
                My Appointments
              </div>
              <div
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={handleLogout}
              >
                Logout
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {showMenu && (
        <div className="md:hidden mt-4 space-y-2">
          {navLinks.map((link, i) => (
            <NavLink
              key={i}
              to={link.to}
              onClick={() => setShowMenu(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md ${
                  isActive
                    ? "bg-blue-100 text-blue-700 font-semibold"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}

          {/* Auth/Profile Options in Mobile */}
          {token ? (
            <div className="px-3 pt-3 space-y-1 border-t border-gray-200">
              <p
                className="text-sm cursor-pointer"
                onClick={() => {
                  navigate('/my-profile');
                  setShowMenu(false);
                }}
              >
                My Profile
              </p>
              <p
                className="text-sm cursor-pointer"
                onClick={() => {
                  navigate('/my-appointments');
                  setShowMenu(false);
                }}
              >
                My Appointments
              </p>
              <p
                className="text-sm cursor-pointer"
                onClick={handleLogout}
              >
                Logout
              </p>
            </div>
          ) : (
            <button
              onClick={() => {
                setShowMenu(false);
                navigate('/login');
              }}
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition mt-2"
            >
              Create account
            </button>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
