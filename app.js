const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const { errors } = require('celebrate');

const { PORT = 3000 } = process.env;
mongoose.set('strictQuery', true);

mongoose.connect('mongodb://127.0.0.1:27017/API-Movies', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

app.listen(PORT);
