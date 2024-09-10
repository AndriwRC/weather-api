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
      temperature: 28,
      humidity: 70,
      region: 'Costa Caribe',
      elevation: 18,
    },
    {
      id: 2,
      name: 'Bogotá',
      temperature: 14,
      humidity: 60,
      region: 'Región Andina',
      elevation: 2640,
    },
    {
      id: 3,
      name: 'Cali',
      temperature: 24,
      humidity: 65,
      region: 'Costa Pacífica',
      elevation: 995,
    },
    {
      id: 4,
      name: 'Medellín',
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
