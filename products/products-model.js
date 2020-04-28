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
  return db("products").select("id", "category", "sub_category", "product");
}

function findBy(filter) {
  return db("products").where(filter);
}

async function add(product) {
  const [id] = await db("products").insert(product, "id");

  return findById(id);
}

function findById(id) {
  return db("products").where({ id }).first();
}

function update(id, product) {
  return db('products')
    .where('id', Number(id))
    .update(product);
}

function remove(id) {
  return db('products')
    .where('id', Number(id))
    .del();
}