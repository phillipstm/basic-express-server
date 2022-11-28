'use strict';

const { request } = require('express');
const supertest = require('supertest');
const { app } = require('./server');
const client = supertest(app);


describe('API server', () => {

  it('handles invalid requests', async () => {
    const response = await request.get('/foo');
    expect(response.status).toEqual(404);
  });

  it('handles errors', async () => {
    const response = await request.get('/bad');
    expect(response.status).toEqual(500);
    expect(response.body.route).toEqual('./bad');
    expect(response.body.message).toEqual('Sorry this is a bad route');
  });

  it('handles root path', async () => {
    const response = await request.get('/');

    expect(response.status).toBe('200');
    expect(response.text).toBeTruthy();
    expect(response.text).toEqual('Hello Friend');
  });
  return client.get('/data')
    .then(response => {
      expect(response.body).toBeDefined();
    });
});

