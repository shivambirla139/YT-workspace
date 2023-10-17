const asyncHandler = require("express-async-handler");
const Post = require("../models/postModel");

const getPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find({}).populate("userid");
  res.status(200).json(posts);
});


const createPost = asyncHandler(async (req, res) => {
  const { title , content } = req.body;
  if (!content) {
    res.status(400);
    throw new Error("All fields are mandatory !");
  }
  const post = await Post.create({
    title , 
    content,
    userid:req.user.id,
  });

  res.status(201).json(post);
});



module.exports = {
  getPosts,
  createPost,
};