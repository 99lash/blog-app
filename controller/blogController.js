const Blog = require('../models/blog');


const getBlogs = (req, res) => {
  Blog.find().sort({ createdAt: -1 })
    .then(result => {
      res.render('blogs/blogs', { title: 'Blogs', greet: 'All Blogs', blogs: result });
    })
    .catch(error => {
      console.error(error);
    });
}

const getBlog = (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then(result => res.render('blogs/blog-details', { title: result.title, blog: result }))
    .catch(console.error);
}

const createBlogGET = (req, res) => {
  res.render('blogs/create', { title: 'New blog' });
}

const createBlogPOST = (req, res) => {
  const blog = new Blog(req.body);
  blog.save()
    .then(() => res.redirect('/blogs'))
    .catch(console.error);
}

const deleteBlog = (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then(() => {
      res.json({ redirect: '/blogs' });
    })
    .catch(console.error);
}


module.exports = { getBlogs, getBlog, createBlogGET, createBlogPOST, deleteBlog };