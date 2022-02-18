const express = require("express");
const router = express.Router();

const locality_controller = require("../controllers/LocalitiesController");

router.get("/locality", locality_controller.locality_getall);
router.post("/locality", locality_controller.locality_create);

module.exports = router;