// This is a model of Database
const knex = require('./mysql_db').knex;
const bookshelf = require('bookshelf')(knex);

const Team = bookshelf.Model.extend({
    tableName: 'teams'
});

module.exports = Team;