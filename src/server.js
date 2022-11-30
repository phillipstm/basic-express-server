'use strict';

const express = require('express');
const notFound = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');
const PORT = process.env.PORT || 3002;
const app = express();

app.use(logger);
app.use(validator);

app.get('./', (req, res) => {
  res.status(200).send('Hello Peeps');
});

app.get('/bad', (req, res, next) => {
  next('Oops bad route');
});

app.get('/person', (req, res, next) => {
  let { personName } = req.query;
  console.log('personName', personName);
  
  try{
    if(personName){
      res.status(200).send(`${personName} hola amigo`);
    }else{
      res.status(200).send(`So happy you're here`)
    }
  }catch(err){
    next(err.message);
  }
});

app.use('*', notFound);

app.use(errorHandler);

function start() {
  app.listen(PORT, () => console.log(`listening on ${PORT}`));
}

module.exports = { app, start };


/**
 * JSDoc example
 * @prams {string} name
 * @returns a hello message
 */

function greet(personName) {
  return `Hello ${personName}`;
}

greet('Jo Blo');
