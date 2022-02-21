const express = require("express");
const router = express.Router();

const multimedia_controller = require("../controllers/MultimediaController");

router.get("/multimedia", multimedia_controller.multimedia_getall);
router.post("/multimedia", multimedia_controller.multimedia_create);
router.get("/multimedia/:id", multimedia_controller.multimedia_getById);
router.put("/multimedia/:id", multimedia_controller.multimedia_update);
router.delete("/multimedia/:id", multimedia_controller.multimedia_delete);

module.exports = router;