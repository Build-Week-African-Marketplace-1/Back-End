exports.up = function(knex) {
    return knex.schema.dropTable('users', users => {
        users.increments();    
        users
          .string('username', 255)
          .notNullable()
          .unique();
        users.string('password', 255).notNullable();
        users.string('email').notNullable();
      })
      .dropTable('products', products => {
        products.increments();    
        products.string('name', 255).notNullable();       
        products.string('description', 255).notNullable();
        products.string('quantity').notNullable();
        products.string('price', 255).notNullable();
      });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('products').dropTableIfExists('users');
};