const placesRouter = require('./places');

const router = (app, data) => {
    placesRouter(app, '/places', data.places);
};

module.exports = router;
