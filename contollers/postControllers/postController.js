const Post = require("../../models/post");
const fs = require("fs");
exports.createPost = async (req, res) => {
  const { description, price, category, purpose, contact, place } = req.body;
  const filename = req.file && req.file.filename;

  try {
    const newPost = await Post.create({
      description,
      price,
      category,
      purpose,
      contact,
      place,
      photo: filename
        ? {
            data: fs.readFileSync("uploads/" + filename),
            contentType: "image/png",
          }
        : null,
    });
    res.status(201).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.getAllPost = async (req, res) => {
  try {
    const allPost = await Post.find();
    res.status(200).json(allPost);
  } catch (err) {
    res.status(400).json(err);
  }
};
