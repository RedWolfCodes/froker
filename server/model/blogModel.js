const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  introduction: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    default: 0,
  },
  date: {
    type: Date,
    default: Date.now,
    format: "%d-%m-%Y",
    required: true,
  },
  timeToRead: {
    type: Number,
    required: true,
  },
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
