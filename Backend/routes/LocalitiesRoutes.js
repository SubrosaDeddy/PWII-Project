const express = require("express");
const router = express.Router();

const locality_controller = require("../controllers/LocalitiesController");

router.get("/locality", locality_controller.locality_getall);
router.post("/locality", locality_controller.locality_create);
router.get("/locality/:id", locality_controller.locality_getById);
router.put("/locality/:id", locality_controller.locality_update);
router.delete("/locality/:id", locality_controller.locality_delete);

router.get("/locality//:id", locality_controller.locality_getByName);
module.exports = router;