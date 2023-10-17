const express = require('express');
const router = express.Router();
const userRouter = require('./userRouter.router');
const menuCategoryRouter = require('./menuCategoryRouter.router');
const productRouter = require('./productRouter.router');

router.use('/main', menuCategoryRouter);
router.use('/main', productRouter);
router.use('/users', userRouter);

module.exports = router;

