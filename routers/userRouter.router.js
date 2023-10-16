const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.post('/join', userController.signUp);


module.exports = router;
