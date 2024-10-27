const express = require('express');
const PlaceService = require('../services/places');

const router = express.Router();
const placeService = new PlaceService();

router.get('/', async (req, res) => {
  try {
    const places = await placeService.getPlaces();
    res.status(200).json(places);
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const place = await placeService.getPlaceById(id);
    res.json({ message: 'Place found!', data: place });
  } catch (error) {
    res.status(404).json({
      message: 'Place not found.',
    });
  }
});

router.post('/', async (req, res) => {
  try {
    const { name, temperature, humidity } = req.body;

    if (!name || !temperature || !humidity) {
      return res.status(400).json({
        error: 'Please provide all required fields',
      });
    }

    const newPlace = {
      name,
      temperature,
      humidity,
      region: '',
      elevation: 0,
      weather: {
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
    };

    const result = await placeService.createPlace(newPlace);

    res.status(201).json({ message: 'New place created.', data: result });
  } catch (error) {
    res.status(400).json({ message: 'bad request' });
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await placeService.updatePlace(id, req.body);

    res.status(200).json({
      message: 'Place changed successfully.',
      data: result,
    });
  } catch (error) {
    res.status(400).json({ message: 'error' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const result = await placeService.deletePlace(id);

    res.json({ message: 'Place deleted.', result: result });
  } catch (error) {
    res.status(400).json({ message: 'error' });
  }
});

module.exports = router;
