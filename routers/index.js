const express = require('express');
const router = express.Router();
const userRouter = require('./userRouter.router');
const menuRouter = require('./menuRouter.router');

router.use('/main', menuRouter);
router.use('/users', userRouter);

module.exports = router;
