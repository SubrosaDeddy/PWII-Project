const express = require("express");
const router = express.Router();

const worker_controller = require("../controllers/WorkerController");

router.get("/worker", worker_controller.worker_getall);
router.post("/worker", worker_controller.worker_create);
router.get("/worker/:id", worker_controller.worker_getById);
router.put("/worker/:id", worker_controller.worker_update);
router.delete("/worker/:id", worker_controller.worker_delete);


module.exports = router;