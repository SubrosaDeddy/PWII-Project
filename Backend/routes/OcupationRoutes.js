const express = require("express");
const router = express.Router();

const ocupation_controller = require("../controllers/OcupationController");

router.get("/ocupation", ocupation_controller.ocupation_getall);
router.post("/ocupation", ocupation_controller.ocupation_create);
router.get("/ocupation/:id", ocupation_controller.ocupation_getById);
router.put("/ocupation/:id", ocupation_controller.ocupation_update);
router.delete("/ocupation/:id", ocupation_controller.ocupation_delete);

router.get("/ocupation/name/:id", ocupation_controller.ocupation_getByName);

module.exports = router;