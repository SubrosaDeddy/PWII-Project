const express = require("express");
const router = express.Router();

const publication_controller = require("../controllers/PublicationController");

router.get("/publication", publication_controller.publication_getall);
router.post("/publication", publication_controller.publication_create);
router.get("/publication/:id", publication_controller.publication_getById);
router.put("/publication/:id", publication_controller.publication_update);
router.delete("/publication/:id", publication_controller.publication_delete);

module.exports = router;