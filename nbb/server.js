const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

// CORS middleware
app.use(cors());

// Pagrindinis endpointas
app.get('/', (req, res) => {
  res.send('Hello World\n');
});

// Klausykite užklausų nurodytu prievadu
app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}/`);
});
