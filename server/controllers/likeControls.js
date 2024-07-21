const Blog = require("../model/blogModel");

exports.addLikesOfBlogById = async (req, res) => {
    try {
      const blog = await Blog.findById(req.params.id);

      if (!blog) {
        return res
          .status(404)
          .json({ success: false, message: "Blog not found" });
      }

      blog.likes += 1;
      await blog.save();
      res.status(200).json({
        success: true,
        blog,
      });
      
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
        error: "Server Error in updateLikesOfBlogById",
      });
    }
  };
  
  exports.deleteLikesOfBlogById = async (req, res) => {
    try {
      const blog = await Blog.findById(req.params.id);
      if (!blog) {
        return res
          .status(404)
          .json({ success: false, message: "Blog not found" });
      }
      if (blog.likes === 0) {
        return res
          .status(400)
          .json({ success: false, message: "Blog has no likes" });
      }
  
      blog.likes -= 1;
      await blog.save();
      res.status(200).json({
        success: true,
        blog,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
        error: "Server Error in deleteLikesOfBlogById",
      });
    }
  };