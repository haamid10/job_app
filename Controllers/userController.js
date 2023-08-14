const users = require("../Models/userModel");
const bcrypt = require("bcrypt");
const jwt= require('jsonwebtoken')
exports.signup = async (req, res) => {
 try {
  const findUser = await users.findOne({ email: req.body.email });
  // if user is exist
  if (findUser) {
   return res.status(400).json({ message: "Email is already exists" });
  }
  // password must confirm
  if (req.body.password !== req.body.confirmPassword) {
   return res.status(400).json({ message: "Password is not matched" });
  }

  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  req.body.password = hashedPassword;

  req.body.image = req.file.filename;

  console.log(req.body)
     //save
  await users.create(req.body);
  res.status(200).json({ message: "User is created" });
 } catch (error) {
  return res.status(400).json({ error });
 }
};

exports.login = async (req, res) => {
 try {
  const { email, password } = req.body;
  const findUser = await users.findOne({ email });
  // if email is exists
  if (!findUser) {
   return res.status(400).json({ message: "email is invaild" });
  }
  // if password matches
  const decryptedPassword = await bcrypt.compare(password, findUser.password);
  if (decryptedPassword == false) {
   return res.status(400).json({ message: "Incorrect password" });
  }
//   Create token
const token = jwt.sign({
    id: findUser._id,
    email: findUser.email, 
},  process.env.JWTSECRET, {expiresIn: "2 days"})
  res.status(200).json({ message: "Successfully Login" , token });
 } catch (error) {
  res.status(400).json({ error });
 }
};

exports.getOne = async (req, res) => { 
try {
  const {id} = req.params;
  const findUser= await users.findById(id);
  const userProfileFile = {
    id: findUser.id,
    email: findUser.email,
    image: findUser.image
  }
  res.status(200).json({ message: userProfileFile})
} catch (error) {
  res.status(400).json(error)
}
 
}