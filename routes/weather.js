const weatherRouter = (app, route, weather) => {
  app.get(`${route}/current/:placeId`, (req, res) => {
    const { placeId } = req.params;

    currentWeather = weather.find(item => item.placeId == placeId);

    if (!currentWeather)
      return res.status(404).json({
        message: 'Place not found',
      });

    res.json({
      message: 'This is the current weather on the selected place.',
      data: currentWeather.current,
    });
  });
  app.get(`${route}/forecast/:placeId`, (req, res) => {
    const { placeId } = req.params;

    forecast = weather.find(item => item.placeId == placeId);

    if (!forecast)
      return res.status(404).json({
        message: 'Place not found',
      });

    res.json({
      message:
        'This is the forecast for the 3 next days on the selected place.',
      data: forecast.forecast,
    });
  });
};

module.exports = weatherRouter;