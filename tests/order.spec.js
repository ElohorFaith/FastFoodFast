import request from 'supertest';
import { expect } from 'chai';
import app from '../app';

describe('Api Test', () => {
  describe('get all orders API', () => {
    it('should return all the orders', (done) => {
      request(app)
        .get('/api/v1/orders')
        .end((err, res) => {
          expect(res.status).to.equal(200);
          done();
        });
    });
  });

  describe('get one order API', () => {
    it('should return one order', (done) => {
      request(app)
        .get('/api/v1/orders/1')
        .end((err, res) => {
          expect(res.status).to.equal(200);
          done();
        });
    });
  });

  describe('create order API', () => {
    it('should create order', (done) => {
      request(app)
        .post('/api/v1/orders')
        .send({
          name: 'rice',
          price: '800',
          status: 'completed',
          date: new Date(),
        })
        .end((err, res) => {
          expect(res.status).to.equal(201);
          done();
        });
    });
  });

  describe('edit order API', () => {
    it('should edit an order', (done) => {
      request(app)
        .put('/api/v1/orders/2')
        .send({
          name: 'sandwich',
          price: '800',
          status: 'completed',
          date: new Date(),
        })
        .end((err, res) => {
          expect(res.status).to.equal(200);
          done();
        });
    });
  });
});
