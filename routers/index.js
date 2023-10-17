const express = require('express');
const router = express.Router();
const userRouter = require('./userRouter.router');
const menuCategoryRouter = require('./menuCategoryRouter.router');

router.use('', menuCategoryRouter);
router.use('/users', userRouter);

module.exports = router;

