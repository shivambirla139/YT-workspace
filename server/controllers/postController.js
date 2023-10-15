const asyncHandler = require("express-async-handler");
const Post = require("../models/postModel");

const getPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find({});
  res.status(200).json(posts);
});

//@desc Create New contact
//@route POST /api/contacts
//@access private
const createPost = asyncHandler(async (req, res) => {
  console.log("The request body is :", req.body);
  const { title , content } = req.body;
  if (!content) {
    res.status(400);
    throw new Error("All fields are mandatory !");
  }
  const post = await Post.create({
    title , 
    content
  });

  res.status(201).json(req.body);
});

//@desc Get contact
//@route GET /api/contacts/:id
//@access private
// const getContact = asyncHandler(async (req, res) => {
//   const contact = await Contact.findById(req.params.id);
//   if (!contact) {
//     res.status(404);
//     throw new Error("Contact not found");
//   }
//   res.status(200).json(contact);
// });


module.exports = {
  getPosts,
  createPost,
};