import React, { useState } from 'react';
import { 
  Calendar, User, Search, Star, MapPin, Clock, ChevronRight, 
  Phone, Mail, Award, Users, Heart, Eye, Stethoscope, Brain,
  X, CheckCircle, AlertCircle, Menu, LogOut, Settings, 
  MessageCircle, Video, FileText, Home
} from 'lucide-react';

// Mock data
const doctors = [
  {
    id: 1,
    name: "Dr. Aziza Karimova",
    specialty: "Kardiolog",
    rating: 4.9,
    experience: 15,
    location: "Toshkent, Yunusobod",
    avatar: "https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=400",
    price: 200000,
    phone: "+998 90 123 45 67",
    email: "aziza.karimova@medcenter.uz",
    patients: 2500,
    description: "Yurak kasalliklari bo'yicha malakali mutaxassis. 15 yillik tajriba.",
    availableSlots: ["09:00", "10:30", "14:00", "15:30"],
    education: "Toshkent Tibbiyot Akademiyasi",
    languages: ["O'zbek", "Rus", "Ingliz"]
  },
  {
    id: 2,
    name: "Dr. Bobur Rahimov",
    specialty: "Nevrolog",
    rating: 4.8,
    experience: 12,
    location: "Toshkent, Chilonzor",
    avatar: "https://images.pexels.com/photos/6129967/pexels-photo-6129967.jpeg?auto=compress&cs=tinysrgb&w=400",
    price: 180000,
    phone: "+998 91 234 56 78",
    email: "bobur.rahimov@medcenter.uz",
    patients: 1800,
    description: "Asab tizimi kasalliklari bo'yicha mutaxassis.",
    availableSlots: ["08:30", "11:00", "13:30", "16:00"],
    education: "Samarqand Davlat Tibbiyot Instituti",
    languages: ["O'zbek", "Rus"]
  },
  {
    id: 3,
    name: "Dr. Malika Tosheva",
    specialty: "Oftalmolog",
    rating: 4.9,
    experience: 8,
    location: "Toshkent, Mirzo Ulug'bek",
    avatar: "https://images.pexels.com/photos/8376277/pexels-photo-8376277.jpeg?auto=compress&cs=tinysrgb&w=400",
    price: 150000,
    phone: "+998 93 345 67 89",
    email: "malika.tosheva@medcenter.uz",
    patients: 1200,
    description: "Ko'z kasalliklari va lazer jarrohlik mutaxassisi.",
    availableSlots: ["09:30", "12:00", "14:30", "17:00"],
    education: "Toshkent Tibbiyot Akademiyasi",
    languages: ["O'zbek", "Ingliz"]
  }
];

const specialtyIcons = {
  "Kardiolog": Heart,
  "Nevrolog": Brain,
  "Oftalmolog": Eye,
  "default": Stethoscope
};

