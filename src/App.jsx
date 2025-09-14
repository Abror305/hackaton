// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

// Navbar
import Navbar from "./components/Navbar";

// Sahifalar
import Doctors from "./pages/Doctors";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import DoctorPage from "./pages/Doctor";
import StaticDoctor from "./pages/Staticdoctor";
import DoctorDashboard from "./pages/DoctorDashboard";

// Sidebar (agar doktor panelida kerak bo‘lsa)
import Sidebar from "./components/Header";

const App = () => {
  return (
    <div className="min-h-screen">
      {/* Navbar hamma sahifalarda */}
      <Navbar />

      <div className="flex">
        {/* Agar Sidebar kerak bo‘lsa */}
        <Sidebar />

        {/* Content */}
        <main className="flex-1 p-6 bg-gray-50">
          <Routes>
            {/* Asosiy foydalanuvchi sahifalari */}
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />

            {/* Doktor paneli */}
            <Route path="/" element={<DoctorDashboard />} />
            <Route path="/doctor" element={<DoctorPage />} />
            <Route path="/staticdoctor" element={<StaticDoctor />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;
