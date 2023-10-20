const cartService = require('../services/cart.service');

// 장바구니에 상품 추가

const addCart = async (req, res) => {
  const { product_id, cart_ea } = req.body;
  const user_email = req.user_email;

  const totalPrice = cart_ea * product_price; // 총 가격 계산

  const cartItem = {
    product_id,
    user_email,
    cart_ea,
    total_price: totalPrice,
  };

  try {
    await cartService.addCart(cartItem);
    res.json({ message: 'Added to cart successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Failed to add to cart' });
  }
};

// 장바구니 조회

const getCart = async (req, res) => {
  const user_email = req.user_email;

  try {
    const cartItems = await cartService.getCart(user_email);
    res.json(cartItems);
  } catch (error) {
    res.status(400).json({ message: 'Failed to retrieve cart items' });
  }
};

// 카테고리 수량 업데이트

const updateCart = async (req, res) => {
  const cart_id = req.params.cart_id;
  const { cart_ea } = req.body;
  const user_email = req.user_email;

  const totalPrice = cart_ea * product_price; // 총 가격 계산

  try {
    await cartService.updateCart(cart_id, cart_ea, totalPrice, user_email);
    res.json({ message: 'Cart item updated successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Failed to update cart item' });
  }
};

// 장바구니 삭제

const deleteCart = async (req, res) => {
  const cart_id = req.params.cart_id;
  const user_email = req.user_email;

  try {
    await cartService.deleteCart(cart_id, user_email);
    res.json({ message: 'Cart item deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Failed to delete cart item' });
  }
};



module.exports = {
  addCart,
  getCart,
  updateCart,
  deleteCart
};