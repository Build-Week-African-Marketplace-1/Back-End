const request = require("supertest");
const server = require("../api/server.js");
const db = require("../data/dbConfig.js");

describe('GET /users', () => {
    it('400', () => {
        return request(server).get('/api/users')
        .then(res => {
            expect(res.status).toBe(400);
        })
    })

    it('list of users on successful login with token', async () => {
        res = await request(server)
          .post('/api/auth/register')
          .send({
            username: 'maple6',
            password: 'getit',
            email: 'getit@maple.com',    });  expect(res.status).toEqual(201);
        res = await request(server)
          .post('/api/auth/login')
          .send({
            username: 'maple6',
            password: 'getit',
            email: 'getit@maple.com',    });
        expect(res.status).toEqual(200);
        const token = res.body.token;
        expect(token.length).toBeGreaterThan(20);   
      })
});

