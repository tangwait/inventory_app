const db = require("../db/queries");

async function getInventory(req, res) {
    const items = await db.getInventoryFromDB();
    res.render("inventory", { items });
}






module.exports = {
    getInventory
};