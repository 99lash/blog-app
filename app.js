const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

const app = express();
const PORT = process.env.PORT || 5001;
const dbURI = process.env.dbURI;

mongoose
  .connect(dbURI)
  .then(() => {
    console.log('Connected to database');
    app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
  })
  .catch(err => {
    console.log('Could not connect to database');
    console.error(err);
  });

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// middleware logger
app.use((req, res, next) => {
  console.log('---------------------------------------')
  const startTime = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - startTime;
    console.log(`${req.method} ${req.path} - ${duration}ms`);
  })
  next();
});


app.get('/', (req, res) => {
  res.render('index', { title: 'Home', greet: 'Home page' });
});

// routes
app.use('/blogs', blogRoutes);

app.use((req, res) => {
  res.status(404).render('404', { title: '404', message: 'Ooops, page not found!' });
});

app.use((err, req, res) => {
  console.error(err);
  res.status(500).send('Something went wrong.');
});

module.exports = app;