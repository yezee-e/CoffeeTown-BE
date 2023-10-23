const express = require('express');
const router = express.Router();
// const fs = require('fs');
const categoryController = require('../controllers/category.controller');
// const imagesController = require('../controllers/images.controller');

router.get('/list', categoryController.list);

// router.get('/images/:filename', (req, res) => {
//     const filename = req.params.filename;
//     const imagePath = `C:/CoffeeTown-BE/images/${filename}`;
//     res.sendFile(imagePath);
// });
  
//   module.exports = router;

// router.get('/image-list', imagesController.listImages);
// router.get('/product', categoryController.product);
// router.get('/page', categoryController.listAndproduct);

module.exports = router;
