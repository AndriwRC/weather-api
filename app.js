const express = require('express');
const app = express();
const port = 3000;

// Middleware for JSON data
app.use(express.json());

// Data
const data = {
    places: [],
};

// Routes
const router = require('./routes');
router(app, data);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
