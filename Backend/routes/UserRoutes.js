const express = require("express");
const router = express.Router();



const user_controller = require("../controllers/UserController");

router.get("/user", user_controller.user_getall);
router.post("/user", user_controller.user_create);
router.get("/user/:id", user_controller.user_getById);
router.put("/user/:id", user_controller.user_update);
router.delete("/user/:id", user_controller.user_delete);

router.get("/user/address/:id", user_controller.user_localities);

module.exports = router;