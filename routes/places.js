const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Here you get a list of places.',
    data: places,
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  const place = places.find(place => place.id == id);

  if (!place) {
    return res.status(404).json({
      message: 'Place not found.',
    });
  }

  res.json({ message: 'Place found!', data: place });
});

router.post('/', (req, res) => {
  const { id, name, temperature, humidity } = req.body;

  if (!id || !name || !temperature || !humidity) {
    return res.status(400).json({
      error: 'Please provide all required fields',
    });
  }
  if (places.some(place => place.id == id)) {
    return res.status(409).json({
      error: 'This ID already exist.',
    });
  }

  const newPlace = {
    id,
    name,
    temperature,
    humidity,
    region: '',
    elevation: 0,
  };

  places.push(newPlace);
  res.status(201).json({ message: 'New place created.', data: newPlace });
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const placeIndex = places.findIndex(place => place.id == id);

  if (placeIndex === -1) {
    return res.status(404).json({
      message: 'Place not found',
    });
  }

  const { name, temperature, humidity, region, elevation } = req.body;

  if (name) places[placeIndex].name = name;
  if (temperature) places[placeIndex].temperature = temperature;
  if (humidity) places[placeIndex].humidity = humidity;
  if (region) places[placeIndex].region = region;
  if (elevation) places[placeIndex].elevation = elevation;

  res.status(200).json({
    message: 'Place changed successfully.',
    data: places[placeIndex],
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const placeIndex = places.findIndex(place => place.id == id);

  if (placeIndex === -1) {
    return res.status(404).json({
      message: 'Place not found',
    });
  }

  const deletedPlace = places.splice(placeIndex, 1)[0];
  res.json({ message: 'Place deleted.', data: deletedPlace });
});

module.exports = router;
