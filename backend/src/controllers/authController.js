const asyncHandler = require('../utils/asyncHandler');
const authService = require('../services/authService');
const { getContactError } = require('../utils/authHelpers');

const validateRegistrationFields = (body, fields) => {
  const missing = fields.filter((field) => !body[field]?.toString().trim());
  return missing;
};

const validatePassword = (password) => {
  if (!password || password.length < 6) {
    return 'Password must be at least 6 characters';
  }
  return null;
};

exports.registerTeacher = asyncHandler(async (req, res) => {
  const missing = validateRegistrationFields(req.body, ['name', 'password']);
  if (missing.length > 0) {
    return res.status(400).json({
      success: false,
      message: `Missing required fields: ${missing.join(', ')}`
    });
  }

  const contactError = getContactError(req.body.email, req.body.phone);
  if (contactError) {
    return res.status(400).json({ success: false, message: contactError });
  }

  const passwordError = validatePassword(req.body.password);
  if (passwordError) {
    return res.status(400).json({ success: false, message: passwordError });
  }

  const result = await authService.registerTeacher(req.body);

  res.status(201).json({
    success: true,
    message: 'Teacher registered successfully',
    data: result
  });
});

exports.registerStudent = asyncHandler(async (req, res) => {
  const missing = validateRegistrationFields(req.body, ['name', 'password', 'grade']);
  if (missing.length > 0) {
    return res.status(400).json({
      success: false,
      message: `Missing required fields: ${missing.join(', ')}`
    });
  }

  const contactError = getContactError(req.body.email, req.body.phone);
  if (contactError) {
    return res.status(400).json({ success: false, message: contactError });
  }

  const passwordError = validatePassword(req.body.password);
  if (passwordError) {
    return res.status(400).json({ success: false, message: passwordError });
  }

  const result = await authService.registerStudent(req.body);

  res.status(201).json({
    success: true,
    message: 'Student registered successfully',
    data: result
  });
});

exports.registerParent = asyncHandler(async (req, res) => {
  const missing = validateRegistrationFields(req.body, [
    'parentName',
    'parentPassword',
    'studentName',
    'grade'
  ]);

  if (missing.length > 0) {
    return res.status(400).json({
      success: false,
      message: `Missing required fields: ${missing.join(', ')}`
    });
  }

  const parentContactError = getContactError(req.body.parentEmail, req.body.parentPhone);
  if (parentContactError) {
    return res.status(400).json({ success: false, message: `Parent: ${parentContactError}` });
  }

  const studentContactError = getContactError(req.body.studentEmail, req.body.studentPhone);
  if (studentContactError) {
    return res.status(400).json({ success: false, message: `Student: ${studentContactError}` });
  }

  const passwordError = validatePassword(req.body.parentPassword);
  if (passwordError) {
    return res.status(400).json({ success: false, message: passwordError });
  }

  const result = await authService.registerParentWithStudent(req.body);

  res.status(201).json({
    success: true,
    message: 'Parent and student registered successfully',
    data: result
  });
});

exports.login = asyncHandler(async (req, res) => {
  const { identifier, password, role } = req.body;

  if (!identifier || !password || !role) {
    return res.status(400).json({
      success: false,
      message: 'Identifier (email or phone), password, and role are required'
    });
  }

  const validRoles = ['teacher', 'student', 'parent'];
  if (!validRoles.includes(role)) {
    return res.status(400).json({
      success: false,
      message: 'Role must be teacher, student, or parent'
    });
  }

  const result = await authService.login({ identifier, password, role });

  res.status(200).json({
    success: true,
    message: 'Login successful',
    data: result
  });
});

exports.getMe = asyncHandler(async (req, res) => {
  const profile = await authService.getMe(req.user.id, req.user.role);

  res.status(200).json({
    success: true,
    data: profile
  });
});
