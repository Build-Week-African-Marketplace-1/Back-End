// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/auth.db3'      
    },
    migrations: {
      directory: './data/migrations',
      tableName: 'add_users_table',
      tableName: 'add_products_table'
    },
    seeds: { directory: './data/seeds' }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './data/migrations',
     
    },
    seeds: { 
      directory: './data/seeds' }
  }

};
