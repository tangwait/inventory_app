const pool = require("./pool");

async function getInventoryFromDB() {
    const { rows } = await pool.query("SELECT * FROM items");
    return rows;
}





module.exports = {
    getInventoryFromDB
}