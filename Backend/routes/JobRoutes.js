const express = require("express");
const router = express.Router();

const job_controller = require("../controllers/JobController");

router.get("/job", job_controller.job_getall);
router.post("/job", job_controller.job_create);
router.get("/job/:id", job_controller.job_getById);
router.put("/job/:id", job_controller.job_update);
router.delete("/job/:id", job_controller.job_delete);

module.exports = router;