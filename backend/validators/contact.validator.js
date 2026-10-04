function validateContactPayload(body) {
  const errors = [];

  if (!body || typeof body !== 'object') {
    return { isValid: false, errors: ['Request body must be a JSON object'] };
  }

  const { name, email, message } = body;

  if (!name || typeof name !== 'string' || name.trim().length < 2) {
    errors.push('Name is required and must be at least 2 characters');
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email.trim())) {
    errors.push('A valid email address is required');
  }

  if (!message || typeof message !== 'string' || message.trim().length < 5) {
    errors.push('Message is required and must be at least 5 characters');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

module.exports = { validateContactPayload };
