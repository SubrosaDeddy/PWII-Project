const express = require("express");
const router = express.Router();

const worker_controller = require("../controllers/WorkerController");

router.get("/worker", worker_controller.worker_getall);
router.post("/worker", worker_controller.worker_create);

module.exports = router;