const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    content: {
      type: String,
      required: [true, "Please add the content "],
    },
    title: {
      type: String,
      required: [true, "Please add the title "],
    },
    userid :{
      type: mongoose.Schema.ObjectId ,
      ref : "User"
    }
  },
    {
      timestaps:true
    }
);

module.exports = mongoose.model("Posts", postSchema);