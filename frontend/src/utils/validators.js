export const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const isValidPhone = (phone) =>
    /^[6-9]\d{9}$/.test(phone);

export const isValidPassword = (password) =>
    password && password.length >= 8;

export const isNotEmpty = (value) =>
    value !== null && value !== undefined && String(value).trim() !== '';

export const validateLoginForm = ({ email, password }) => {
    const errors = {};
    if (!isNotEmpty(email)) errors.email = 'Email is required';
    else if (!isValidEmail(email)) errors.email = 'Invalid email address';
    if (!isNotEmpty(password)) errors.password = 'Password is required';
    else if (!isValidPassword(password)) errors.password = 'Password must be at least 8 characters';
    return errors;
};

export const validateRegisterForm = ({ name, email, password }) => {
    const errors = {};
    if (!isNotEmpty(name)) errors.name = 'Name is required';
    if (!isNotEmpty(email)) errors.email = 'Email is required';
    else if (!isValidEmail(email)) errors.email = 'Invalid email address';
    if (!isNotEmpty(password)) errors.password = 'Password is required';
    else if (!isValidPassword(password)) errors.password = 'Minimum 8 characters required';
    return errors;
};
