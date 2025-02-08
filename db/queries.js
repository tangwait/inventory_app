async function getInventoryFromDB() {
    const rows = await pool.query("SELECT * FROM inventory");
    return rows;
}





module.exports = {
    getInventoryFromDB
}