const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category.controller');

router.get('/list', categoryController.list);
// router.get('/product', categoryController.product);
// router.get('/page', categoryController.listAndproduct);

module.exports = router;
