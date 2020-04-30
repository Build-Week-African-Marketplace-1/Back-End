const request = require("supertest");
const server = require("../api/server.js");
const db = require("../data/dbConfig.js");
const bcrypt = require("bcryptjs");

describe("server", function() {
  describe("register", function() {
    beforeEach(async () => {
      await db("products").truncate();
    });    
    it("should register", function() {
      return request(server)
        .post("/api/products")
<<<<<<< HEAD
        .send({ name: "AAA", market_location: "store", description: "abc", quantity: "abc@l.com", price:"10", user_id: 1 })
=======
        .send({ name: "AAA", market_location: "store", description: "abc", quantity: "abc@l.com", price:"10", user_id: "1" })
>>>>>>> fab2552780a2e8f781bf5daca8b6f4abbe195922
        .then(res => {
          expect(res.body.name).toEqual("AAA");
          expect(res.body.description).toBeTruthy();
          expect(res.body.quantity).toBeTruthy();
          expect(res.body.price).toBeTruthy();
        });
    });
  });

  describe("login", () => {
    it("should return status 200", async () => {
      const res = await request(server)
        .get("/api/products")
        .send({ name: "AAA", description: "abc", quantity: "abc@l.com", price:"10" });
      expect(res.status).toBe(200);
    });
    
    it("should return json", async () => {
      const res = await request(server)
        .post("/api/products")
        .send({ name: "AAA", description: "abc", quantity: "abc@l.com", price:"10" });
      expect(res.type).toBe("application/json");
    });
  });
});
