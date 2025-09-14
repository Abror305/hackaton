// src/pages/Login.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { User } from "lucide-react";

// Mock users for demo (replace with real backend API later)
const mockUsers = [
  { email: "patient@example.com", password: "patient123", role: "patient" },
  { email: "doctor@example.com", password: "doctor123", role: "doctor" },
];

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("patient"); // Default to patient
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Mock authentication check
    const user = mockUsers.find(
      (u) => u.email === email && u.password === password && u.role === role
    );

    if (user) {
      // Simulate storing user data (in real app, store token in localStorage or Redux)
      console.log(`Logged in as ${role}:`, { email });

      // Redirect based on role
      if (role === "patient") {
        navigate("/booking");
      } else if (role === "doctor") {
        navigate("/doctor-panel");
      }
    } else {
      setError("Noto‘g‘ri email, parol yoki rol. Iltimos, qayta urinib ko‘ring.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-2xl"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center space-x-2"
        >
          <User className="h-8 w-8 text-indigo-600" />
          <h2 className="text-3xl font-bold text-gray-800">MedBooking - Kirish</h2>
        </motion.div>

        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-3 bg-red-100 text-red-700 rounded-xl text-center"
          >
            {error}
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Role Selection */}
          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-600">
              Foydalanuvchi turi
            </label>
            <select
              className="w-full px-4 py-3 text-gray-800 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="patient">Bemor</option>
              <option value="doctor">Shifokor</option>
            </select>
          </div>

          {/* Email Input */}
          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-600">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-3 text-gray-800 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email kiriting"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-600">
              Parol
            </label>
            <input
              type="password"
              className="w-full px-4 py-3 text-gray-800 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Parol kiriting"
              required
            />
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-3 text-lg font-semibold text-white transition bg-indigo-600 rounded-xl hover:bg-indigo-700"
          >
            Kirish
          </motion.button>
        </form>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-between mt-4 text-sm text-gray-600"
        >
          <a href="/register" className="hover:underline">
            Akkaunt yo‘qmi? Ro‘yxatdan o‘ting
          </a>
          <a href="/forgot-password" className="hover:underline">
            Parolni unutdingizmi?
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Login;