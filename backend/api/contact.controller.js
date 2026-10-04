const contactService = require('../services/contact.service');

function handleContactRequest(req, res) {
  if (req.method !== 'POST') {
    res.writeHead(405, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ success: false, message: 'Method Not Allowed' }));
    return;
  }

  let bodyStr = '';
  req.on('data', (chunk) => (bodyStr += chunk));
  req.on('end', () => {
    let payload = {};
    try {
      payload = JSON.parse(bodyStr);
    } catch (e) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: false, message: 'Invalid JSON payload' }));
      return;
    }

    const result = contactService.processInquiry(payload);
    res.writeHead(result.statusCode, {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
    });
    res.end(JSON.stringify(result));
  });
}

module.exports = { handleContactRequest };
