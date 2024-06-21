// index.js
const express = require('express');
const app = express();
const port = 3000;

const connection = require('./db');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  connection.query('SELECT id,images,name FROM car_details', (error, results) => {
    if (error) {
      return res.status(500).send(error);
    }
    res.render('index', { car_details: results });
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
