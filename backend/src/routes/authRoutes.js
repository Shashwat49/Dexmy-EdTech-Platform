const express = require('express');
const {
  registerTeacher,
  registerStudent,
  registerParent,
  login,
  getMe
} = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register/teacher', registerTeacher);
router.post('/register/student', registerStudent);
router.post('/register/parent', registerParent);
router.post('/login', login);
router.get('/me', protect, getMe);

module.exports = router;
