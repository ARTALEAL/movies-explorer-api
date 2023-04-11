const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const { errors } = require('celebrate');
const {
  PORT, NODE_ENV, MONGO_URL, MONGO_URL_DEV,
} = require('./utils/constants');

mongoose.set('strictQuery', true);

mongoose.connect(NODE_ENV === 'production' ? MONGO_URL : MONGO_URL_DEV, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

app.listen(PORT);
