module.exports = (err, req, res, next) => {
  console.error('Error - dummy handler:', err.message);
  res.status(500).json({ success: false, error: 'Something went wrong - dummy' });
};
