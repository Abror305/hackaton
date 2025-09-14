import React from "react";
import { MapPin, Phone, Mail, Star } from "lucide-react";

const Doctor = () => {
  const doctor = {
    name: "Dr. Jasur Abdullayev",
    specialty: "Kardiolog",
    experience: "12 yil tajriba",
    hospital: "Toshkent Shifoxonasi",
    phone: "+998 90 123 45 67",
    email: "jasur.abdullayev@clinic.uz",
    address: "Toshkent, Chilonzor, 12-mavze",
    rating: 4.8,
    image:
      "https://img.freepik.com/premium-photo/smiling-doctor-with-stethoscope-posing-medical-office_53876-108503.jpg",
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-lg">
        <div className="flex items-center space-x-6">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-28 h-28 rounded-full object-cover shadow-md"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{doctor.name}</h2>
            <p className="text-gray-600">{doctor.specialty}</p>
            <p className="text-sm text-gray-500">{doctor.experience}</p>
            <div className="flex items-center text-yellow-500 mt-1">
              <Star className="w-5 h-5 fill-yellow-400" />
              <span className="ml-1 text-gray-700">{doctor.rating} / 5</span>
            </div>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          <div className="flex items-center text-gray-700">
            <MapPin className="w-5 h-5 mr-2 text-blue-500" />
            <span>{doctor.address}</span>
          </div>
          <div className="flex items-center text-gray-700">
            <Phone className="w-5 h-5 mr-2 text-green-500" />
            <span>{doctor.phone}</span>
          </div>
          <div className="flex items-center text-gray-700">
            <Mail className="w-5 h-5 mr-2 text-red-500" />
            <span>{doctor.email}</span>
          </div>
        </div>

        <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          Qabulga yozilish
        </button>
      </div>
    </div>
  );
};

export default Doctor;
