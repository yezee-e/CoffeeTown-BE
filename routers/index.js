const express = require('express');
const router = express.Router();
const userRouter = require('./userRouter.router');
const categoryRouter = require('./categoryRouter.router');

router.use('/main', categoryRouter);
router.use('/users', userRouter);

module.exports = router;
