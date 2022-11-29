'use strict';


const validator= (req, res, next) => {
  if (req.query.name) {
    next();
  } else {
    next('Name required');
  }
};

module.exports = validator;