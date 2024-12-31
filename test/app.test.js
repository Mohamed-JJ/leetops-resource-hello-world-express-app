// test/app.test.js
// import request from 'supertest';
// import app from '../app.js'; // Include the .js extension


const request = require('supertest');
const app = require('../app.js');

describe('GET /', () => {
    it('should return Hello World!', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Hello World!');
    });
});