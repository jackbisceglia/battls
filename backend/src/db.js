const Pool = require("pg").Pool;
const pool = new Pool({
    user: "jackb",
    password: "jackb1105",
    host: "localhost",
    port: 5432,
    database: "battls"
})

module.exports = pool;