const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const normalizePhone = (value) => value.replace(/\D/g, '');

const normalizeEmail = (value) => value.toLowerCase().trim();

const getContactError = (email, phone) => {
  if (!email && !phone) {
    return 'At least one of email or phone is required';
  }

  if (email && !isEmail(email)) {
    return 'Invalid email format';
  }

  if (phone && normalizePhone(phone).length < 10) {
    return 'Phone number must be at least 10 digits';
  }

  return null;
};

const formatContact = ({ email, phone }) => ({
  email: email ? normalizeEmail(email) : null,
  phone: phone ? normalizePhone(phone) : null
});

const formatIdentifier = (identifier) => {
  const value = identifier.trim();

  if (isEmail(value)) {
    return { type: 'email', value: normalizeEmail(value) };
  }

  return { type: 'phone', value: normalizePhone(value) };
};

module.exports = {
  isEmail,
  normalizePhone,
  normalizeEmail,
  getContactError,
  formatContact,
  formatIdentifier
};
