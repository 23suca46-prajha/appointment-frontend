import React, { useState, useEffect } from 'react';
import './App.css';
import AppointmentForm from './components/AppointmentForm';
import AppointmentList from './components/AppointmentList';
import axios from 'axios';

// ✅ Correct backend URL
const API_BASE_URL = 'https://appointment-backend-f4gzf7bnaqdwayad.southeastasia-01.azurewebsites.net/api/appointments';

function App() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch appointments on component mount
  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    setLoading(true);
    try {
      const response = await axios.get(API_BASE_URL);
      setAppointments(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch appointments');
      console.error('Error fetching appointments:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddAppointment = async (appointmentData) => {
    try {
      const response = await axios.post(API_BASE_URL, appointmentData);
      setAppointments([...appointments, response.data]);
      setError(null);
    } catch (err) {
      setError('Failed to add appointment');
      console.error('Error adding appointment:', err);
    }
  };

  const handleDeleteAppointment = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/${id}`);
      setAppointments(appointments.filter(apt => apt.id !== id));
      setError(null);
    } catch (err) {
      setError('Failed to delete appointment');
      console.error('Error deleting appointment:', err);
    }
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>Doctors Appointment Booking</h1>
        <p>Book and manage your appointments</p>
      </header>

      <main className="app-main">
        <div className="container">
          {error && <div className="error-message">{error}</div>}

          <div className="app-content">
            <div className="form-section">
              <h2>New Appointment</h2>
              <AppointmentForm onSubmit={handleAddAppointment} />
            </div>

            <div className="list-section">
              <h2>Appointments</h2>
              {loading ? (
                <p className="loading">Loading appointments...</p>
              ) : (
                <AppointmentList 
                  appointments={appointments} 
                  onDelete={handleDeleteAppointment}
                />
              )}
            </div>
          </div>
        </div>
      </main>

      <footer className="app-footer">
        <p>&copy; 2026 Doctors Appointment System. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
