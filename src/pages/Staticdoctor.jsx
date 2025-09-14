import React from "react";
import { Calendar, Clock, User, Phone } from "lucide-react";
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

// ChartJS registratsiyasi
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Staticdoctor = () => {
  const stats = [
    {
      id: 1,
      title: "Jami navbatlar",
      value: 24,
      icon: <Calendar className="w-5 h-5 text-blue-500" />,
      color: "bg-gradient-to-r from-blue-50 to-blue-100",
      border: "border-l-4 border-blue-500",
    },
    {
      id: 2,
      title: "Tasdiqlangan",
      value: 18,
      icon: <Clock className="w-5 h-5 text-green-500" />,
      color: "bg-gradient-to-r from-green-50 to-green-100",
      border: "border-l-4 border-green-500",
    },
    {
      id: 3,
      title: "Tugallangan",
      value: 12,
      icon: <User className="w-5 h-5 text-purple-500" />,
      color: "bg-gradient-to-r from-purple-50 to-purple-100",
      border: "border-l-4 border-purple-500",
    },
    {
      id: 4,
      title: "Kutilmoqda",
      value: 6,
      icon: <Phone className="w-5 h-5 text-amber-500" />,
      color: "bg-gradient-to-r from-amber-50 to-amber-100",
      border: "border-l-4 border-amber-500",
    },
  ];

  // Chart data
  const chartData = {
    labels: stats.map((s) => s.title),
    datasets: [
      {
        label: "Statistika",
        data: stats.map((s) => s.value),
        backgroundColor: [
          "rgba(59, 130, 246, 0.6)", // blue
          "rgba(34, 197, 94, 0.6)", // green
          "rgba(168, 85, 247, 0.6)", // purple
          "rgba(245, 158, 11, 0.6)", // amber
        ],
        borderRadius: 12,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Shifokor Statistikasi",
      },
    },
  };

  return (
    <div className="p-6">
      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className={`p-5 rounded-2xl shadow-sm ${stat.color} ${stat.border} transition-all hover:shadow-md`}
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-500 text-sm font-medium mb-1">
                  {stat.title}
                </p>
                <h2 className="text-2xl font-bold text-gray-800">
                  {stat.value}
                </h2>
              </div>
              <div className="p-2.5 rounded-lg bg-white bg-opacity-50">
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Chart Section */}
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default Staticdoctor;