export default function DoctorBookingApp() {
  const [currentView, setCurrentView] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [showBooking, setShowBooking] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState('');
  const [userType, setUserType] = useState('patient'); // 'patient' or 'doctor'
  const [bookings, setBookings] = useState([]);
  const [showProfile, setShowProfile] = useState(false);

  // Filter doctors based on search
  const filteredDoctors = doctors.filter(doctor =>
    doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doctor.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleBooking = () => {
    if (selectedSlot && selectedDoctor) {
      const newBooking = {
        id: Date.now(),
        doctorId: selectedDoctor.id,
        doctorName: selectedDoctor.name,
        specialty: selectedDoctor.specialty,
        slot: selectedSlot,
        date: new Date().toISOString().split('T')[0],
        status: 'pending',
        price: selectedDoctor.price
      };
      setBookings([...bookings, newBooking]);
      setShowBooking(false);
      setSelectedSlot('');
      alert('Navbat muvaffaqiyatli band qilindi!');
    }
  };

  const Header = () => (
    <header className="bg-white shadow-lg border-b border-blue-100 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-r from-blue-500 to-green-500 p-2 rounded-lg">
            <Calendar className="h-6 w-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            MedBooking
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <button 
            onClick={() => setCurrentView('home')}
            className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition ${currentView === 'home' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
          >
            <Home className="h-4 w-4" />
            <span>Bosh sahifa</span>
          </button>
          <button 
            onClick={() => setCurrentView('appointments')}
            className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition ${currentView === 'appointments' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
          >
            <Calendar className="h-4 w-4" />
            <span>Navbatlarim</span>
          </button>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setUserType('patient')}
              className={`px-3 py-1 rounded-lg text-sm font-medium transition ${
                userType === 'patient' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Bemor
            </button>
            <button
              onClick={() => setUserType('doctor')}
              className={`px-3 py-1 rounded-lg text-sm font-medium transition ${
                userType === 'doctor' ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Shifokor
            </button>
          </div>
          <button 
            onClick={() => setShowProfile(!showProfile)}
            className="w-10 h-10 bg-gradient-to-r from-blue-400 to-green-400 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition"
          >
            <User className="h-5 w-5 text-white" />
          </button>
        </div>
      </div>
    </header>
  );

  const DoctorCard = ({ doctor }) => {
    const SpecialtyIcon = specialtyIcons[doctor.specialty] || specialtyIcons.default;
    
    return (
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 group">
        <div className="flex items-start space-x-4 mb-4">
          <div className="relative">
            <img
              src={doctor.avatar}
              alt={doctor.name}
              className="w-20 h-20 rounded-full object-cover border-4 border-blue-50 group-hover:border-blue-100 transition"
            />
            <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-blue-500 to-green-500 p-2 rounded-full">
              <SpecialtyIcon className="h-4 w-4 text-white" />
            </div>
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-lg text-gray-800 mb-1">{doctor.name}</h3>
            <p className="text-blue-600 font-semibold mb-2">{doctor.specialty}</p>
            <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-400 mr-1" />
                <span className="font-medium">{doctor.rating}</span>
              </div>
              <div className="flex items-center">
                <Award className="h-4 w-4 text-gray-400 mr-1" />
                <span>{doctor.experience} yil</span>
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 text-gray-400 mr-1" />
                <span>{doctor.patients}</span>
              </div>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <MapPin className="h-4 w-4 text-gray-400 mr-1" />
              <span>{doctor.location}</span>
            </div>
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{doctor.description}</p>

        <div className="flex items-center justify-between mb-4">
          <div className="text-2xl font-bold text-green-600">
            {doctor.price.toLocaleString()} so'm
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="h-4 w-4 text-gray-400" />
            <Mail className="h-4 w-4 text-gray-400" />
            <MessageCircle className="h-4 w-4 text-gray-400" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => setSelectedDoctor(doctor)}
            className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 px-4 rounded-xl hover:from-blue-600 hover:to-blue-700 transition font-medium"
          >
            <User className="h-4 w-4 mr-2" />
            Ma'lumot
          </button>
          <button
            onClick={() => {
              setSelectedDoctor(doctor);
              setShowBooking(true);
            }}
            className="flex items-center justify-center bg-gradient-to-r from-green-500 to-green-600 text-white py-2 px-4 rounded-xl hover:from-green-600 hover:to-green-700 transition font-medium"
          >
            <Clock className="h-4 w-4 mr-2" />
            Navbat
          </button>
        </div>
      </div>
    );
  };

  const DoctorProfile = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <div className="bg-gradient-to-r from-blue-500 to-green-500 p-6 text-white">
            <button
              onClick={() => setSelectedDoctor(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="flex items-center space-x-4">
              <img
                src={selectedDoctor?.avatar}
                alt={selectedDoctor?.name}
                className="w-24 h-24 rounded-full object-cover border-4 border-white"
              />
              <div>
                <h2 className="text-2xl font-bold">{selectedDoctor?.name}</h2>
                <p className="text-blue-100 text-lg">{selectedDoctor?.specialty}</p>
                <div className="flex items-center mt-2">
                  <Star className="h-5 w-5 text-yellow-300 mr-1" />
                  <span className="font-semibold mr-4">{selectedDoctor?.rating}</span>
                  <Award className="h-5 w-5 text-white mr-1" />
                  <span>{selectedDoctor?.experience} yil tajriba</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-500" />
                  <span>{selectedDoctor?.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-500" />
                  <span>{selectedDoctor?.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-500" />
                  <span>{selectedDoctor?.location}</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-green-500" />
                  <span>{selectedDoctor?.patients} bemor</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-green-500" />
                  <span>{selectedDoctor?.education}</span>
                </div>
                <div className="text-2xl font-bold text-green-600">
                  {selectedDoctor?.price.toLocaleString()} so'm
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-bold text-lg mb-2">Haqida</h3>
              <p className="text-gray-600">{selectedDoctor?.description}</p>
            </div>

            <div className="mb-6">
              <h3 className="font-bold text-lg mb-2">Tillar</h3>
              <div className="flex space-x-2">
                {selectedDoctor?.languages.map((lang, index) => (
                  <span key={index} className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex space-x-4">
              <button
                onClick={() => {
                  setShowBooking(true);
                  setSelectedDoctor(selectedDoctor);
                }}
                className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-xl hover:from-green-600 hover:to-green-700 transition font-semibold flex items-center justify-center"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Navbat olish
              </button>
              <button className="px-6 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition flex items-center">
                <Video className="h-5 w-5 mr-2 text-blue-500" />
                Video qo'ng'iroq
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const BookingModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-xl">Vaqtni tanlang</h3>
          <button
            onClick={() => setShowBooking(false)}
            className="p-2 rounded-full hover:bg-gray-100 transition"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="mb-4">
          <p className="text-gray-600 mb-2">{selectedDoctor?.name}</p>
          <p className="text-blue-600 font-medium">{selectedDoctor?.specialty}</p>
          <p className="text-green-600 font-bold text-lg">{selectedDoctor?.price.toLocaleString()} so'm</p>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-6">
          {selectedDoctor?.availableSlots.map((slot) => (
            <button
              key={slot}
              onClick={() => setSelectedSlot(slot)}
              className={`p-3 rounded-xl border transition ${
                selectedSlot === slot
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-gray-50 hover:bg-gray-100 border-gray-200"
              }`}
            >
              {slot}
            </button>
          ))}
        </div>

        <div className="flex space-x-3">
          <button
            onClick={() => setShowBooking(false)}
            className="flex-1 py-3 text-gray-600 hover:text-gray-800 border border-gray-300 rounded-xl transition"
          >
            Bekor qilish
          </button>
          <button
            onClick={handleBooking}
            disabled={!selectedSlot}
            className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-xl hover:from-green-600 hover:to-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
          >
            Tasdiqlash
          </button>
        </div>
      </div>
    </div>
  );

  const AppointmentsView = () => (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Mening navbatlarim</h2>
      
      {bookings.length === 0 ? (
        <div className="text-center py-12">
          <Calendar className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-600 mb-2">Hozircha navbatlar yo'q</h3>
          <p className="text-gray-500">Shifokor bilan uchrashish uchun navbat oling</p>
        </div>
      ) : (
        <div className="space-y-4">
          {bookings.map((booking) => (
            <div key={booking.id} className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Calendar className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{booking.doctorName}</h4>
                    <p className="text-blue-600">{booking.specialty}</p>
                    <p className="text-gray-600">{booking.date} - {booking.slot}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-green-600 font-bold text-lg mb-2">
                    {booking.price.toLocaleString()} so'm
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    booking.status === 'pending' ? 'bg-yellow-100 text-yellow-600' :
                    booking.status === 'confirmed' ? 'bg-green-100 text-green-600' :
                    'bg-red-100 text-red-600'
                  }`}>
                    {booking.status === 'pending' ? 'Kutilmoqda' : 
                     booking.status === 'confirmed' ? 'Tasdiqlangan' : 'Bekor qilingan'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Header />

      <main className="max-w-7xl mx-auto px-6 py-8">
        {currentView === 'home' && (
          <>
            {/* Hero Section */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Eng yaxshi shifokorlar bilan{" "}
                <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  uchrashuv
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Professional shifokorlar bilan onlayn navbat oling va sog'ligingizni nazorat qiling
              </p>
            </div>

            {/* Search */}
            <div className="max-w-md mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Shifokor yoki mutaxassislik qidiring..."
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Doctors Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDoctors.map((doctor) => (
                <DoctorCard key={doctor.id} doctor={doctor} />
              ))}
            </div>

            {filteredDoctors.length === 0 && searchQuery && (
              <div className="text-center py-12">
                <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-600 mb-2">Shifokor topilmadi</h3>
                <p className="text-gray-500">Boshqa kalit so'z bilan qidiring</p>
              </div>
            )}
          </>
        )}

        {currentView === 'appointments' && <AppointmentsView />}
      </main>

      {/* Modals */}
      {selectedDoctor && !showBooking && <DoctorProfile />}
      {showBooking && <BookingModal />}

      {/* Profile Dropdown */}
      {showProfile && (
        <div className="fixed top-16 right-6 bg-white rounded-xl shadow-lg border border-gray-200 py-2 min-w-48 z-50">
          <div className="px-4 py-2 border-b border-gray-100">
            <p className="font-medium text-gray-800">
              {userType === 'patient' ? 'Bemor paneli' : 'Shifokor paneli'}
            </p>
            <p className="text-sm text-gray-600">user@example.com</p>
          </div>
          <button className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center">
            <Settings className="h-4 w-4 mr-3 text-gray-400" />
            Sozlamalar
          </button>
          <button className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center text-red-600">
            <LogOut className="h-4 w-4 mr-3" />
            Chiqish
          </button>
        </div>
      )}
    </div>
  );
}