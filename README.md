# Doctors Appointment Frontend

This is the React frontend for the Doctors Appointment Booking System.

## Features

- Book appointments with doctors
- View all booked appointments
- Delete appointments
- Real-time updates with the backend API

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

The app will run on [http://localhost:3000](http://localhost:3000)

## API Configuration

The frontend connects to the backend API at `http://localhost:8080/api/appointments`

Make sure the Spring Boot backend is running before using this application.

## Project Structure

```
frontend/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── AppointmentForm.js
│   │   ├── AppointmentForm.css
│   │   ├── AppointmentList.js
│   │   ├── AppointmentList.css
│   │   ├── AppointmentCard.js
│   │   └── AppointmentCard.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Available Scripts

- `npm start` - Runs the development server
- `npm build` - Creates a production build
- `npm test` - Runs tests
- `npm eject` - Ejects from create-react-app (irreversible)
