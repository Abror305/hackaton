import axios from 'axios';

const API_URL = 'https://api.example.com'; // Замените на ваш реальный URL API

export const createAppointment = async (appointmentData) => {
  try {
    const response = await axios.post(`${API_URL}/appointments`, appointmentData);
    return response.data;
  } catch (error) {
    throw new Error('Ошибка при создании записи: ' + error.message);
  }
};

export const getAppointments = async () => {
  try {
    const response = await axios.get(`${API_URL}/appointments`);
    return response.data;
  } catch (error) {
    throw new Error('Ошибка при получении записей: ' + error.message);
  }
};

export const deleteAppointment = async (appointmentId) => {
  try {
    await axios.delete(`${API_URL}/appointments/${appointmentId}`);
  } catch (error) {
    throw new Error('Ошибка при удалении записи: ' + error.message);
  }
};