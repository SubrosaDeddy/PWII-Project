const express = require("express");
const router = express.Router();

const device_controller = require("../controllers/DeviceController");

router.get("/device", device_controller.device_getall);
router.post("/device", device_controller.device_create);

module.exports = router;