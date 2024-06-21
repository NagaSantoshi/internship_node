const express = require('express');
const app = express();
const port = 5500;

const connection = require('./db');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  connection.query('SELECT car_id, car_name, car_image, car_price, car_model FROM car', (error, results) => {
    if (error) {
      return res.status(500).send(error);
    }
    res.render('build_price', { car: results });
  });
});

app.get('/car/:id', (req, res) => {
  const carId = req.params.id;
  connection.query('SELECT car_link FROM car WHERE car_id = ?', [carId], (error, results) => {
    if (error) {
      return res.status(500).send(error);
    }
    if (results.length > 0) {
      const carLink = results[0].car_link.toString(); // Convert buffer to string
      res.setHeader('Content-Type', 'text/html');
      res.send(carLink);
    } else {
      res.status(404).send('Car not found');
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});