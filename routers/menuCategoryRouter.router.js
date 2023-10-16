const express = require('express');
const router = express.Router();
const menuCategoryController = require('../controllers/menuCategory.controller');
// const myDataSource = require('../models/index.js');

router.get('/category', menuCategoryController.menuCategory);

// router.get('/coffeetown', (req, res) => {
//     myDataSource.query('select * from product', (err, result) => {
//         if (err) res.status(500).send(err);
//         res.send(result);
//     });
// });

module.exports = router;
