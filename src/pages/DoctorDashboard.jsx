import React, { useState } from "react";
import { Calendar, Users, UserPlus, Activity, Bell, Search } from "lucide-react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AdminDashboard = () => {
  const [search, setSearch] = useState("");

  const stats = [
    {
      id: 1,
      title: "Jami shifokorlar",
      value: 42,
      icon: <Users className="w-6 h-6 text-blue-500" />,
      color: "bg-gradient-to-r from-blue-50 to-blue-100",
      border: "border-l-4 border-blue-500",
    },
    {
      id: 2,
      title: "Jami bemorlar",
      value: 356,
      icon: <UserPlus className="w-6 h-6 text-green-500" />,
      color: "bg-gradient-to-r from-green-50 to-green-100",
      border: "border-l-4 border-green-500",
    },
    {
      id: 3,
      title: "Bugungi qabul",
      value: 87,
      icon: <Calendar className="w-6 h-6 text-purple-500" />,
      color: "bg-gradient-to-r from-purple-50 to-purple-100",
      border: "border-l-4 border-purple-500",
    },
    {
      id: 4,
      title: "Faol navbatlar",
      value: 19,
      icon: <Activity className="w-6 h-6 text-amber-500" />,
      color: "bg-gradient-to-r from-amber-50 to-amber-100",
      border: "border-l-4 border-amber-500",
    },
  ];

  const doctors = [
    { id: 1, name: "Dr. Alijonov", specialty: "Kardiolog", patients: 120 },
    { id: 2, name: "Dr. Xasanova", specialty: "Nevrolog", patients: 95 },
    { id: 3, name: "Dr. Rustamov", specialty: "Pediatr", patients: 143 },
  ];

  const chartData = {
    labels: ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun"],
    datasets: [
      {
        label: "Qabul soni",
        data: [120, 150, 180, 90, 200, 160],
        backgroundColor: "rgba(59, 130, 246, 0.6)",
        borderRadius: 10,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: true, text: "So‘nggi 6 oy qabul statistikasi" },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Admin Paneli</h1>
            <p className="text-gray-500 mt-2">Xush kelibsiz, Admin</p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center space-x-4">
            <div className="relative">
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Qidirish..."
                className="pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full md:w-64"
              />
            </div>
            <button className="relative p-2 text-gray-500 hover:text-gray-700 bg-white rounded-xl border border-gray-200">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">5</span>
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className={`p-5 rounded-2xl shadow-sm ${stat.color} ${stat.border} transition-all hover:shadow-md`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 text-sm font-medium mb-1">{stat.title}</p>
                  <h2 className="text-2xl font-bold text-gray-800">{stat.value}</h2>
                </div>
                <div className="p-2.5 rounded-lg bg-white bg-opacity-50">{stat.icon}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="bg-white p-6 rounded-2xl shadow-md mb-8">
          <Bar data={chartData} options={chartOptions} />
        </div>

        {/* Doctors List */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Oxirgi qo‘shilgan shifokorlar</h2>
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ism</th>
                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mutaxassisligi</th>
                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bemorlar soni</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {doctors.map((doc) => (
                <tr key={doc.id} className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6 font-medium text-gray-900">{doc.name}</td>
                  <td className="py-4 px-6 text-gray-600">{doc.specialty}</td>
                  <td className="py-4 px-6 text-gray-600">{doc.patients}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
