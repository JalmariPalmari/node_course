const knex = require('./mysql_db').knex;
const Team = require('./team');

async function find_all_teams() {
    try {
        let results = await Team.fetchAll();
        console.log(results.toJSON());
    } catch (e) {
        console.log(`Error fetching: ${e}`);
    } finally {
        knex.destroy();
    }
}

find_all_teams();