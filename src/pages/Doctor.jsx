import React, { useState } from "react";
import { Calendar, User, Search, Star, MapPin, Clock, ChevronRight } from "lucide-react";

// ===== Mock data =====
const doctor = {
  id: 1,
  name: "Dr. Aziza Karimova",
  specialty: "Kardiolog",
  rating: 4.9,
  experience: 15,
  location: "Toshkent, Yunusobod",
  avatar:
    "https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=400",
  availableSlots: ["09:00", "10:30", "14:00"],
  price: 200000,
};

// ===== Main App =====
export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");
  const [showBooking, setShowBooking] = useState(false);

  const matchesSearch =
    doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase());

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white shadow border-b border-blue-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Calendar className="h-6 w-6 text-blue-600" />
            <h1 className="text-xl font-bold text-blue-600">MedBooking</h1>
          </div>
          <div className="w-9 h-9 bg-gradient-to-r from-blue-400 to-green-400 rounded-full flex items-center justify-center">
            <User className="h-5 w-5 text-white" />
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* Search */}
        <div className="mb-6 relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Shifokor qidiring..."
            className="w-full pl-10 pr-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-500 shadow-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Doctor card */}
        {matchesSearch && (
          <div className="bg-white rounded-2xl shadow-lg p-6 border hover:shadow-xl transition">
            <div className="flex items-center space-x-4 mb-4">
              <img
                src={doctor.avatar}
                alt={doctor.name}
                className="w-16 h-16 rounded-full object-cover border-4 border-blue-50"
              />
              <div>
                <h3 className="font-semibold text-lg">{doctor.name}</h3>
                <p className="text-blue-600 font-medium">{doctor.specialty}</p>
                <div className="flex items-center text-sm text-gray-600">
                  <Star className="h-4 w-4 text-yellow-400 mr-1" />
                  {doctor.rating} • {doctor.experience} yil tajriba
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="h-4 w-4 text-gray-400 mr-1" />
                  {doctor.location}
                </div>
              </div>
            </div>

            <div className="text-lg font-semibold text-green-600 mb-4">
              {doctor.price.toLocaleString()} so'm
            </div>

            <button
              onClick={() => setShowBooking(true)}
              className="w-full flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-xl hover:from-blue-600 hover:to-blue-700 transition"
            >
              <Clock className="h-4 w-4 mr-2" />
              Navbat olish
              <ChevronRight className="h-4 w-4 ml-2" />
            </button>
          </div>
        )}
      </main>

      {/* Booking Modal */}
      {showBooking && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6">
            <h3 className="font-bold text-lg mb-4">Vaqtni tanlang</h3>
            <div className="grid grid-cols-2 gap-2 mb-4">
              {doctor.availableSlots.map((slot) => (
                <button
                  key={slot}
                  onClick={() => setSelectedSlot(slot)}
                  className={`p-2 rounded-lg border ${
                    selectedSlot === slot
                      ? "bg-blue-500 text-white"
                      : "bg-gray-50 hover:bg-gray-100"
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>
            <button
              onClick={() => setShowBooking(false)}
              className="w-full py-2 text-gray-600 hover:text-gray-800"
            >
              Bekor qilish
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
