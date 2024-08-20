const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const port = 3001;

// CORS middleware
app.use(cors());

// Create Mysql Connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'notebook'
});

// Check connection
connection.connect((err) => {
  if (err) {
    console.error('Error connect to Mysql:', err);
    return;
  }
  console.log('Successfully connected to Mysql database!');
});


// Pagrindinis endpointas
app.get('/', (req, res) => {
  res.send('Hello World\n');
});

// Klausykite užklausų nurodytu prievadu
app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}/`);
});
