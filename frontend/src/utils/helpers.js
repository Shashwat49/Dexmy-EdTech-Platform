export const capitalize = (str) =>
    str ? str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() : '';

export const truncate = (str, maxLength = 100) =>
    str && str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;

export const formatCurrency = (amount, currency = 'INR') =>
    new Intl.NumberFormat('en-IN', { style: 'currency', currency }).format(amount);

export const getInitials = (name = '') =>
    name.split(' ').map((n) => n[0]).join('').toUpperCase().slice(0, 2);

export const generateId = () => Math.random().toString(36).slice(2, 10);

export const classNames = (...classes) => classes.filter(Boolean).join(' ');
