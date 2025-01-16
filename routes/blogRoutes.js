const router = require('express').Router();
const blogController = require('../controller/blogController');

// @route GET /blogs
// @desc  Get all blogs
router.get('/', blogController.getBlogs);

// @route GET /blogs/create
// @desc  Render create-form page
router.get('/create', blogController.renderCreateBlog);

// @route GET /blogs/:id
// @desc  Get a single blog by id
router.get('/:id', blogController.getBlog);

// @route POST /blogs
// @desc  Create a new blog and redirect to /blogs
router.post('/', blogController.createBlog);

// @route GET /blogs/:id/edit
// @desc  Render update-form page
router.get('/:id/edit', blogController.renderUpdateBlog);

// @route PUT /blogs/:id
// @desc  Modify an existing blog and redirect to /blogs/:id
router.put('/:id', blogController.updateBlog);

// @route DELETE /blogs/:id
// @desc  Delete a single blog by id
router.delete('/:id', blogController.deleteBlog);

module.exports = router;