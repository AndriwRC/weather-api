const placesRouter = (app, route, places) => {
    app.get(`${route}/`, (req, res) => {
        res.json({
            message: 'Here you get a list of places.',
            data: places,
        });
    });
};

module.exports = placesRouter;
