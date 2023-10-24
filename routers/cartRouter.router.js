const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cart.controller');

router.post('/', cartController.addToCart);
router.get('/:user_email', cartController.getCartByUser);
router.put('/:cart_id', cartController.updateCartItem);
router.delete('/:cart_id', cartController.deleteCartItem);

module.exports = router;