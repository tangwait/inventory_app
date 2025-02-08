const db = require("../db/queries");

async function getInventory(req, res) {
    const items = await db.getInventoryFromDB();
    res.render("inventory", { items });
}

async function deleteItem(req, res) {
    const itemToDelete = req.body.id;
    
    await db.deleteItemFromDB(itemToDelete);
    res.redirect("/inventory");
}




module.exports = {
    getInventory,
    deleteItem
};