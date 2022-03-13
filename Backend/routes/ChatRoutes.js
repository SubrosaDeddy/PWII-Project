const express = require("express");
const router = express.Router();

const chat_controller = require("../controllers/ChatController");

router.get("/chat", chat_controller.chat_getall);
router.post("/chat", chat_controller.chat_create);
router.get("/chat/:id", chat_controller.chat_getallChats);
router.delete("/chat/:id", chat_controller.chat_delete);

module.exports = router;