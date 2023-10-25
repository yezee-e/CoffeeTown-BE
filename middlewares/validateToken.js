require('dotenv').config();
const jwt = require('jsonwebtoken');
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

// 발급받은 토큰인증
const validateToken = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      throw new Error('invalid token');
    }
    console.log('token1', token);

    newToken = token.includes('Bearer')
      ? token.replace(/^Bearer\s+/, '')
      : token;

    console.log('token5', newToken);
    const verified = jwt.verify(newToken, JWT_SECRET_KEY, (error, payload) => {
      if (error) {
        throw new Error('Auth Error from authChecker');
      } else {
        next();
      }
    }); //토큰검증
    console.log('dff', verified);
  } catch (error) {
    res.status(400).json({ status: 'fail', message: error.message });
  }
};

module.exports = validateToken;
