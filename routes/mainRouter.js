const { Router } = require("express");
const mainRouter = Router();
const homeController = require("../controllers/homeController");
const invController = require("../controllers/invController");

mainRouter.get("/", homeController.loadHome)
mainRouter.get("/inventory", invController.getInventory);

mainRouter.post("/deleteItem", invController.deleteItem);




module.exports = mainRouter;