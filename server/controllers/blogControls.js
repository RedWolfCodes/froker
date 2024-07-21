const Blog = require("../model/blogModel");

exports.getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json({
      success: true,
      blogs,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: "Server Error getting all blogs",
    });
  }
};

exports.getBlogsByIndex = async (req, res) => {
  try {

    const startIndex = parseInt(req.query.startIndex);
    const endIndex = parseInt(req.query.endIndex);

    console.log("startIndex:", startIndex);
    console.log("endIndex:", endIndex);

    if (startIndex < 0 || endIndex < 0) {
      return res.status(400).json({ success: false, message: "Invalid index" });
    }

    if (startIndex === undefined || endIndex === undefined) {
        return res.status(400).json({ success: false, message: "Missing index" });
    }

    const blogs = await Blog.find()
      .skip(startIndex)
      .limit(endIndex - startIndex);

    res.status(200).json({
      success: true,
      blogs,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: "Server Error while getting blogs by index",
    });
  }
};

exports.getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res
        .status(404)
        .json({ success: false, message: "Blog not found" });
    }
    res.status(200).json({
      success: true,
      blog,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: "Server Error while getting blog by id",
    });
  }
};

exports.getTop3Blogs = async (req, res) => {
  try {
    console.log("Fetching top 3 blogs sorted by likes...");
    let blogs = await Blog.find({}).sort({ likes: -1 });
    if (blogs.length > 3) {
      blogs = blogs.slice(0, 3);
    }
    console.log("Fetched blogs:", blogs);
    res.status(200).json({
      success: true,
      blogs,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: "Server Error while getting top 3 blogs",
    });
  }
};

exports.addBlogs = async (req, res) => {
    try {
      const blogs = await Blog.insertMany(req.body);
      res.status(201).json({
        success: true,
        blogs,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
        error: "Server Error in addBlogs",
      });
    }
  };
  
