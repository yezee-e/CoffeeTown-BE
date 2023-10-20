const express = require('express');
const router = express.Router();
const userRouter = require('./userRouter.router');
const categoryRouter = require('./categoryRouter.router');
const cartRouter = require('./cartRouter.router');
// const pathRouter = require('./pathRouter.router');


// router.use('/images', pathRouter);
router.use('/main', categoryRouter);
router.use('/users', userRouter);
router.use('/cart', cartRouter);

module.exports = router;
