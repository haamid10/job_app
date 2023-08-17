const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
 Titlbloge: {
  type: String,
  required: true,
 },
 blogDesc: {
  type: String,
  required: true,
 },
 jobType: {
    type: String,
    enum: ["Full-Time", "Part-Time", "Internship"],
 },
 experience: {
    type: String,
    enum: ["senior", "junior", "Expert"],
 },
 Location: {
    type: "String",
    enum: ["Onsite" , "Remote"]
 },

 user: {
  type: mongoose.Types.ObjectId,
  ref: "User",
 },
});

const postModel = mongoose.model("Post", postSchema);
module.exports = postModel;
