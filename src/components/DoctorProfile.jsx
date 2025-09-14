import React from 'react';

const DoctorProfile = ({ doctor, schedule }) => {
  return (
    <div className="doctor-profile">
      <h2>{doctor.name}</h2>
      <p>Specialization: {doctor.specialization}</p>
      <h3>Available Time Slots</h3>
      <ul>
        {schedule.map((slot, index) => (
          <li key={index}>{slot}</li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorProfile;