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
  weather: [
    {
      placeId: 1,
      current: {
        date: new Date(),
        temperature: 28,
        humidity: 70,
        condition: 'Sunny',
      },
      forecast: [
        {
          date: '2024-09-10',
          precipitationChance: 20,
          condition: 'Partly Cloudy',
        },
        {
          date: '2024-09-11',
          precipitationChance: 30,
          condition: 'Cloudy',
        },
        {
          date: '2024-09-12',
          precipitationChance: 15,
          condition: 'Sunny',
        },
      ],
    },
    {
      placeId: 2,
      current: {
        date: new Date(),
        temperature: 22,
        humidity: 65,
        condition: 'Overcast',
      },
      forecast: [
        {
          date: '2024-09-10',
          precipitationChance: 50,
          condition: 'Rainy',
        },
        {
          date: '2024-09-11',
          precipitationChance: 40,
          condition: 'Showers',
        },
        {
          date: '2024-09-12',
          precipitationChance: 10,
          condition: 'Clear',
        },
      ],
    },
    {
      placeId: 3,
      current: {
        date: new Date(),
        temperature: 30,
        humidity: 55,
        condition: 'Hot',
      },
      forecast: [
        {
          date: '2024-09-10',
          precipitationChance: 5,
          condition: 'Sunny',
        },
        {
          date: '2024-09-11',
          precipitationChance: 10,
          condition: 'Windy',
        },
        {
          date: '2024-09-12',
          precipitationChance: 20,
          condition: 'Partly Cloudy',
        },
      ],
    },
    {
      placeId: 4,
      current: {
        date: new Date(),
        temperature: 18,
        humidity: 80,
        condition: 'Foggy',
      },
      forecast: [
        {
          date: '2024-09-10',
          precipitationChance: 60,
          condition: 'Thunderstorms',
        },
        {
          date: '2024-09-11',
          precipitationChance: 50,
          condition: 'Heavy Rain',
        },
        {
          date: '2024-09-12',
          precipitationChance: 25,
          condition: 'Light Rain',
        },
      ],
    },
  ],
};

// Routes
const routerApi = require('./routes');
routerApi(app);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
