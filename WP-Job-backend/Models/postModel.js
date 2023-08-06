const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
 jobTitle: {
  type: String,
  required: true,
 },
 jobDesc: {
  type: String,
  required: true,
 },

 user: {
  type: mongoose.Types.ObjectId,
  ref: "User",
 },
});

const postModel = mongoose.model("Post", postSchema);
module.exports = postModel;
