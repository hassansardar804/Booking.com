const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const User = require('./Routes/User/User.routes')
const Bus = require('./Routes/Bus/Bus.routes')
const RegisterBus = require('./Routes/Bus/Registerbus.routes.js/Registerbus.routes')
const Ticket = require('./Routes/Ticket/Ticket.routes')
const port = 3009;

// Middlewares
app.use(express.json());
app.use(cors());



//user
app.use('/user', User)


//Register Bus
app.use('/RegisterBus', RegisterBus)
//bus
app.use('/bus', Bus);
//Ticket
app.use('/ticket', Ticket)


app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Connect to MongoDB

mongoose.connect("mongodb://localhost:27017/Booking")
  .then(() => {
    app.listen(port, () => console.log(`Server & db is up on port ${port}...`));
  })
  .catch(err => {
    console.error('Failed to connect to MongoDB', err);
  });
