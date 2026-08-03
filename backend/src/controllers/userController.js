exports.getAllUsers = (req, res) => {
  res.status(200).json({ success: true, data: [], message: 'Get all users - dummy' });
};

exports.getUserById = (req, res) => {
  res.status(200).json({ success: true, data: null, message: `Get user ${req.params.id} - dummy` });
};

exports.createUser = (req, res) => {
  res.status(201).json({ success: true, data: null, message: 'Create user - dummy' });
};

exports.updateUser = (req, res) => {
  res.status(200).json({ success: true, data: null, message: `Update user ${req.params.id} - dummy` });
};

exports.deleteUser = (req, res) => {
  res.status(200).json({ success: true, data: {}, message: `Delete user ${req.params.id} - dummy` });
};
