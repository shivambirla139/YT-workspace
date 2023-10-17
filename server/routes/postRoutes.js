const express = require("express");
const router = express.Router();
const {
  getPosts,
  createPost
} = require("../controllers/postController");
const validateToken = require("../middleware/validateTokenHandler");


router.use(validateToken);
router.route("/").get(getPosts).post(createPost);

module.exports = router;