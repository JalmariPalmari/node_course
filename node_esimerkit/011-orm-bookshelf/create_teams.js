const knex = require('./mysql_db').knex;
const Team = require('./team');

let teams = [
    {
        "name"  : "Chelsea",
        "played": "7",
        "won"   : "5",
        "drawn" : "1",
        "lost"  : "1"
    },
    {
        "name"  : "Manchester City",
        "played": "7",
        "won"   : "5",
        "drawn" : "0",
        "lost"  : "2"
    },
    {
        "name"  : "Arsenal",
        "played": "7",
        "won"   : "4",
        "drawn" : "1",
        "lost"  : "2"
    },
    {
        "name"  : "Everton",
        "played": "7",
        "won"   : "3",
        "drawn" : "3",
        "lost"  : "1"
    },
    {
        "name"  : "Leicester",
        "played": "7",
        "won"   : "3",
        "drawn" : "3",
        "lost"  : "1"
    },
    {
        "name"  : "Liverpool",
        "played": "7",
        "won"   : "4",
        "drawn" : "2",
        "lost"  : "1"
    }
];

async function create_teams() {

    try {

        for (let team of teams)
        {
            let val = await Team.forge(
                {'name': team.name, 'won': team.won, 'lost': team.lost, 'drawn': team.drawn}).save();
            console.log("Saved: " + JSON.stringify(val.attributes));
        }
        } catch (e) {

        console.log(`Error saving: ${e}`);
    } finally {

        knex.destroy();
    }
}

create_teams();