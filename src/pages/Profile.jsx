// src/pages/Profile.jsx
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { User, Settings, LogOut, Check } from "lucide-react";
import { useNavigate } from "react-router-dom"; // <-- import qilamiz

const Profile = () => {
  const navigate = useNavigate(); // <-- hook
  const [user, setUser] = useState({
    name: "Abror Bahromov",
    email: "Bakhromov@gmail.com",
    phone: "+998 95 210 05 50",
    avatar: "https://picsum.photos/100",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...user });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setUser({ ...formData });
    setIsEditing(false);
  };

  const handleLogout = () => {
    // Shu yerga token clear qilmoqchi bo'lsangiz yoki localStorage.clear() qilishingiz mumkin
    navigate("/login"); // <-- login sahifasiga yo'naltirish
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
  
    <Navbar/>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white shadow-md rounded-xl p-8">
          <div className="flex flex-col items-center gap-4">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-24 h-24 rounded-full border-2 border-blue-500 object-cover"
            />

            {isEditing ? (
              <>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border rounded px-3 py-2 text-gray-900 w-64"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border rounded px-3 py-2 text-gray-900 w-64"
                />
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border rounded px-3 py-2 text-gray-900 w-64"
                />
              </>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-gray-900">{user.name}</h2>
                <p className="text-gray-900">{user.email}</p>
                <p className="text-gray-900">{user.phone}</p>
              </>
            )}
          </div>

          <div className="mt-8 border-t pt-4 flex flex-col gap-3 items-center">
            {isEditing ? (
              <button
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                onClick={handleSave}
              >
                <Check className="h-5 w-5" /> Saqlash
              </button>
            ) : (
              <button
                className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors text-gray-900"
                onClick={() => setIsEditing(true)}
              >
                <User className="h-5 w-5 text-blue-600" /> Profilni tahrirlash
              </button>
            )}

            <button className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors text-gray-900">
              <Settings className="h-5 w-5 text-blue-600" /> Sozlamalar
            </button>
            <button
              className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-red-50 text-red-600 transition-colors"
              onClick={handleLogout} // <-- logout ishlashini shu yerga uladik
            >
              <LogOut className="h-5 w-5" /> Chiqish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
