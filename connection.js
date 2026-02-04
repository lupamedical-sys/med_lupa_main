const { Pool } = require('pg');

// const pool = new Pool({
//     user: 'postgres',
//     password: 'E1000!_Fde987',
//     port: 5432,
//     database: 'med_lupa',
//     ssl: false,
// });

const pool = new Pool({
  connectionString: 'postgresql://postgres.zdomkedllpcjnqtzmbut:MedE1000Efg577@aws-1-ap-southeast-2.pooler.supabase.com:6543/postgres',
  ssl: {
    rejectUnauthorized: false
  }
});

module.exports = pool;
