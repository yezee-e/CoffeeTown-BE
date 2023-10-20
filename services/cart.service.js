const cartdao = require('../models/cart.dao');

// 장바구니 상품 추가

const addCart = (cartItem) => {
  return cartdao.addCart(cartItem);
};

// 장바구니 조회

const getCart = (user_email) => {
  return cartdao.getCart(user_email);
};

// 장바구니 수량 업데이트

const updateCart = (cart_id, cart_ea, totalPrice, user_email) => {
  return cartdao.updateCart(cart_id, cart_ea, totalPrice, user_email);
};

// 장바구니 삭제

const deleteCart = (cart_id, user_email) => {
  return cartdao.deleteCart(cart_id, user_email);
};



module.exports = {
  addCart,
  getCart,
  updateCart,
  deleteCart,
};