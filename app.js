const express = require('express');

const app = express();
const port = 3000;

// Middleware for JSON data
app.use(express.json());

// Routes
const routerApi = require('./routes');
routerApi(app);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
