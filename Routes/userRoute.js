const express = require("express");
const router = express.Router();
const upload = require("../upload/Multer")
const userController = require("../Controllers/userController");
router.post("/signup", upload.single("image"), userController.signup);
router.post("/login", userController.login);
router.get("/:id", userController.getOne)

module.exports = router;
