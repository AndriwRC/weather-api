const express = require('express');
const placesRouter = require('./places');
const weatherRouter = require('./weather');
// const usersRouter = require('./users');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/places', placesRouter);
  router.use('/weather', weatherRouter);
  // router.use('/users', usersRouter);
}

module.exports = routerApi;
