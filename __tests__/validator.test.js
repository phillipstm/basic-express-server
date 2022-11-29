'use strict';

const { describe, it } = require('node:test');
// const { app } = require('process');
// const supertest = require('supertest');
// const request = supertest('app');
import validator from '../src/middleware/validator';


describe('validator middleware', () => {
  it('works', async() => {
    let req = {};
    let res = {};
    let next = jest.fn();

    validator(req, res, next);
    console.log(req.name);
    expect(req.name).toBeTruthy();
    expect(next).toBeDefined();
  });
});