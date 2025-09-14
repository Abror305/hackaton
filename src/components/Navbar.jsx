// src/components/Navbar.jsx
import React, { useState } from "react";
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
  const [isProfileOpen, setIsProfileOpen] = useState(false);
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
              <a
                href="#"
                className="text-blue-600 border-b-2 border-blue-600 px-1 pt-1 font-medium"
              >
                <Home className="h-4 w-4 mr-1 inline" /> Bosh sahifa
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 px-1 pt-1 font-medium transition-colors"
              >
                <Users className="h-4 w-4 mr-1 inline" /> Shifokorlar
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 px-1 pt-1 font-medium transition-colors"
              >
                <Contact className="h-4 w-4 mr-1 inline" /> Aloqa
              </a>
            </div>
          </div>

          {/* Right section */}
          <div className="flex items-center">
            {/* Desktop profile dropdown */}
            <div className="hidden md:flex items-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center transition-colors">
                <LogIn className="h-4 w-4 mr-1" /> Kirish
              </button>
              <div className="ml-3 relative">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full flex items-center justify-center text-white">
                    <User className="h-5 w-5" />
                  </div>
                </button>
                {isProfileOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <User className="h-4 w-4 mr-2 inline" /> Profil
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <Settings className="h-4 w-4 mr-2 inline" /> Sozlamalar
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <Bell className="h-4 w-4 mr-2 inline" /> Bildirishnomalar
                      </a>
                      <div className="border-t border-gray-100"></div>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <LogOut className="h-4 w-4 mr-2 inline" /> Chiqish
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#"
              className="bg-blue-50 text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              <Home className="h-5 w-5 mr-2 inline" /> Bosh sahifa
            </a>
            <a
              href="#"
              className="text-gray-600 hover:bg-gray-50 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              <Users className="h-5 w-5 mr-2 inline" /> Shifokorlar
            </a>
            <a
              href="#"
              className="text-gray-600 hover:bg-gray-50 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              <Contact className="h-5 w-5 mr-2 inline" /> Aloqa
            </a>
            <div className="border-t border-gray-200 pt-4 pb-3">
              <div className="flex items-center px-5">
                <div className="w-10 h-10 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full flex items-center justify-center text-white">
                  <User className="h-5 w-5" />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800">
                    Foydalanuvchi
                  </div>
                  <div className="text-sm font-medium text-gray-500">
                    user@example.com
                  </div>
                </div>
              </div>
              <div className="mt-3 px-2 space-y-1">
                <a
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                >
                  <User className="h-5 w-5 mr-2 inline" /> Profil
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                >
                  <Settings className="h-5 w-5 mr-2 inline" /> Sozlamalar
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                >
                  <LogOut className="h-5 w-5 mr-2 inline" /> Chiqish
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
