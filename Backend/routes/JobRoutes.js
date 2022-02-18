const express = require("express");
const router = express.Router();

const job_controller = require("../controllers/JobController");

router.get("/job", job_controller.job_getall);
router.post("/job", job_controller.job_create);

module.exports = router;