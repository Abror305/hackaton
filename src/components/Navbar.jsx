// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Home,
  Users,
  Contact,
  Stethoscope,
  LogIn,
  User,
  Bell,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-teal-500 rounded-lg flex items-center justify-center">
                <Stethoscope className="h-6 w-6 text-white" />
              </div>
              <span className="ml-2 text-xl font-bold text-gray-800">
                <span className="text-blue-600">Med</span>{" "}
                <span className="text-teal-500">Booking</span>
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:ml-8 md:flex md:space-x-6">
              <Link
                to="/doctors"
                className="text-gray-600 hover:text-blue-600 px-1 pt-1 font-medium transition-colors flex items-center"
              >
                <Users className="h-4 w-4 mr-1 inline" /> Shifokorlar
              </Link>
            </div>
          </div>

          {/* Right section */}
          <div className="flex items-center">
            {/* Desktop profile link */}
            <div className="hidden md:flex items-center space-x-3">
              <Link
                to="/login"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center transition-colors"
              >
                <LogIn className="h-4 w-4 mr-1" /> Kirish
              </Link>

              <Link to="/profile">
                <div className="w-10 h-10 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full flex items-center justify-center text-white cursor-pointer">
                  <User className="h-5 w-5" />
                </div>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
     
            <Link
              to="/doctors"
              className="text-gray-600 hover:bg-gray-50 hover:text-blue-600  px-3 py-2 rounded-md text-base font-medium flex items-center"
            >
              <Users className="h-5 w-5 mr-2 inline" /> Shifokorlar
            </Link>
       

            {/* Mobile profile links */}
            <div className="border-t border-gray-200 pt-4 pb-3">
              <div className="flex items-center px-5">
                <Link to="/profile">
                  <div className="w-10 h-10 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full flex items-center justify-center text-white cursor-pointer">
                    <User className="h-5 w-5" />
                  </div>
                </Link>
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800">Foydalanuvchi</div>
                  <div className="text-sm font-medium text-gray-500">user@example.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
