'use strict';

const express = require('express');
const notFound = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const logger = require('./middleware/logger');
const PORT = process.env.PORT || 3002;
const app = express();

app.use(logger);

app.get('./', (req, res, next) => {
  res.status(200).send('Hello Peeps');
});

app.get('/bad', (req, res, next) => {
  next('Oops bad route');
});
//app.get('/name', (req, res, next) => {
//     let { name } = req.query;
//     console.log('name', name);

// });

app.use('*', notFound);

app.use(errorHandler);

function start() {
  app.listen(PORT, () => console.log(`listening on ${PORT}`));
}

module.exports = {app, start};


/**
 * JSDoc example
 * @prams {string} name
 * @returns a hello message
 */

function greet(name){
  return `Hello ${name}`;
}
