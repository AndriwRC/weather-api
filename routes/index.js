const placesRouter = require('./places');
const weatherRouter = require('./weather');

const router = (app, data) => {
  placesRouter(app, '/places', data.places);
  weatherRouter(app, '/weather', data.weather);
};

module.exports = router;
