import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold">Doctor Panel</h1>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-gray-300">
              Dashboard
            </Link>
            <Link to="/doctor" className="hover:text-gray-300">
              Doctor Profile
            </Link>
            <Link to="/staticdoctor" className="hover:text-gray-300">
              Static Doctor
            </Link>
            
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="focus:outline-none">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <div className="md:hidden bg-gray-700">
          <nav className="flex flex-col p-4 space-y-2">
            <Link
              to="/doctor"
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-300"
            >
              Doctor Profile
            </Link>
            <Link
              to="/staticdoctor"
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-300"
            >
              Static Doctor
            </Link>
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-300"
            >
              Dashboard
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
