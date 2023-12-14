const mongoose = require("mongoose");

const PostModel = new mongoose.Schema({
  photo: {
    data: Buffer,
    contentType: String,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  category: String,
  purpose: String,
  contact: {
    type: Number,
    required: true,
  },
  place: {
    type: String,
    required: true,
  },
});

const Post = mongoose.model("Post", PostModel);

module.exports = Post;
