const express = require("express");
const router = express.Router();

const categories_controller = require("../controllers/Categories_ReportController");

router.get("/category", categories_controller.categories_getall);
router.post("/category", categories_controller.categories_create);
router.get("/category/:id", categories_controller.categories_getByTitle);
router.put("/category/:id", categories_controller.categories_update);
router.delete("/category/:id", categories_controller.categories_delete);

module.exports = router;