import { toast } from 'react-toastify';

export const notifyDoctor = (doctor, appointmentDetails) => {
  const { patientName, appointmentTime, issue, comments } = appointmentDetails;
  const message = `New appointment booked!\nPatient: ${patientName}\nTime: ${appointmentTime}\nIssue: ${issue}\nComments: ${comments}`;
  
  toast.success(message, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 5000,
  });
};