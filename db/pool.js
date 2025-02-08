const { Pool } = require("pg");

module.exports = new Pool({
    host: "localhost",
    user: "tangwai",
    password: "tangwai-examples",
    database: "inventory_db",
    port: 5432,
})