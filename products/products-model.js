const db = require("../data/dbConfig.js");

module.exports = {
  add,
  find,
  findBy,
  findById,
};

function find() {
  return db("products").select("id", "category", "sub_category", "product");
}

function findBy(filter) {
  return db("products").where(filter);
}

async function add(user) {
  const [id] = await db("products").insert(user, "id");

  return findById(id);
}

function findById(id) {
  return db("products").where({ id }).first();
}