const express = require("express");
const router = express.Router();
const {
  createPost,
  getAllPost,
} = require("../../contollers/postControllers/postController");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.route("/createpost").post(upload.single("photo"), createPost);
router.route("/posts").get(getAllPost);

module.exports = router;
