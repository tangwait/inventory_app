const pool = require("./pool");

async function getInventoryFromDB() {
    const { rows } = await pool.query("SELECT * FROM items");
    return rows;
}

async function addItemToDB(name, creator) {
    const query = `
    INSERT INTO items (name, creator)
    VALUES ($1, $2)
    `;
    await pool.query(query, [name, creator]);
}

async function deleteItemFromDB(itemId) {
    console.log("Attempting to delete item with ID:", itemId);
    const result = await pool.query("DELETE FROM items WHERE id = $1", [itemId]);
    
    if (result.rowCount > 0) {
        console.log("Item deleted successfully.");
    } else {
        console.log("No item found with the given ID.");
    }
}


module.exports = {
    getInventoryFromDB,
    addItemToDB,
    deleteItemFromDB
}