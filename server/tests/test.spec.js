import request from 'supertest';
import { expect } from 'chai';
import app from '../app';
import db from '../config/dbConfig';
import createTables from '../models/index';


before(async () => {
  const client = await db.connect();
  const query = 'DROP TABLE IF EXISTS orders, users, menu;';
  // drop tables
  await client.query(query);
  await createTables();
});

describe('Api Test', () => {
  /*describe('create order API', () => {
    it('should create order', (done) => {
      request(app)
        .post('/api/v1/orders')
        .send({
          quantity: '3',
          menuId: '2',
          status: 'New',
        })
        .end((err, res) => {
          expect(res.status).to.equal(201);
          done();
        });
    });
  });

  describe('get all menu API', () => {
    it('should return all the menu', (done) => {
      request(app)
        .get('/api/v1/menu')
        .end((err, res) => {
          expect(res.status).to.equal(200);
          done();
        });
    });
  });

  describe('create menu API', () => {
    it('should create menu', (done) => {
      request(app)
        .post('/api/v1/menu')
        .send({
          name: 'rice',
          price: '800',

        })
        .end((err, res) => {
          expect(res.status).to.equal(201);
          done();
        });
    });
  }); */

  describe('signup a new user', () => {
    it('should signup a user', (done) => {
      request(app)
        .post('/api/v1/auth/signup')
        .send({
          firstname: 'Elohor',
          lastname: 'Faith',
          email: 'elopriceless@gmail.com',
          password: 'nectar',
        })
        .end((err, res) => {
          expect(res.status).to.equal(201);
          expect(res.body.message).to.equal('Successful signup');
          expect(res.body.token).to.not.be.null;
          done();
        });
    });
  });


  describe('login a new user', () => {
    it('should login a user', (done) => {
      request(app)
        .post('/api/v1/auth/login')
        .send({
          email: 'elopriceless@gmail.com',
          password: 'nectar',
        })
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body.message).to.equal('Successful Login');
          expect(res.body.token).to.not.be.null;
          done();
        });
    });
  });
});
