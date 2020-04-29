
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {id: 1, name: 'Animal Products', description: 'Livestock', quantity: '3', price: '50'},
        {id: 2, name: 'Beans', description: 'Beans', quantity: '10', price: '15'},
        {id: 3, name: 'Fruits', description: 'Mangoes', quantity: '7', price: '23'}
      ]);
    });
};
