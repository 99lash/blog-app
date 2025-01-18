const blogMiddleware = (req, res, next) => {
  const startTime = Date.now();
  console.log('---------------------------------------')
  res.on('finish', () => {
    const duration = Date.now() - startTime;
    console.log(`${req.method} ${req.originalUrl}\t - `, duration, 'ms');
  });
  next();
}

module.exports = { blogMiddleware };