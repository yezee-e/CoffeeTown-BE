const DataSource = require('../models/index');

// 장바구니에 상품 추가

const createCart = (product_id, user_email, product_ea) => {
  return new Promise((resolve, reject) => {

    const cart_id = `${user_email}_${product_id}`; // 대안 식별자
    const sql = 'INSERT INTO cart (cart_id, product_id, user_email, product_ea) VALUES (?, ?, ?, ?)';
    const values = [cart_id, product_id, user_email, product_ea];

    DataSource.query(sql, values)
      .then(results => {
        resolve(results);
      })
      .catch(error => {
        reject(error);
      });
  });
};

// 장바구니 조회

const getCartByUser = (user_email) => {
  return new Promise((resolve, reject) => {

    const sql = `
    SELECT c.cart_num, c.cart_id, c.product_id, c.user_email, c.product_ea,
           p.product_image,
           (c.product_ea * p.product_price) AS cart_totalprice
    FROM cart c
    JOIN product p ON c.product_id = p.product_id
    WHERE c.user_email = ?;
  `;
    const values = [user_email];

    DataSource.query(sql, values)
      .then(results => {
        resolve(results);
      })
      .catch(error => {
        reject(error);
      });
  });
};

// 장바구니 수량 업데이트

const updateCartItem = (changeAmount, cart_id) => {
  return new Promise((resolve, reject) => {

    const sql = 'UPDATE cart SET product_ea = product_ea + ? WHERE cart_id = ?';
    const values = [changeAmount, cart_id];

    DataSource.query(sql, values)
      .then(results => {
        resolve(results);
      })
      .catch(error => {
        reject(error);
      });
  });
};

// 장바구니 삭제

const deleteCartItem = (cart_id) => {
  return new Promise((resolve, reject) => {

    const sql = 'DELETE FROM cart WHERE cart_id = ?';
    const values = [cart_id];

    DataSource.query(sql, values)
      .then(results => {
        resolve(results);
      })
      .catch(error => {
        reject(error);
      });
  });
};


module.exports = {
  createCart,
  getCartByUser,
  updateCartItem,
  deleteCartItem,
};