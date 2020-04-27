
exports.up = function(knex) {
    return knex.schema.createTable('products', products => {
        products.increments();    
        products
          .string('category', 255)
          .notNullable()          
        products.string('sub_category', 255).notNullable();
        products.string('product', 255).notNullable();   
      });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('products');
};
