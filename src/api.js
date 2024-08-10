const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  let userIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

  // Convertir ::1 a 127.0.0.1
  if (userIp === '::1') {
    userIp = '127.0.0.1';
  }

  res.json({
    ip: userIp,
  });
});

module.exports = router;