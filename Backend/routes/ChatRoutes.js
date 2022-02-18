const express = rquire("express");
const router = express.Router();

const chat_controller = require("../controllers/ChatController");

router.get("/chat", chat_controller.chat_getall);
router.post("/chat", chat_controller.chat_create);

module.exports = router;