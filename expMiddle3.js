const express = require('express');
const app = express();
const { People, Laptops } = require('./dataFiles/data.js');

app.use(express.static('./public'))
//app.use(express.static('./node_modules/express'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())


const authenticate = (req, res, next) => {
  console.log('Inside auth module')
  console.log(req.headers);
  next();
}

app.use('/api/people', authenticate)

app.get('/api/people', (req, res) => {
  console.log(People);
  res.status(200).send(People);
})

app.get('/api/people/:id', (req, res) => {
  const { id } = req.params;
  console.log(id);
  const Person = People.find((people) => people.id === Number(id))
  if (Person) {
    res.status(200).send(Person.name);
  }
  else
    res.status(200).send('No match found for the id entered')
})

app.post('/api/people', (req, res) => {
  const { pname } = req.body;
  console.log(pname);
  if (pname) {
    res.status(201).send({ success: true, pname: pname });
  }
  else {
    res.status(400).send({ msg: 'Name cannot be blank' });
  }
})

app.get('/api/laptops', (req, res) => {
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


app.listen(5005, () => {
  console.log('Listening on port 5005...')
})