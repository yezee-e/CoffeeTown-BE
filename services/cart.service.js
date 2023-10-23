const cartDao = require('../models/cart.dao');

// 장바구니에 상품 추가

const addToCart = (product_id, user_email, product_ea) => {
  return cartDao.createCart(product_id, user_email, product_ea);
};

// 장바구니 조회

const getCartByUser = (user_email) => {
  return cartDao.getCartByUser(user_email);
};

// 장바구니 수량 업데이트

const updateCartItem = (changeAmount, cart_id) => {
  return cartDao.updateCartItem(changeAmount, cart_id);
};

// 장바구니 삭제

const deleteCartItem = (cart_id) => {
  return cartDao.deleteCartItem(cart_id);
};

module.exports = {
  addToCart,
  getCartByUser,
  updateCartItem,
  deleteCartItem,
};

