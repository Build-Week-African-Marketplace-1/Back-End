
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {id: 1, category: 'Animal Products', sub_category: 'Livestock', product: 'Beef'},
        {id: 2, category: 'Beans', sub_category: 'Beans', product: 'Red Beans'},
        {id: 3, category: 'Fruits', sub_category: 'Mangoes', product: 'Mangoes Ngowe'}
      ]);
    });
};
