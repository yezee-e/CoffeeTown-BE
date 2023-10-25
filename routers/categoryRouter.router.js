const express = require('express');
const router = express.Router();
// const fs = require('fs');
const categoryController = require('../controllers/category.controller');
// const imagesController = require('../controllers/images.controller');

router.get('/list', categoryController.list);

module.exports = router;
