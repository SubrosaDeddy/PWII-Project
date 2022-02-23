const express = require("express");
const router = express.Router();

const report_controller = require("../controllers/ReportController");

router.get("/report", report_controller.report_getall);
router.post("/report", report_controller.report_create);
router.get("/report/:id", report_controller.report_getById);
router.put("/report/:id", report_controller.report_update);
router.delete("/report/:id", report_controller.report_delete);

module.exports = router;