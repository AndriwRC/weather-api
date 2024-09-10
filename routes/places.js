const placesRouter = (app, route, places) => {
  app.get(`${route}/`, (req, res) => {
    res.json({
      message: 'Here you get a list of places.',
      data: places,
    });
  });

  app.post(`${route}/`, (req, res) => {
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
};

module.exports = placesRouter;
