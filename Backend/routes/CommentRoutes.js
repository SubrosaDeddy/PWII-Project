const express = require("express");
const router = express.Router();

const comment_controller = require("../controllers/CommentController");

router.get("/comment", comment_controller.comment_getall);
router.post("/comment", comment_controller.comment_create);
router.get("/comment/:id", comment_controller.comment_getallByPost);
router.put("/comment/:id", comment_controller.comment_update);
router.delete("/comment/:id", comment_controller.comment_delete);

module.exports = router;