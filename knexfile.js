// Update with your config settings.

module.exports = {
  development:  {
    client: 'mysql2',
    connection: {
      host: "localhost",
      database: 'db_socket',
      user:     'root',
      password: 'abc123'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './migrations'
    }
  }

};
