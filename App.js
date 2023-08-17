const express = require("express");
const app = express();
const dotenv = require("dotenv");
// const user = require("./Models/userModel");
const userRoute = require("./Routes/userRoute");
const postRoute = require("./Routes/postRoute");
const cors =require("cors")
dotenv.config({ path: "./.env" });

require("./Models/postModel")
require("./Models/userModel")
require("./Connection");

app.use(cors());
app.use(express.json());
app.use(express.static("images"))
app.use("/user", userRoute);
app.use("/post", postRoute);

app.listen(8080, () => {
 console.log("connected server port of 8000");
});
