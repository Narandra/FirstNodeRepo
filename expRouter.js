const express = require('express');
const app = express();
const router1 = require('./Routes/People.js');
const router2 = require('./Routes/Laptops.js');

app.use('/api/people',router1)
app.use('/api/laptops',router2)

app.listen(5005, () => {
  console.log('Listening on port 5005...')
})
