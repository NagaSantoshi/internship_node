// index.js
const express = require('express');
const app = express();
const port = 3002;

const connection = require('./db');

app.set('view engine', 'ejs');

app.get('/wagoneer', (req, res) => {
  connection.query('SELECT wg_image,wg_name,wg_msrp,wg_le,wg_drive4x4,wg_drive4x2,wg_standard,wg_longwheel FROM wagoneer', (error, results) => {
    if (error) {
      return res.status(500).send(error);
    }
    res.render('wagoneer', { wagoneer: results });
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});