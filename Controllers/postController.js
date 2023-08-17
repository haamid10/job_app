const posts = require("../Models/postModel");

exports.createPost = async (req, res) => {
 try {
  await posts.create(req.body);
// console.log(req.body);
  res.status(200).json({ message: "post is created successfully", data: req.body });
 } catch (error) {
  res.status(200).json({ error });
 }
};
exports.allPost = async (req, res) => {
    try {
        const findPost = await posts.find({});
        res.status(200).json({ message: findPost });
        
    } catch (error) {
        res.status(400).json(error.message)
    }

};

exports.getOnePost = async (req, res) => {
     try {
        const { id } = req.params;
        const findPost = await posts.findById(id).populate("user");
        res.status(200).json({ message: findPost });
     } catch (error) {
        return  res.status(400).json(error.message) 
     }

};

exports.updatePost =async (req, res) => {
    try {
        const { id}= req.params;
        const updatePost= await posts.findByIdAndUpdate({id: id})

        await posts.create(req.body)
        res.status(200).json("updated succesfully",updatePost)
    } catch (error) {
        return  res.status(400).json(error.message);
    }
   
    

};

exports.deletePost = (req, res) => {};
