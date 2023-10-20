const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cart.controller');

router.post('/', cartController.addCart);
router.get('/add', cartController.getCart);
router.delete('/:cart_id', cartController.deleteCart);
router.put('/:cart_id', cartController.updateCart);

module.exports = router;