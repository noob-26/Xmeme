const express = require("express");
const router = express.Router();

//Posts
const Post = require("../../models/Post");

// GET METHOD TO GET MEMES
router.get("/", (req, res) => {
  Post.find()
    .sort({time: -1})
    .then((posts) => {
        let len = Math.min(100, posts.length);
        res.json(posts.slice(0, len));
    });
});

// POST METHOD
// '/memes' to post a meme
router.post("/", (req, res) => {
  const newPost = new Post({
    name: req.body.name,
    url: req.body.url,
    caption: req.body.caption,
    time: String(new Date().toLocaleTimeString()),
  });

  newPost.save().then((item) => res.json({id: item._id}));
});

module.exports = router;
