const express = require('express');
const app = express();
const port = 3000;

// Middleware for JSON data
app.use(express.json());

// Data
const data = {
  places: [
    {
      id: 1,
      name: 'Barranquilla',
      location: { latitude: 10.98, longitude: -74.78 },
      temperature: 28,
      humidity: 70,
      region: 'Costa Caribe',
      elevation: 18,
    },
    {
      id: 2,
      name: 'Bogotá',
      location: { latitude: 4.61, longitude: -74.08 },
      temperature: 14,
      humidity: 60,
      region: 'Región Andina',
      elevation: 2640,
    },
    {
      id: 3,
      name: 'Cali',
      location: { latitude: 3.42, longitude: -76.52 },
      temperature: 24,
      humidity: 65,
      region: 'Costa Pacífica',
      elevation: 995,
    },
    {
      id: 4,
      name: 'Medellín',
      location: { latitude: 6.25, longitude: -75.57 },
      temperature: 22,
      humidity: 55,
      region: 'Valle de Aburrá',
      elevation: 1495,
    },
  ],
};

// Routes
const router = require('./routes');
router(app, data);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
