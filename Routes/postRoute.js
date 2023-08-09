const express = require("express");
const router = express.Router();
const postController = require("../Controllers/postController");
router.get("/", postController.allPost);
router.post("/", postController.createPost);
router
 .route("/:id")
 .get(postController.getOnePost)
 .delete(postController.deletePost)
 .put(postController.updatePost);
module.exports = router;
