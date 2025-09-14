import React, { useState } from "react";
import { Calendar, Clock, User, Phone, Plus, Search, Bell, Settings, TrendingUp, MoreVertical, ChevronDown, Filter, MessageCircle, Video, MapPin } from "lucide-react";

const DoctorDashboard = () => {
  const [activeTab, setActiveTab] = useState("today");
  
  const stats = [
    {
      id: 1,
      title: "Jami navbatlar",
      value: 24,
      icon: <Calendar className="w-5 h-5 text-blue-500" />,
      color: "bg-gradient-to-r from-blue-50 to-blue-100",
      border: "border-l-4 border-blue-500",
      trend: "+12%"
    },
    {
      id: 2,
      title: "Tasdiqlangan",
      value: 18,
      icon: <Clock className="w-5 h-5 text-green-500" />,
      color: "bg-gradient-to-r from-green-50 to-green-100",
      border: "border-l-4 border-green-500",
      trend: "+5%"
    },
    {
      id: 3,
      title: "Tugallangan",
      value: 12,
      icon: <User className="w-5 h-5 text-purple-500" />,
      color: "bg-gradient-to-r from-purple-50 to-purple-100",
      border: "border-l-4 border-purple-500",
      trend: "+8%"
    },
    {
      id: 4,
      title: "Kutilmoqda",
      value: 6,
      icon: <Phone className="w-5 h-5 text-amber-500" />,
      color: "bg-gradient-to-r from-amber-50 to-amber-100",
      border: "border-l-4 border-amber-500",
      trend: "-2%"
    },
  ];

  const appointments = [
    {
      id: 1,
      patient: "Ali Valiyev",
      time: "10:00 - 10:30",
      status: "Tasdiqlangan",
      statusColor: "bg-green-100 text-green-800",
      age: "28 yosh",
      type: "Online",
      typeIcon: <Video className="w-4 h-4 text-blue-500" />,
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
    },
    {
      id: 2,
      patient: "Dilnoza Xasanova",
      time: "11:15 - 11:45",
      status: "Kutilmoqda",
      statusColor: "bg-amber-100 text-amber-800",
      age: "35 yosh",
      type: "Shifoxonada",
      typeIcon: <MapPin className="w-4 h-4 text-rose-500" />,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
    },
    {
      id: 3,
      patient: "Otabek Ismoilov",
      time: "12:30 - 13:00",
      status: "Tasdiqlangan",
      statusColor: "bg-green-100 text-green-800",
      age: "42 yosh",
      type: "Online",
      typeIcon: <Video className="w-4 h-4 text-blue-500" />,
      image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
    },
    {
      id: 4,
      patient: "Gulnora Abdullayeva",
      time: "14:00 - 14:30",
      status: "Boshlandi",
      statusColor: "bg-blue-100 text-blue-800",
      age: "31 yosh",
      type: "Qo'ng'iroq",
      typeIcon: <Phone className="w-4 h-4 text-indigo-500" />,
      image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Shifokor paneli</h1>
            <p className="text-gray-500 mt-2">Xush kelibsiz, Dr. Alijonov</p>
          </div>
          
          <div className="mt-4 md:mt-0 flex items-center space-x-4">
            <div className="relative">
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input 
                type="text" 
                placeholder="Qidirish..." 
                className="pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full md:w-64"
              />
            </div>
            <button className="relative p-2 text-gray-500 hover:text-gray-700 bg-white rounded-xl border border-gray-200">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">3</span>
            </button>
            <button className="p-2 text-gray-500 hover:text-gray-700 bg-white rounded-xl border border-gray-200">
              <Settings className="w-5 h-5" />
            </button>
            <div className="flex items-center space-x-2 cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" 
                alt="Profile" 
                className="w-10 h-10 rounded-full object-cover"
              />
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </div>
          </div>
        </div>

        {/* Statistik kartalar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className={`p-5 rounded-2xl shadow-sm ${stat.color} ${stat.border} transition-all hover:shadow-md`}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-gray-500 text-sm font-medium mb-1">
                    {stat.title}
                  </p>
                  <h2 className="text-2xl font-bold text-gray-800">
                    {stat.value}
                  </h2>
                </div>
                <div className="p-2.5 rounded-lg bg-white bg-opacity-50 shadow-xs">
                  {stat.icon}
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-xs font-medium bg-white py-1 px-2 rounded-md text-blue-600 flex items-center">
                  <TrendingUp className="w-3 h-3 mr-1" /> {stat.trend}
                </span>
                <span className="text-xs text-gray-500 ml-2">o'tgan haftaga nisbatan</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bemorlar ro'yxati */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-8">
          <div className="border-b border-gray-100 px-6 py-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-800">Bugungi navbatlar</h2>
              
              <div className="flex items-center space-x-3 mt-3 md:mt-0">
                <div className="flex bg-gray-100 rounded-lg p-1">
                  <button 
                    onClick={() => setActiveTab("today")}
                    className={`px-3 py-1.5 text-sm font-medium rounded-md ${activeTab === "today" ? "bg-white text-blue-600 shadow-sm" : "text-gray-600"}`}
                  >
                    Bugun
                  </button>
                  <button 
                    onClick={() => setActiveTab("week")}
                    className={`px-3 py-1.5 text-sm font-medium rounded-md ${activeTab === "week" ? "bg-white text-blue-600 shadow-sm" : "text-gray-600"}`}
                  >
                    Hafta
                  </button>
                  <button 
                    onClick={() => setActiveTab("month")}
                    className={`px-3 py-1.5 text-sm font-medium rounded-md ${activeTab === "month" ? "bg-white text-blue-600 shadow-sm" : "text-gray-600"}`}
                  >
                    Oy
                  </button>
                </div>
                
                <button className="flex items-center text-sm text-gray-600 bg-white border border-gray-200 rounded-lg px-3 py-2">
                  <Filter className="w-4 h-4 mr-1" />
                  Filtr
                </button>
                
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center text-sm">
                  <Plus className="w-4 h-4 mr-1" />
                  Yangi navbat
                </button>
              </div>
            </div>
          </div>
          
          {appointments.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="py-4 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bemor</th>
                    <th className="py-4 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vaqt</th>
                    <th className="py-4 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Yosh</th>
                    <th className="py-4 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Turi</th>
                    <th className="py-4 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Holat</th>
                    <th className="py-4 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Harakatlar</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {appointments.map((appointment) => (
                    <tr key={appointment.id} className="hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-6">
                        <div className="flex items-center">
                          <img 
                            src={appointment.image} 
                            alt={appointment.patient}
                            className="h-10 w-10 rounded-full object-cover"
                          />
                          <div className="ml-4">
                            <div className="font-medium text-gray-900">{appointment.patient}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-gray-700 font-medium">{appointment.time}</td>
                      <td className="py-4 px-6 text-gray-600">{appointment.age}</td>
                      <td className="py-4 px-6">
                        <div className="flex items-center text-gray-600">
                          {appointment.typeIcon}
                          <span className="ml-2">{appointment.type}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <span className={`inline-flex text-xs leading-5 font-semibold px-3 py-1 rounded-full ${appointment.statusColor}`}>
                          {appointment.status}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center space-x-3">
                          <button className="text-blue-600 hover:text-blue-800 p-1.5 rounded-lg bg-blue-50">
                            <MessageCircle className="w-4 h-4" />
                          </button>
                          <button className="text-gray-500 hover:text-gray-700 p-1.5 rounded-lg bg-gray-100">
                            <MoreVertical className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="p-12 text-center">
              <div className="mx-auto flex justify-center">
                <div className="bg-gray-100 p-4 rounded-full">
                  <Calendar className="w-10 h-10 text-gray-400" />
                </div>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Hozircha navbatlar yo'q</h3>
              <p className="mt-1 text-gray-500">Bugun uchun navbatlar mavjud emas.</p>
              <div className="mt-6">
                <button className="inline-flex items-center px-4 py-2.5 border border-transparent text-sm font-medium rounded-xl shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  <Plus className="w-5 h-5 mr-1.5" />
                  Yangi navbat qo'shish
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-white p-5 rounded-2xl shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Statistika</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">O'rtacha davolash vaqti</span>
                <span className="font-medium">18 daqiqa</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Bemorlar soni</span>
                <span className="font-medium">124 kishi</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Qabul darajasi</span>
                <span className="font-medium text-green-600">92%</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-5 rounded-2xl shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Keyingi navbat</h3>
            {appointments.length > 0 ? (
              <div className="flex items-center">
                <img 
                  src={appointments[0].image} 
                  alt={appointments[0].patient}
                  className="h-14 w-14 rounded-full object-cover"
                />
                <div className="ml-4">
                  <div className="font-medium text-gray-900">{appointments[0].patient}</div>
                  <div className="text-sm text-gray-500 mt-1">{appointments[0].time}</div>
                  <div className="text-xs mt-1">
                    <span className={`inline-flex px-2 py-0.5 rounded-full ${appointments[0].statusColor}`}>
                      {appointments[0].status}
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-gray-500 text-center py-4">Keyingi navbat mavjud emas</p>
            )}
          </div>
          
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-5 rounded-2xl shadow-sm text-white">
            <h3 className="text-lg font-semibold mb-3">Shifokor reytingi</h3>
            <div className="text-3xl font-bold mb-2">4.8/5</div>
            <div className="flex mb-3">
              {"★".repeat(5)}
            </div>
            <p className="text-blue-100 text-sm">128 ta sharx basedan</p>
            <button className="mt-4 text-blue-900 bg-white hover:bg-blue-50 px-4 py-2 rounded-lg text-sm font-medium w-full">
              Sharxlarni ko'rish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;