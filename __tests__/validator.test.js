'use strict';

const { describe, it } = require('node:test');
const { app } = require('process');
const supertest = require('supertest');
const{ app } = require('../server');
const request = supertest('app');

describe('validator middleware', () => {
  it('works', async() => {
    const resonse = await request.get('./name');
    expect(response.person).toBeTruthy();
    expect(response.person).toBeDefined();
  });
});