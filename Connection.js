const mongoose = require("mongoose");

const url = `mongodb+srv://${process.env.DBUsername}:${process.env.DBPassword}@mernclass.miibvmd.mongodb.net/?retryWrites=true&w=majority`
mongoose
 .connect(url)
 .then(() => {
  console.log("Connected to MongoDB ✅");
 })
 .catch((error) => {
  console.log("Couldnot connect to mongoDB", error);
 });
