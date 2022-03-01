const express = require('express');
const app = express.Router();
const { People } = require('../dataFiles/data.js');
const authenticate = require('../Middleware/authenticate.js');

app.use(express.static('../public'))
//app.use(express.static('./node_modules/express'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(authenticate)

app.get('/', (req, res) => {
  console.log(People);
  res.status(200).send(People);
})

app.get('/:id', (req, res) => {
  const { id } = req.params;
  console.log(id);
  const Person = People.find((people) => people.id === Number(id))
  if (Person) {
    res.status(200).send(Person.name);
  }
  else
    res.status(200).send('No match found for the id entered')
})

app.post('/', (req, res) => {
  const { pname } = req.body;
  console.log(pname);
  if (pname) {
    res.status(201).send({ success: true, pname: pname });
  }
  else {
    res.status(400).send({ msg: 'Name cannot be blank' });
  }
})

module.exports = app;