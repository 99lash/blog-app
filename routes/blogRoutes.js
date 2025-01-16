const router = require('express').Router();
const blogController = require('../controller/blogController');

// @route GET /blogs
// @desc  Get all blogs
router.get('/', blogController.getBlogs);

// @route GET /blogs/create
// @desc  Render create-form page
router.get('/create', blogController.createBlogGET);

// @route GET /blogs/:id
// @desc  Get a single blog by id
router.get('/:id', blogController.getBlog);

// @route POST /blogs
// @desc  Create a new blog and redirect to /blogs
router.post('/', blogController.createBlogPOST);

// @route DELETE /blogs/:id
// @desc  Delete a single blog by id
router.delete('/:id', blogController.deleteBlog);


module.exports = router;