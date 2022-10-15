'use strict';

const supertest = require('supertest');
const { app } = require('../src/server');
const request = supertest(app);

let logger = require('./middleware/logger');


describe('test logger middleware', () => {
  let consoleSpy;
  let req = {};
  let res = {};
  let next = jest.fn();

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });
  ////turn it off!
  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('Logs output', () => {
    logger(req, res, next);
    console.log('req', req);
    expect(consoleSpy).toHaveBeenCalledWith(`REQUEST: ${req.originalURL}`);
  });
  test('Calls next()', () => {
    logger(req, res, next);
    expect(next).toHaveBeenCalledWith();
  });
});