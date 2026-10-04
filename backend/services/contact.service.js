const { validateContactPayload } = require('../validators/contact.validator');

class ContactService {
  processInquiry(payload) {
    const validation = validateContactPayload(payload);
    if (!validation.isValid) {
      return {
        success: false,
        statusCode: 400,
        errors: validation.errors,
      };
    }

    console.log('[ContactService] Received inquiry:', {
      name: payload.name,
      email: payload.email,
      timestamp: new Date().toISOString(),
    });

    return {
      success: true,
      statusCode: 200,
      message: 'Thank you! Your message has been received successfully.',
      referenceId: 'INQ-' + Date.now().toString(36).toUpperCase(),
    };
  }
}

module.exports = new ContactService();
