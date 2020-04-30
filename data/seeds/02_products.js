
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {id: 1, name: 'Animal Products', market_location: 'farm', description: 'Livestock', quantity: '3', price: '50', user_id: 1},
        {id: 2, name: 'Beans', market_location: 'farm', description: 'Beans', quantity: '10', price: '15', user_id: 1},
        {id: 3, name: 'Fruits', market_location: 'orchard', description: 'Mangoes', quantity: '7', price: '23', user_id: 1},
        {id: 4, name: 'Rug', market_location: 'Bizaar', description: 'newly woven carpet!', quantity: '3', price: '50', user_id: 1},
        {id: 5, name: 'Loafers', market_location: 'Bizaar', description: 'very sturdy for working!', quantity: '12', price: '15', user_id: 1},
        {id: 6, name: 'Barley Seeds', market_location: 'farm', description: 'Ready for Planting Season!', quantity: '55', price: '6', user_id: 1},
        {id: 7, name: 'Sunflower Seeds', market_location: 'farm', description: 'Ready for Planting Season', quantity: '65', price: '5', user_id: 1},
        {id: 8, name: 'Hats', market_location: 'Bizaar', description: 'Great for keeping sun out!', quantity: '15', price: '8', user_id: 1},
        
      ]);
    });
};
