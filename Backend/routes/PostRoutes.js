const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth')

const post_controller = require("../controllers/PostController");

router.get("/post", auth, post_controller.post_getall);
router.post("/post", auth, post_controller.post_create);
router.get("/post/:id", auth, post_controller.post_getById);
router.put("/post/:id", auth, post_controller.post_update);
router.delete("/post/:id", post_controller.post_delete);

router.get("/post//worker/:id", auth, post_controller.posts_worker);

module.exports = router;