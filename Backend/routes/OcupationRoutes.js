const express = require("express");
const router = express.Router();

const ocupation_controller = require("../controllers/OcupationController");

router.get("/ocupation", ocupation_controller.ocupation_getall);
router.post("/ocupation", ocupation_controller.ocupation_create);

module.exports = router;