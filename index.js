'use strict';

const express = require('express');
const app = express();
const errorHandler = require('./src/error-handlers');
const server = require('./src/server');
const env = require('dotenv');


app.listen(3001);

app.use('*',(notFound, res, next) => {
  res.send('This Works');
});

const notFound = require('./');