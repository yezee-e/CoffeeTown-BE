const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
// const authController = require('../controllers/auth.controller');
const validateToken = require('../middlewares/validateToken');

router.post('/join', userController.signUp);
router.post('/login', userController.loginWithEmail);

router.get('/', validateToken, userController.getUser);
//미들웨어기능으로 authController.authenticate동작 후에 next()로 userController.getUser를 수행

module.exports = router;
