const express = require('express');
const app = express.Router();
const { Laptops } = require('../dataFiles/data.js');
const authenticate = require('../Middleware/authenticate.js');

app.use(express.static('../public'))
//app.use(express.static('./node_modules/express'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(authenticate)

app.get('/', (req, res) => {
  const qString = req.query;
  const name = qString.name;
  console.log(name)
  if (name) {
    const laptop = Laptops.find((laptop) => laptop.name.startsWith(name))
    if (laptop) {
      return res.status(200).send(laptop)
    }
    else {
      return res.status(200).send(`Laptop "${name}" not found, please check the input`)
    }
  }
  res.status(200).send(Laptops);
})


module.exports = app;