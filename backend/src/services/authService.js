const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { pool } = require('../config/database');
const authQueries = require('../models/authModel');
const config = require('../config/config');
const { formatContact, formatIdentifier } = require('../utils/authHelpers');

const SALT_ROUNDS = 10;

const hashPassword = (password) => bcrypt.hash(password, SALT_ROUNDS);
const comparePassword = (password, hash) => bcrypt.compare(password, hash);

const generateToken = (user) =>
  jwt.sign(
    { id: user.id, email: user.email, phone: user.phone, role: user.role },
    config.jwt.secret,
    { expiresIn: config.jwt.expiresIn }
  );

const getProfileByRole = async (userId, role) => {
  const queryMap = {
    teacher: authQueries.getTeacherProfile,
    student: authQueries.getStudentProfile,
    parent: authQueries.getParentWithStudents
  };

  const query = queryMap[role];
  if (!query) return null;

  const result = await pool.query(query, [userId]);
  return result.rows[0] || null;
};

const checkContactAvailability = async ({ email, phone }) => {
  if (email) {
    const existingEmail = await pool.query(authQueries.findByEmail, [email]);
    if (existingEmail.rows.length > 0) {
      const error = new Error('Email already registered');
      error.statusCode = 409;
      throw error;
    }
  }

  if (phone) {
    const existingPhone = await pool.query(authQueries.findByPhone, [phone]);
    if (existingPhone.rows.length > 0) {
      const error = new Error('Phone number already registered');
      error.statusCode = 409;
      throw error;
    }
  }
};

const registerTeacher = async ({ name, email, password, phone, subject, qualification, experienceYears }) => {
  const contact = formatContact({ email, phone });
  await checkContactAvailability(contact);

  const passwordHash = await hashPassword(password);
  const client = await pool.connect();

  try {
    await client.query('BEGIN');

    const userResult = await client.query(authQueries.createUser, [
      name.trim(),
      contact.email,
      passwordHash,
      'teacher',
      contact.phone
    ]);

    const user = userResult.rows[0];

    await client.query(authQueries.createTeacherProfile, [
      user.id,
      subject || null,
      qualification || null,
      experienceYears || 0
    ]);

    await client.query('COMMIT');

    const profile = await getProfileByRole(user.id, 'teacher');
    const token = generateToken(user);

    return { user: profile, token };
  } catch (error) {
    await client.query('ROLLBACK');
    throw error;
  } finally {
    client.release();
  }
};

const registerStudent = async ({ name, email, password, phone, grade, dateOfBirth, school, address }) => {
  const contact = formatContact({ email, phone });
  await checkContactAvailability(contact);

  const passwordHash = await hashPassword(password);
  const client = await pool.connect();

  try {
    await client.query('BEGIN');

    const userResult = await client.query(authQueries.createUser, [
      name.trim(),
      contact.email,
      passwordHash,
      'student',
      contact.phone
    ]);

    const user = userResult.rows[0];

    await client.query(authQueries.createStudentProfile, [
      user.id,
      grade || null,
      dateOfBirth || null,
      school || null,
      address || null
    ]);

    await client.query('COMMIT');

    const profile = await getProfileByRole(user.id, 'student');
    const token = generateToken(user);

    return { user: profile, token };
  } catch (error) {
    await client.query('ROLLBACK');
    throw error;
  } finally {
    client.release();
  }
};

const registerParentWithStudent = async ({
  parentName,
  parentEmail,
  parentPassword,
  parentPhone,
  relationship,
  studentName,
  studentEmail,
  studentPhone,
  grade,
  dateOfBirth,
  school,
  address
}) => {
  const parentContact = formatContact({ email: parentEmail, phone: parentPhone });
  const studentContact = formatContact({ email: studentEmail, phone: studentPhone });

  await checkContactAvailability(parentContact);
  await checkContactAvailability(studentContact);

  const parentPasswordHash = await hashPassword(parentPassword);
  const studentPasswordHash = await hashPassword(`Dexmy@${Date.now().toString().slice(-6)}`);

  const client = await pool.connect();

  try {
    await client.query('BEGIN');

    const parentResult = await client.query(authQueries.createUser, [
      parentName.trim(),
      parentContact.email,
      parentPasswordHash,
      'parent',
      parentContact.phone
    ]);

    const parent = parentResult.rows[0];

    const studentResult = await client.query(authQueries.createUser, [
      studentName.trim(),
      studentContact.email,
      studentPasswordHash,
      'student',
      studentContact.phone
    ]);

    const student = studentResult.rows[0];

    await client.query(authQueries.createStudentProfile, [
      student.id,
      grade || null,
      dateOfBirth || null,
      school || null,
      address || null
    ]);

    await client.query(authQueries.createParentStudentLink, [
      parent.id,
      student.id,
      relationship || 'parent'
    ]);

    await client.query('COMMIT');

    const profile = await getProfileByRole(parent.id, 'parent');
    const token = generateToken(parent);

    return { user: profile, token, studentId: student.id };
  } catch (error) {
    await client.query('ROLLBACK');
    throw error;
  } finally {
    client.release();
  }
};

const login = async ({ identifier, password, role }) => {
  const contact = formatIdentifier(identifier);
  const query =
    contact.type === 'email' ? authQueries.findByEmailAndRole : authQueries.findByPhoneAndRole;

  const result = await pool.query(query, [contact.value, role]);

  if (result.rows.length === 0) {
    const error = new Error('Invalid credentials for selected role');
    error.statusCode = 401;
    throw error;
  }

  const user = result.rows[0];
  const isValid = await comparePassword(password, user.password_hash);

  if (!isValid) {
    const error = new Error('Invalid credentials for selected role');
    error.statusCode = 401;
    throw error;
  }

  const profile = await getProfileByRole(user.id, role);
  const token = generateToken(user);

  return { user: profile, token };
};

const getMe = async (userId, role) => getProfileByRole(userId, role);

module.exports = {
  registerTeacher,
  registerStudent,
  registerParentWithStudent,
  login,
  getMe
};
