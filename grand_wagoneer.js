// index.js
const express = require('express');
const app = express();
const port = 3001;

const connection = require('./db');

app.set('view engine', 'ejs');

app.get('/grand_wagoneer', (req, res) => {
  connection.query('SELECT gw_image,gw_name,gw_msrp,gw_le,gw_standard,gw_longwheel FROM grand_wagoneer', (error, results) => {
    if (error) {
      return res.status(500).send(error);
    }
    res.render('grand_wagoneer', { grand_wagoneer: results });
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});