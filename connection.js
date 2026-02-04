const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    password: 'E1000!_Fde987',
    host: 'localhost',
    port: 5432,
    database: 'med_lupa',
    ssl: false,
});

module.exports = pool;