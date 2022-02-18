const express = require("express");
const router = express.Router();

const comment_controller = require("../controllers/CommentController");
const { route } = require("./UserRoutes");

router.get("/comment", comment_controller.comment_getall);
router.post("/comment", comment_controller.comment_create);

module.exports = router;