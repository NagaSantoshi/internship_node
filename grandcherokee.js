// index.js
const express = require('express');
const app = express();
const port = 3003;

const connection = require('./db');

app.set('view engine', 'ejs');

app.get('/grandcherokee', (req, res) => {
  connection.query('SELECT gc_image,gc_name,gc_msrp,gc_le,gc_drive4x4,gc_drive4x2,gc_seating2row,gc_seating3row FROM grandcherokee', (error, results) => {
    if (error) {
      return res.status(500).send(error);
    }
    res.render('grandcherokee', { grandcherokee: results });
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});