// This defines database connection

const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'root66',
        database: 'nodejs',
        charset: 'utf8'
    }
});

module.exports.knex = knex;