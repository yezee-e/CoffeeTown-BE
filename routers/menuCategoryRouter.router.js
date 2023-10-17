const express = require('express');
const router = express.Router();
const menuCategoryController = require('../controllers/menuCategory.controller');

router.get('/', menuCategoryController.menuCategory);

module.exports = router;
