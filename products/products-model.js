const db = require("../data/dbConfig.js");

module.exports = {
  add,
  find,
  findBy,
  findById,
  update,
  remove
};

function find() {
  return db("products").select("id", "name", "description", "quantity", "price");
}

function findBy(filter) {
  return db("products").where(filter);
}

async function add(name) {
  const [id] = await db("products").insert(name, "id");

  return findById(id);
}

function findById(id) {
  return db("products").where({ id }).first();
}

function update(id, name) {
  return db('products')
    .where('id', Number(id))
    .update(name);
}

function remove(id) {
  return db('products')
    .where('id', Number(id))
    .del();
}