// src/pages/Doctor.jsx
import React, { useState, useEffect } from "react";
import {
    Search,
    Heart,
    Brain,
    Activity,
    Star,
    MapPin,
    ChevronRight,
    CheckCircle,
    Calendar,
    Clock,
    User,
    Phone,
    ArrowRight,
} from "lucide-react";
import Navbar from "../components/Navbar"; // Navbar import qilindi

const specialties = [
    { key: "all", label: "Barchasi" },
    { key: "cardiologist", label: "Kardiolog" },
    { key: "neurologist", label: "Nevrolog" },
    { key: "traumatologist", label: "Travmatolog" },
    { key: "dentist", label: "Dentist" },
    { key: "pediatrician", label: "Pediatr" },
    { key: "ophthalmologist", label: "Oftalmolog" },
];

const getSpecialtyIcon = (key) => {
    switch (key) {
        case "cardiologist":
            return <Heart className="h-4 w-4" />;
        case "neurologist":
            return <Brain className="h-4 w-4" />;
        case "traumatologist":
            return <Activity className="h-4 w-4" />;
        case "dentist":
            return <Activity className="h-4 w-4" />;
        case "pediatrician":
            return <Activity className="h-4 w-4" />;
        case "ophthalmologist":
            return <Activity className="h-4 w-4" />;
        default:
            return <Activity className="h-4 w-4" />;
    }
};

