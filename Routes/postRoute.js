const express = require("express");
const router = express.Router();
const postController = require("../Controllers/postController");
const upload = require("../upload/Multer")

router.get("/", postController.allPost);
router.post("/", upload.single("image") ,postController.createPost);
router
 .route("/:id")
 .get(postController.getOnePost)
 .delete(postController.deletePost)
 .put(postController.updatePost);
module.exports = router;
