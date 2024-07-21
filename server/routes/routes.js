const express = require('express');
const router = express.Router();
const blogControls = require('../controllers/blogControls');
const likeControls = require('../controllers/likeControls');


router.get('/blogs', blogControls.getBlogs);
router.get('/blogs/by-index', blogControls.getBlogsByIndex);
router.get('/blogs/hero/top3', blogControls.getTop3Blogs);
router.get('/blogs/:id', blogControls.getBlogById);
router.post('/blogs', blogControls.addBlogs);


router.post('/blogs/:id/like', likeControls.addLikesOfBlogById);
router.delete('/blogs/:id/like', likeControls.deleteLikesOfBlogById);


module.exports = router;
