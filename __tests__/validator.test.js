'use strict';

const { describe, it } = require('node:test');
const { app } = require('process');
const supertest = require('supertest');
//const server = require('../server');
const request = supertest('app');

describe('validator middleware', () => {
  it('works', async() => {
    const response = await request.get('./name');
    expect(response.person).toBeTruthy();
    expect(response.person).toBeDefined();
  });
});