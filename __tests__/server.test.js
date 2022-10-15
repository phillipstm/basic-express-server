'use strict';

const { request } = require('express');
const supertest = require('supertest');
const { app } = require('../app');
const client = supertest(myServer.server);


describe('API server', () => {
  test('can send data', () => {
    it('handles invalid requests', async() => {
      const response = await request.get('/foo');
      expect(response.staus).toEqual(404);
    });
    it('handles errors', async() => {
      const response = await request.get('bad');
      expect(response.staus).toEqual(500);
      expect(response.body.route).toEqual('./bad');
      expect(response.body.message).toEqual('/');
    });
    it ('handles root path', async() => {
      const response = await request.get('/');
      expect(response.status).toBe('This is a bad route');
    });
    return client.get('/data')
      .then(response => {
        expect(response.body).toBeDefined();
      });
  });
});
