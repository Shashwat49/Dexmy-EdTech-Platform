module.exports = (err, req, res, next) => {
  console.error('Error:', err.message);

  const statusCode = err.statusCode || 500;
  const message = err.statusCode ? err.message : 'Something went wrong';

  res.status(statusCode).json({
    success: false,
    message
  });
};
