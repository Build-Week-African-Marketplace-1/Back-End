const request = require("supertest");
const server = require("../api/server.js");
const db = require("../data/dbConfig.js");
const bcrypt = require("bcryptjs");

describe("server", function() {
  describe("register", function() {
    beforeEach(async () => {
      await db("users").truncate();
    });    
    it("should register", function() {
      return request(server)
        .post("/api/auth/register")
        .send({ username: "AAA", password: "abc", email: "" })
        .then(res => {
          expect(res.body.username).toEqual("AAA");
          expect(res.body.password).toBeTruthy();
        });
    });
  });

  describe("login", () => {
    it("should return status 200", async () => {
      const res = await request(server)
        .post("/api/auth/login")
        .send({ username: "AAA", password: "abc" });
      expect(res.status).toBe(200);
    });
    it("should return a token", async () => {
      const res = await request(server)
        .post("/api/auth/login")
        .send({ username: "AAA", password: "abc" });
      expect(res.body.token).toBeTruthy();
    });
    it("should return json", async () => {
      const res = await request(server)
        .post("/api/auth/login")
        .send({ username: "AAA", password: "abc" });
      expect(res.type).toBe("application/json");
    });
  });
});
