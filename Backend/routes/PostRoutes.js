const express = require("express");
const router = express.Router();

const post_controller = require("../controllers/PostController");

router.get("/post", post_controller.post_getall);
router.post("/post", post_controller.post_create);
router.get("/post/:id", post_controller.post_getById);
router.put("/post/:id", post_controller.post_update);
router.delete("/post/:id", post_controller.post_delete);

router.get("/post//worker/:id", post_controller.report_posts_worker);

module.exports = router;