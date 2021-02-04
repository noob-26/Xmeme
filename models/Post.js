const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//schema for the individual posts
const PostSchema = new Schema({
  time: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },

  url: {
    type: String,
    required: true,
  },

  caption: {
    type: String,
    default: "",
  },
});

module.exports = Post = mongoose.model("post", PostSchema);
