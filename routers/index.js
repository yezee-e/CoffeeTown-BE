const express = require('express');
const router = express.Router();
const userRouter = require('./userRouter.router');
const categoryRouter = require('./categoryRouter.router');
const cartRouter = require('./cartRouter.router');
const path = require('path');

router.use('/main', categoryRouter);
router.use('/main/images', express.static(path.join(__dirname, '..', 'images')));
router.use('/users', userRouter);
router.use('/cart', cartRouter);

module.exports = router;