export default function Doctor() {
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedSpecialty, setSelectedSpecialty] = useState("all");
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const [selectedSlot, setSelectedSlot] = useState("");
    const [patientName, setPatientName] = useState("");
    const [patientPhone, setPatientPhone] = useState("");
    const [success, setSuccess] = useState(false);

    // API fetch
    const fetchDoctors = async () => {
        setLoading(true);
        try {
            let url = `https://ca755a3441cc.ngrok-free.app/api/user/doctors?`;
            if (searchQuery) url += `search=${encodeURIComponent(searchQuery)}&`;
            if (selectedSpecialty !== "all") url += `role=${encodeURIComponent(selectedSpecialty)}`;
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "ngrok-skip-browser-warning": "true",
                    "Content-Type": "application/json",
                },
            });
            const data = await res.json();
            const mapped = data.doctors.map((d) => ({
                _id: d._id,
                fullName: `${d.firstName} ${d.lastName}`,
                specialty: d.role,
                phone: d.phone,
                location: "Toshkent",
                rating: 4.8,
                experience: 5,
                image: "https://picsum.photos/100",
                availableSlots: ["10:00", "11:00", "14:00", "16:00"],
            }));
            setDoctors(mapped);
        } catch (error) {
            console.error("API xatolik:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDoctors();
    }, [searchQuery, selectedSpecialty]);

    const handleBooking = () => {
        if (!patientName || !patientPhone || !selectedSlot) {
            alert("Iltimos, barcha maydonlarni to'ldiring!");
            return;
        }
        const modal = document.getElementById("booking_modal");
        if (modal) modal.close();
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
        setSelectedDoctor(null);
        setSelectedSlot("");
        setPatientName("");
        setPatientPhone("");
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
            <Navbar />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Hero */}
                <div className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-2xl p-8 text-white mb-8 shadow-lg">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">Sog'liqingizni bizga ishoning</h1>
                    <p className="text-lg mb-6">Tajribali shifokorlarimizdan onlayn konsultatsiya oling va navbat oling</p>
                </div>

                {/* Search */}


                {/* Specialties */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-4 text-center text-gray-800">Mutaxassisliklar</h2>
                    <div className="flex flex-wrap justify-center gap-3">
                        {specialties.map((sp) => (
                            <button
                                key={sp.key}
                                onClick={() => setSelectedSpecialty(sp.key)}
                                className={`px-4 py-2 rounded-full flex items-center gap-2 ${selectedSpecialty === sp.key ? "bg-blue-600 text-white shadow-md" : "bg-white border border-blue-600 text-blue-600 hover:bg-blue-50"}`}
                            >
                                {getSpecialtyIcon(sp.key)} {sp.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Success Alert */}
                {success && (
                    <div className="alert alert-success shadow-lg mb-6 max-w-2xl mx-auto animate-fade-in flex items-center gap-2 text-green-700 font-medium">
                        <CheckCircle className="h-5 w-5" /> Siz muvaffaqiyatli navbat oldingiz!
                    </div>
                )}

                <div className="max-w-2xl mx-auto mb-8 relative">
                    <label className="input input-bordered flex items-center gap-2 shadow-md rounded-full bg-gray-950">
                        <Search className="h-5 w-5 opacity-70 ml-auto" />
                        <input
                            type="text"
                            className="grow rounded-full bg-transparent border-none focus:outline-none"
                            placeholder="shifokoringizni qidiring"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </label>
                </div>

                {/* Doctor Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                    {loading ? (
                        <div className="col-span-full flex justify-center items-center py-12">
                            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                        </div>
                    ) : doctors.length > 0 ? (
                        doctors.map((doctor) => (
                            <div key={doctor._id} className="bg-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 rounded-xl overflow-hidden border border-gray-100 p-5">
                                <div className="flex items-start gap-4">
                                    <img src={doctor.image} alt={doctor.fullName} className="w-16 h-16 rounded-full object-cover border-2 border-blue-500" />
                                    <div className="flex-1">
                                        <h3 className="font-bold text-lg text-gray-800">Dr. {doctor.fullName}</h3>
                                        <p className="text-blue-600 font-medium">{doctor.specialty}</p>
                                        <div className="flex flex-col mt-1 text-sm text-gray-600 gap-1">
                                            <div className="flex items-center gap-2">
                                                <Star className="h-4 w-4 text-yellow-400" /> {doctor.rating}
                                                <Clock className="h-4 w-4" /> {doctor.experience} yil
                                                <MapPin className="h-4 w-4" /> {doctor.location}
                                            </div>
                                            <div className="flex items-center gap-1 text-gray-700 font-medium">
                                                <Phone className="h-4 w-4" /> +998 95 210 05 50
                                            </div>
                                        </div>


                                    </div>
                                </div>
                                <div className="mt-4 flex justify-between items-center">
                                    <button
                                        className="btn btn-primary w-full"
                                        onClick={() => setSelectedDoctor(doctor)}
                                    >
                                        Navbat olish
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full text-center text-gray-600">Shifokor topilmadi...</div>
                    )}
                </div>

                {/* Booking Modal */}
                {selectedDoctor && (
                    <dialog id="booking_modal" open className="modal modal-bottom sm:modal-middle">
                        <form method="dialog" className="modal-box">
                            <h3 className="font-bold text-lg mb-4">Dr. {selectedDoctor.fullName} - Navbat olish</h3>
                            <div className="flex flex-col gap-3">
                                <input
                                    type="text"
                                    placeholder="Ismingiz"
                                    className="input input-bordered w-full"
                                    value={patientName}
                                    onChange={(e) => setPatientName(e.target.value)}
                                />
                                <input
                                    type="text"
                                    placeholder="Telefon raqamingiz"
                                    className="input input-bordered w-full"
                                    value={patientPhone}
                                    onChange={(e) => setPatientPhone(e.target.value)}
                                />
                                <select
                                    className="select select-bordered w-full"
                                    value={selectedSlot}
                                    onChange={(e) => setSelectedSlot(e.target.value)}
                                >
                                    <option value="">Navbat vaqti</option>
                                    {selectedDoctor.availableSlots.map((slot) => (
                                        <option key={slot} value={slot}>{slot}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="modal-action">
                                <button
                                    type="button"
                                    className="btn btn-primary w-full"
                                    onClick={handleBooking}
                                >
                                    Tasdiqlash
                                </button>
                            </div>
                        </form>
                    </dialog>
                )}
            </div>
        </div>
    );
}
