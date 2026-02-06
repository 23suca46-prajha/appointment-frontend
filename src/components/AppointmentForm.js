import React, { useState } from 'react';
import './AppointmentForm.css';

function AppointmentForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    patientName: '',
    patientEmail: '',
    patientPhone: '',
    doctorName: '',
    appointmentDate: '',
    appointmentTime: '',
    reason: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.patientName || !formData.patientEmail || !formData.doctorName || 
        !formData.appointmentDate || !formData.appointmentTime) {
      alert('Please fill in all required fields');
      return;
    }

    try {
      await onSubmit(formData);
      setSubmitted(true);
      setFormData({
        patientName: '',
        patientEmail: '',
        patientPhone: '',
        doctorName: '',
        appointmentDate: '',
        appointmentTime: '',
        reason: ''
      });
      
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      console.error('Error submitting form:', err);
    }
  };

  return (
    <form className="appointment-form" onSubmit={handleSubmit}>
      {submitted && <div className="success-message">Appointment booked successfully!</div>}

      <div className="form-group">
        <label htmlFor="patientName">Patient Name *</label>
        <input
          type="text"
          id="patientName"
          name="patientName"
          value={formData.patientName}
          onChange={handleChange}
          placeholder="Enter your full name"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="patientEmail">Email *</label>
        <input
          type="email"
          id="patientEmail"
          name="patientEmail"
          value={formData.patientEmail}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="patientPhone">Phone Number</label>
        <input
          type="tel"
          id="patientPhone"
          name="patientPhone"
          value={formData.patientPhone}
          onChange={handleChange}
          placeholder="Enter your phone number"
        />
      </div>

      <div className="form-group">
        <label htmlFor="doctorName">Doctor Name *</label>
        <input
          type="text"
          id="doctorName"
          name="doctorName"
          value={formData.doctorName}
          onChange={handleChange}
          placeholder="Enter doctor name"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="appointmentDate">Appointment Date *</label>
        <input
          type="date"
          id="appointmentDate"
          name="appointmentDate"
          value={formData.appointmentDate}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="appointmentTime">Appointment Time *</label>
        <input
          type="time"
          id="appointmentTime"
          name="appointmentTime"
          value={formData.appointmentTime}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="reason">Reason for Appointment</label>
        <textarea
          id="reason"
          name="reason"
          value={formData.reason}
          onChange={handleChange}
          placeholder="Describe the reason for your appointment"
          rows="3"
        />
      </div>

      <button type="submit" className="submit-btn">Book Appointment</button>
    </form>
  );
}

export default AppointmentForm;
