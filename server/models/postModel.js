const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    content: {
      type: String,
      required: [true, "Please add the content "],
    },
  }
);

module.exports = mongoose.model("Posts", postSchema);