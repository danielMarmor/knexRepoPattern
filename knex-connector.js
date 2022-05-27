const knex = require('knex');
// knex connector
const connectedKnex = knex({
    client: "sqlite3",
    connection: {
        filename: "knex-company.db"
    }
});

module.exports = connectedKnex;