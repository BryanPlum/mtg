const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://YourDatabase:Password@cluster0-n13y8.mongodb.net/mtgApi?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology:true})

app.use(express.json());

app.use(routes);

app.listen(3333);
