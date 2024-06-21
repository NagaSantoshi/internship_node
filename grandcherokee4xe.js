// index.js
const express = require('express');
const app = express();
const port = 3004;

const connection = require('./db');

app.set('view engine', 'ejs');

app.get('/grandcherokee4xe', (req, res) => {
  connection.query('SELECT g4xe_image,g4xe_name,g4xe_msrp,g4xe_le,g4xe_drive FROM grandcherokee4xe', (error, results) => {
    if (error) {
      return res.status(500).send(error);
    }
    res.render('grandcherokee4xe', { grandcherokee4xe: results });
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});