// index.js
const express = require('express');
const app = express();
const port = 3500;

const connection = require('./db');

app.set('view engine', 'ejs');

app.get('/compass', (req, res) => {
  connection.query('SELECT cmp_image,cmp_name,cmp_msrp,cmp_le,cmp_drive FROM compass', (error, results) => {
    if (error) {
      return res.status(500).send(error);
    }
    res.render('compass', { compass: results });
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});