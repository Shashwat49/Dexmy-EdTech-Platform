const {
  isEmail,
  normalizePhone,
  normalizeEmail,
  getContactError,
  formatContact,
  formatIdentifier
} = require('../src/utils/authHelpers');

describe('authHelpers', () => {
  describe('getContactError', () => {
    it('requires at least email or phone', () => {
      expect(getContactError(null, null)).toMatch(/at least one/i);
    });

    it('accepts email only', () => {
      expect(getContactError('test@example.com', null)).toBeNull();
    });

    it('accepts phone only', () => {
      expect(getContactError(null, '9876543210')).toBeNull();
    });

    it('rejects invalid email', () => {
      expect(getContactError('invalid-email', null)).toMatch(/invalid email/i);
    });

    it('rejects short phone', () => {
      expect(getContactError(null, '12345')).toMatch(/10 digits/i);
    });
  });

  describe('formatContact', () => {
    it('normalizes email and phone', () => {
      expect(formatContact({ email: ' Test@Mail.COM ', phone: '+91 98765-43210' })).toEqual({
        email: 'test@mail.com',
        phone: '919876543210'
      });
    });
  });

  describe('formatIdentifier', () => {
    it('detects email identifier', () => {
      expect(formatIdentifier('user@example.com')).toEqual({
        type: 'email',
        value: 'user@example.com'
      });
    });

    it('detects phone identifier', () => {
      expect(formatIdentifier('+91-9876543210')).toEqual({
        type: 'phone',
        value: '919876543210'
      });
    });
  });
});
